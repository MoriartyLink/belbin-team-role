import React from 'react';
import type { Section as SectionType } from '../data/assessmentData';

interface SectionProps {
  section: SectionType;
  points: Record<string, number>;
  onPointChange: (statementId: string, value: number) => void;
  totalPoints: number;
  language: 'en' | 'my';
}

const Section: React.FC<SectionProps> = ({ section, points, onPointChange, totalPoints, language }) => {
  return (
    <div className="bg-white p-8 rounded-2xl border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-2xl mx-auto transition-all duration-500">
      <h2 className="text-3xl font-black mb-2 text-black tracking-tight font-header uppercase">
        {language === 'my' ? section.burmeseTitle : section.title}
      </h2>
      <p className="mb-10 text-gray-500 font-medium text-xs uppercase tracking-widest">
        {language === 'my' ? 'ရမှတ်ခွဲဝေမှု // စုစုပေါင်း ၁၀ မှတ်' : 'Allocation Protocol // 10 Units Total'}
      </p>

      <div className="space-y-12">
        {section.statements.map((statement) => (
          <div key={statement.id} className="group">
            <div className="flex justify-between items-start mb-4 gap-6">
              <p className="text-base font-medium text-black group-hover:text-gray-600 transition-colors leading-relaxed">
                {language === 'my' ? statement.burmeseText : statement.text}
              </p>
              <div className={`flex items-center justify-center w-12 h-12 rounded-lg border-2 font-black text-lg transition-all duration-300 ${
                (points[statement.id] || 0) > 0 
                  ? 'bg-black text-white border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]' 
                  : 'bg-white text-gray-300 border-gray-100'
              }`}>
                {points[statement.id] || 0}
              </div>
            </div>
            <div className="relative flex items-center group/slider">
              <input
                type="range"
                min="0"
                max="10"
                step="1"
                value={points[statement.id] || 0}
                onChange={(e) => onPointChange(statement.id, parseInt(e.target.value) || 0)}
                className="w-full h-4 bg-gray-100 rounded-none appearance-none cursor-pointer accent-black border border-black/5"
              />
              <div className="absolute -bottom-6 w-full flex justify-between px-1 text-[8px] text-gray-400 font-black uppercase tracking-[0.2em] pointer-events-none">
                <span>Min</span>
                <span>Max</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 pt-8 border-t-2 border-black flex justify-between items-end">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-black mb-1">Current Aggregate</span>
          <div className={`text-4xl font-black tabular-nums transition-colors duration-500 ${totalPoints === 10 ? 'text-green-600' : 'text-black'}`}>
            {totalPoints} <span className="text-sm font-light text-gray-400">/ 10</span>
          </div>
        </div>
        
        {totalPoints !== 10 && (
          <div className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest border-2 transition-all duration-300 ${
            totalPoints > 10 ? 'bg-red-50 text-red-600 border-red-600' : 'bg-white text-black border-black animate-pulse'
          }`}>
            {totalPoints > 10 ? 'Capacity Exceeded' : `${10 - totalPoints} units pending`}
          </div>
        )}
      </div>
    </div>
  );
};

export default Section;
