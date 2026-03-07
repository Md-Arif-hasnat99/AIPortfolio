const projects = [
  {
    num: '01',
    title: 'Cyber Deck Builder',
    category: 'Game Development / Vue.js',
    summary: 'A high-stakes strategy card game built with modern web technologies. Features real-time multiplayer.',
    techColor: 'bg-uno-blue',
    featColor: 'bg-uno-red',
    btnBorder: 'border-uno-red',
    techIcon: 'javascript',
    techLabel: 'Vue.js\nEngine',
    featIcon: 'groups',
    featLabel: 'Real-time\nPvP',
    ghColor: 'bg-uno-blue',
    liveColor: 'bg-uno-green',
    btnHover: 'hover:bg-uno-red',
  },
  {
    num: '02',
    title: 'Color Switcher AI',
    category: 'Machine Learning / Python',
    summary: 'Neural network that predicts optimal color palettes based on user sentiment analysis.',
    techColor: 'bg-uno-yellow',
    featColor: 'bg-uno-green',
    btnBorder: 'border-uno-blue',
    techIcon: 'psychology',
    techLabel: 'TensorFlow\nPy',
    featIcon: 'auto_fix_high',
    featLabel: 'Smart\nPalettes',
    ghColor: 'bg-uno-red',
    liveColor: 'bg-uno-yellow',
    btnHover: 'hover:bg-uno-blue',
  },
  {
    num: '03',
    title: 'Wild Cloud Sync',
    category: 'Infrastructure / Go',
    summary: 'Distributed file synchronization service focusing on speed and zero-knowledge encryption.',
    techColor: 'bg-uno-green',
    featColor: 'bg-uno-blue',
    btnBorder: 'border-uno-green',
    techIcon: 'terminal',
    techLabel: 'Go\nRuntime',
    featIcon: 'enhanced_encryption',
    featLabel: 'Zero-K\nSync',
    ghColor: 'bg-uno-yellow',
    liveColor: 'bg-uno-blue',
    btnHover: 'hover:bg-uno-green',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-white py-12 md:py-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="text-center space-y-2 mb-10 md:mb-12">
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-black italic tracking-tighter uno-logo-text border-8 border-black rounded-full px-8 md:px-12 py-3 md:py-4 bg-white inline-block shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] uppercase">Projects</h2>
          <p className="text-lg md:text-2xl font-bold text-black uppercase tracking-[0.2em] md:tracking-[0.3em] mt-6">Gallery Score Sheet</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
          {projects.map(({ num, title, category, summary, techColor, featColor, btnBorder, techIcon, techLabel, featIcon, featLabel, ghColor, liveColor, btnHover }) => (
            <div key={num} className="project-card-container relative group transition-transform duration-300 hover:-translate-y-2">
              <div className={`drawn-uno-card-base drawn-card-tech w-40 h-60 ${techColor} border-4 border-black rounded-xl p-2 flex flex-col items-center justify-center text-center shadow-[6px_6px_0px_black]`}>
                <div className={`uno-card-inner w-full h-full rounded-lg flex flex-col items-center justify-center p-2 relative overflow-hidden ${techColor}`}>
                  <span className="material-symbols-outlined text-white text-4xl z-10">{techIcon}</span>
                  <p className="text-white font-black italic text-xs mt-1 z-10 uppercase whitespace-pre-line">{techLabel}</p>
                  <span className="absolute top-1 left-1 text-white font-black text-sm italic">T</span>
                </div>
              </div>
              <div className={`drawn-uno-card-base drawn-card-feature w-40 h-60 ${featColor} border-4 border-black rounded-xl p-2 flex flex-col items-center justify-center text-center shadow-[6px_6px_0px_black]`}>
                <div className={`uno-card-inner w-full h-full rounded-lg flex flex-col items-center justify-center p-2 relative overflow-hidden ${featColor}`}>
                  <span className="material-symbols-outlined text-white text-4xl z-10">{featIcon}</span>
                  <p className="text-white font-black italic text-xs mt-1 z-10 uppercase whitespace-pre-line">{featLabel}</p>
                  <span className="absolute top-1 left-1 text-white font-black text-sm italic">F</span>
                </div>
              </div>
              <div className="flex flex-col bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative z-10 h-full">
                <div className="bg-black text-white py-3 px-6">
                  <h3 className="text-2xl font-black uppercase tracking-widest italic">Score Card #{num}</h3>
                </div>
                <div className="p-6 flex-1 flex flex-col bg-[#ffffe0] relative">
                  <div className="border-b-2 border-black pb-1 mb-6">
                    <span className="text-xs font-black uppercase text-gray-500">Project Name</span>
                    <p className="text-2xl font-black uppercase">{title}</p>
                  </div>
                  <div className="border-b-2 border-black pb-1 mb-6">
                    <span className="text-xs font-black uppercase text-gray-500">Category</span>
                    <p className="text-lg font-bold">{category}</p>
                  </div>
                  <div className="flex-1 min-h-[100px] mb-8">
                    <span className="text-xs font-black uppercase text-gray-500">Summary</span>
                    <p className="text-sm font-medium leading-relaxed mt-2 text-slate-700">{summary}</p>
                  </div>
                  <div className="space-y-4">
                    <a className={`block w-full border-4 ${btnBorder} py-4 px-4 rounded-lg flex items-center justify-center group/btn wild-btn-transition ${btnHover}`} href="#">
                      <span className="bg-black text-white px-6 py-2 rounded-full border-2 border-white text-sm font-black uppercase tracking-widest transition-transform group-hover/btn:scale-105">VIEW PROJECT</span>
                    </a>
                    <div className="flex justify-center gap-6 pt-4">
                      <a className={`w-10 h-14 ${ghColor} border-2 border-black rounded-md flex items-center justify-center card-tilt-left shadow-[2px_2px_0px_black] hover:scale-110 transition-transform`} href="#">
                        <span className="text-white text-xs font-black italic">GH</span>
                      </a>
                      <a className={`w-10 h-14 ${liveColor} border-2 border-black rounded-md flex items-center justify-center card-tilt-right shadow-[2px_2px_0px_black] hover:scale-110 transition-transform`} href="#">
                        <span className="material-symbols-outlined text-white text-lg">link</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
