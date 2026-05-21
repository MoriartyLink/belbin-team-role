import React, { useRef, useState } from 'react';
import { ASSESSMENT_DATA, ROLES } from '../data/assessmentData';
import type { RoleCode, RoleDetail } from '../data/assessmentData';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface ResultsProps {
  scores: Record<string, number>;
  onReset: () => void;
}

const RoleCard = ({ role, title, total }: { role: RoleDetail, title: string, total: number }) => (
  <div className="bg-white p-8 rounded-2xl border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-12">
    <div className="flex justify-between items-start mb-8 border-b-2 border-black pb-6">
      <div>
        <h3 className="text-xs font-black text-black uppercase tracking-[0.3em] mb-2 font-header">{title}</h3>
        <h4 className="text-4xl font-black text-black tracking-tighter font-header uppercase">{role.name}</h4>
      </div>
      <div className="bg-black text-white text-3xl font-black px-6 py-3 rounded-xl tabular-nums shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
        {total} <span className="text-xs font-light text-gray-400">PTS</span>
      </div>
    </div>
    
    <p className="text-black text-lg mb-10 leading-relaxed font-medium">{role.description}</p>
    
    <div className="grid md:grid-cols-2 gap-8 mb-10">
      <div className="border-l-4 border-green-600 pl-6">
        <h5 className="text-[10px] font-black text-green-600 mb-4 uppercase tracking-[0.2em]">
          Primary Strengths
        </h5>
        <ul className="space-y-3">
          {role.strengths.map((s, i) => (
            <li key={i} className="text-sm text-black flex items-start font-medium">
              <span className="mr-2">•</span> {s}
            </li>
          ))}
        </ul>
      </div>
      <div className="border-l-4 border-red-600 pl-6">
        <h5 className="text-[10px] font-black text-red-600 mb-4 uppercase tracking-[0.2em]">
          Behavioral Risks
        </h5>
        <ul className="space-y-3">
          {role.weaknesses.map((w, i) => (
            <li key={i} className="text-sm text-black flex items-start font-medium">
              <span className="mr-2">•</span> {w}
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="pt-8 border-t-2 border-black border-dashed">
      <h5 className="text-[10px] font-black text-gray-400 mb-5 uppercase tracking-[0.3em]">Archetypal Examples</h5>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded-xl border border-black/5 text-center">
          <span className="text-[9px] text-gray-400 block mb-1 uppercase tracking-widest font-black">Historical</span>
          <span className="font-black text-black tracking-tight uppercase text-sm">{role.examples.historical}</span>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl border border-black/5 text-center">
          <span className="text-[9px] text-gray-400 block mb-1 uppercase tracking-widest font-black">Modern</span>
          <span className="font-black text-black tracking-tight uppercase text-sm">{role.examples.modern}</span>
        </div>
      </div>
    </div>
  </div>
);

const Results: React.FC<ResultsProps> = ({ scores, onReset }) => {
  const resultsRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // Calculate totals per RoleCode
  const roleTotals: Record<RoleCode, number> = {
    SH: 0, IMP: 0, CF: 0, CO: 0, TW: 0, RI: 0, PL: 0, ME: 0
  };

  ASSESSMENT_DATA.forEach(section => {
    section.statements.forEach(statement => {
      const points = scores[statement.id] || 0;
      roleTotals[statement.roleCode] += points;
    });
  });

  const sortedRoles = (Object.keys(roleTotals) as RoleCode[])
    .map(code => ({ code, total: roleTotals[code] }))
    .sort((a, b) => b.total - a.total);

  const primaryRole = ROLES[sortedRoles[0].code];
  const secondaryRole = ROLES[sortedRoles[1].code];

  const handleSaveAsPDF = async () => {
    const username = window.prompt("Please enter your name for the report:");
    if (!username) return;

    setIsGenerating(true);
    const element = resultsRef.current;
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      
      const finalWidth = imgWidth * ratio;
      const finalHeight = imgHeight * ratio;
      
      let heightLeft = finalHeight;
      let position = 0;

      pdf.setFontSize(10);
      pdf.text(`Belbin Role Assessment - ${username}`, 10, 10);
      
      // Add first page
      pdf.addImage(imgData, 'PNG', 0, 15, finalWidth, finalHeight);
      heightLeft -= (pdfHeight - 15);

      // Add subsequent pages if needed
      while (heightLeft >= 0) {
        position = heightLeft - finalHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, finalWidth, finalHeight);
        heightLeft -= pdfHeight;
      }

      pdf.save(`Belbin_Report_${username.replace(/\s+/g, '_')}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div ref={resultsRef} className="bg-white p-4">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-black text-black tracking-tighter mb-4 font-header uppercase">Profile Analysis</h2>
          <p className="text-gray-400 text-xs font-black uppercase tracking-[0.5em]">Behavioral Blueprint Summary</p>
        </div>

        <RoleCard title="Dominant Archetype" role={primaryRole} total={sortedRoles[0].total} />
        <RoleCard title="Secondary Archetype" role={secondaryRole} total={sortedRoles[1].total} />

        <div className="bg-white p-10 rounded-2xl border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-16">
          <h3 className="text-xs font-black mb-12 text-black uppercase tracking-[0.3em] flex items-center">
            Comprehensive Spectrum
            <div className="ml-6 flex-grow h-[2px] bg-black"></div>
          </h3>
          <div className="space-y-8">
            {sortedRoles.map(({ code, total }) => (
              <div key={code} className="group flex items-center gap-8">
                <div className="w-10 font-black text-black/20 group-hover:text-black transition-colors tabular-nums text-xl tracking-tighter">{code}</div>
                <div className="w-40 text-[10px] font-black text-black uppercase tracking-widest truncate">{ROLES[code].name}</div>
                <div className="flex-grow bg-gray-100 h-3 rounded-none overflow-hidden border border-black/5">
                  <div 
                    className="bg-black h-full transition-all duration-[1500ms] ease-out" 
                    style={{ width: `${(total / 50) * 100}%` }}
                  ></div>
                </div>
                <div className="w-12 text-right font-black text-black tabular-nums">{total}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center pb-12 flex flex-col sm:flex-row justify-center gap-6">
        <button 
          onClick={handleSaveAsPDF}
          disabled={isGenerating}
          className="bg-black text-white px-12 py-4 rounded-full font-black text-sm uppercase tracking-[0.2em] border-2 border-black hover:bg-white hover:text-black transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-none translate-y-0 hover:translate-x-1 hover:translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isGenerating ? 'Generating...' : 'Save as PDF'}
        </button>
        <button 
          onClick={onReset}
          className="bg-white text-black px-12 py-4 rounded-full font-black text-sm uppercase tracking-[0.2em] border-2 border-black hover:bg-black hover:text-white transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none translate-y-0 hover:translate-x-1 hover:translate-y-1"
        >
          Reset Inventory
        </button>
      </div>
    </div>
  );
};

export default Results;
