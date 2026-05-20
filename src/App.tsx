import { useState } from 'react';
import { ASSESSMENT_DATA } from './data/assessmentData';
import Section from './components/Section';
import Results from './components/Results';

type View = 'intro' | 'assessment' | 'results';

function App() {
  const [view, setView] = useState<View>('intro');
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [language, setLanguage] = useState<'en' | 'my'>('en');

  const currentSection = ASSESSMENT_DATA[currentSectionIndex];

  const handlePointChange = (statementId: string, value: number) => {
    // Basic validation to prevent negative numbers
    if (value < 0) return;
    
    setScores(prev => ({
      ...prev,
      [statementId]: value
    }));
  };

  const calculateSectionTotal = (sectionIndex: number) => {
    const section = ASSESSMENT_DATA[sectionIndex];
    return section.statements.reduce((sum, s) => sum + (scores[s.id] || 0), 0);
  };

  const sectionTotal = calculateSectionTotal(currentSectionIndex);

  const nextSection = () => {
    if (sectionTotal !== 10) return;
    
    if (currentSectionIndex < ASSESSMENT_DATA.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
      window.scrollTo(0, 0);
    } else {
      setView('results');
    }
  };

  const prevSection = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
      window.scrollTo(0, 0);
    }
  };

  const resetAssessment = () => {
    setScores({});
    setCurrentSectionIndex(0);
    setView('intro');
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 font-mono text-black text-lg">
      <div className="max-w-3xl mx-auto">
        {view === 'intro' && (
          <div className="bg-white p-10 rounded-2xl border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h1 className="text-4xl font-black mb-10 font-header text-center uppercase tracking-widest leading-tight">
              Belbin Team Roles
            </h1>
            
            <div className="prose prose-slate max-w-none mb-10 text-black leading-relaxed font-mono">
              <p className="text-lg mb-4 font-medium">
                The <span className="underline decoration-2">Belbin Team Roles</span> assessment is a globally recognized tool designed to identify behavioral strengths and weaknesses within a team.
              </p>
              <p className="mb-4">
                Dr. Belbin discovered that the most successful teams are those with a <strong>balanced mix of behavioral roles</strong>. There are nine distinct roles, ranging from creative to organized.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-xs font-black uppercase tracking-widest mt-8">
                <div className="bg-black text-white p-4 rounded-xl flex items-center">
                  Maximize Contribution
                </div>
                <div className="bg-black text-white p-4 rounded-xl flex items-center">
                  Improve Communication
                </div>
                <div className="bg-black text-white p-4 rounded-xl flex items-center">
                  Balance Dynamics
                </div>
                <div className="bg-black text-white p-4 rounded-xl flex items-center">
                  Boost Productivity
                </div>
              </div>
            </div>

            <div className="border-t-2 border-black pt-8 mb-10">
              <h3 className="font-black text-black mb-4 uppercase tracking-widest text-sm">
                Protocol:
              </h3>
              <ul className="space-y-2 text-sm font-medium">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span> 5 Focus Sections</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span> 10 Points Distribution</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span> Sum must equal 10 exactly</li>
              </ul>
            </div>
            
            <div className="text-center">
              <button
                onClick={() => setView('assessment')}
                className="bg-black text-white px-12 py-4 rounded-full text-xl font-black hover:bg-gray-800 transition-all uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
              >
                Begin Assessment
              </button>
            </div>
          </div>
        )}

        {view === 'assessment' && (
          <div>
            <div className="mb-10 flex flex-col items-center">
              <div className="flex justify-between w-full mb-6">
                <button
                  onClick={() => setLanguage(language === 'en' ? 'my' : 'en')}
                  className="bg-white border-2 border-black px-4 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                >
                  {language === 'en' ? 'Translate to Burmese (မြန်မာ)' : 'Switch to English'}
                </button>
              </div>
              <div className="flex justify-between w-full mb-2 px-1 text-[10px] font-black uppercase tracking-[0.2em]">
                <span>Section {currentSectionIndex + 1} / {ASSESSMENT_DATA.length}</span>
                <span>{Math.round(((currentSectionIndex + 1) / ASSESSMENT_DATA.length) * 100)}%</span>
              </div>
              <div className="flex gap-1 w-full bg-gray-100 p-1 rounded-full border border-black/5">
                {ASSESSMENT_DATA.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1.5 flex-grow rounded-full transition-all duration-500 ${
                      i <= currentSectionIndex ? 'bg-black' : 'bg-transparent'
                    }`}
                  ></div>
                ))}
              </div>
            </div>

            <Section
              section={currentSection}
              points={scores}
              onPointChange={handlePointChange}
              totalPoints={sectionTotal}
              language={language}
            />

            <div className="mt-10 flex justify-between items-center px-2">
              <button
                onClick={prevSection}
                disabled={currentSectionIndex === 0}
                className={`px-6 py-2 rounded-lg font-black text-xs uppercase tracking-widest transition-all ${
                  currentSectionIndex === 0 
                    ? 'opacity-0' 
                    : 'text-black hover:bg-gray-100'
                }`}
              >
                Back
              </button>
              <button
                onClick={nextSection}
                disabled={sectionTotal !== 10}
                className={`px-10 py-3 rounded-full font-black text-sm uppercase tracking-widest transition-all ${
                  sectionTotal === 10
                    ? 'bg-black text-white hover:bg-gray-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                {currentSectionIndex === ASSESSMENT_DATA.length - 1 ? 'See Results' : 'Next Step'}
              </button>
            </div>
          </div>
        )}

        {view === 'results' && (
          <Results scores={scores} onReset={resetAssessment} />
        )}
      </div>
    </div>
  );
}

export default App;
