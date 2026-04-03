const projects = [
  {
    num: '01',
    title: 'HostelSync',
    category: 'Full Stack / Next.js 15',
    summary: 'Enterprise-grade hostel management portal connecting students and admins. Features real-time complaint tracking, Supabase auth, PostgreSQL with RLS, and dynamic analytics.',
    techColor: 'bg-uno-blue',
    featColor: 'bg-uno-red',
    btnBorder: 'border-uno-red',
    techIcon: 'dns',
    techLabel: 'Next.js\n15',
    featIcon: 'sync',
    featLabel: 'Real-time\nSync',
    ghColor: 'bg-uno-blue',
    liveLink: 'https://synchostel.vercel.app',
    ghLink: 'https://github.com/Md-Arif-hasnat99/hostelsync',
    btnHover: 'hover:bg-uno-red',
  },
  {
    num: '02',
    title: 'CollabFlow',
    category: 'Full Stack / React + Firebase',
    summary: 'Real-time Kanban project management workspace for remote teams. Features drag-and-drop boards, Firebase auth, role-based access, and live task sync across all clients.',
    techColor: 'bg-uno-yellow',
    featColor: 'bg-uno-green',
    btnBorder: 'border-uno-blue',
    techIcon: 'view_kanban',
    techLabel: 'React\nFirebase',
    featIcon: 'drag_indicator',
    featLabel: 'Drag &\nDrop',
    ghColor: 'bg-uno-red',
    liveLink: 'https://collab-flow-self.vercel.app',
    ghLink: 'https://github.com/Md-Arif-hasnat99/Collab-Flow',
    btnHover: 'hover:bg-uno-blue',
  },
  {
    num: '03',
    title: 'VibeStream',
    category: 'ML / React + FastAPI + Python',
    summary: 'Hybrid movie & music recommendation engine using SVD collaborative filtering and TF-IDF content-based algorithms. Features mood-sync playlists, TMDB/Spotify artwork, and Framer Motion UI.',
    techColor: 'bg-uno-green',
    featColor: 'bg-uno-blue',
    btnBorder: 'border-uno-green',
    techIcon: 'psychology',
    techLabel: 'ML\nEngine',
    featIcon: 'music_note',
    featLabel: 'Mood\nSync',
    ghColor: 'bg-uno-yellow',
    liveLink: 'https://vibe-stream-three.vercel.app',
    ghLink: 'https://github.com/Md-Arif-hasnat99/VibeStream',
    btnHover: 'hover:bg-uno-green',
  },
  {
    num: '04',
    title: 'YojnaMitra',
    category: 'Civic Tech / React + Supabase',
    summary: 'Smart government scheme discovery platform for Indian citizens. Matches 50+ welfare schemes via a weighted eligibility algorithm. Bilingual (English + Hindi) with Supabase backend and RLS.',
    techColor: 'bg-uno-red',
    featColor: 'bg-uno-yellow',
    btnBorder: 'border-uno-red',
    techIcon: 'policy',
    techLabel: 'Scheme\nMatch',
    featIcon: 'translate',
    featLabel: 'Bilingual\nUI',
    ghColor: 'bg-uno-green',
    liveLink: 'https://yojna-mitra-xi.vercel.app',
    ghLink: 'https://github.com/Md-Arif-hasnat99/Yojna-Mitra',
    btnHover: 'hover:bg-uno-red',
  },
  {
    num: '05',
    title: 'KarmaCommits',
    category: 'Full Stack / Open Source Contribution Tracker',
    summary: 'A specialized platform designed to streamline and gamify open-source contributions. Track commits, manage pull requests, and foster community engagement through a transparent reputation-based system.',
    techColor: 'bg-uno-blue',
    featColor: 'bg-uno-green',
    btnBorder: 'border-uno-green',
    techIcon: 'api',
    techLabel: 'GitHub\nAPI',
    featIcon: 'emoji_events',
    featLabel: 'Karma\nRank',
    ghColor: 'bg-uno-yellow',
    liveLink: 'https://karma-commits.vercel.app',
    ghLink: 'https://github.com/sujitKrS04/karma-commits',
    btnHover: 'hover:bg-uno-green',
  },
  {
    num: '06',
    title: 'ClearCue',
    category: 'Full Stack / AI / Next.js 14',
    summary: 'An interactive, AI-powered interview preparation platform that helps candidates refine their pitch. Uses Groq API to provide real-time, actionable feedback on tailored interview questions.',
    techColor: 'bg-uno-yellow',
    featColor: 'bg-uno-red',
    btnBorder: 'border-uno-red',
    techIcon: 'psychology',
    techLabel: 'Groq\nAI Engine',
    featIcon: 'mic',
    featLabel: 'Mock\nInterviews',
    ghColor: 'bg-uno-blue',
    liveLink: 'https://clear-cue.vercel.app',
    ghLink: 'https://github.com/Md-Arif-hasnat99/ClearCue',
    btnHover: 'hover:bg-uno-red',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-white py-12 md:py-16 scroll-mt-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="text-center space-y-2 mb-10 md:mb-12 overflow-visible">
          <div className="pb-4">
            <h2 className="text-4xl sm:text-7xl md:text-8xl font-black italic tracking-tighter uno-logo-text border-4 md:border-8 border-black rounded-full px-6 md:px-12 py-2 md:py-4 bg-white inline-block shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] uppercase">Projects</h2>
          </div>
          <p className="text-lg md:text-2xl font-bold text-black uppercase tracking-[0.2em] md:tracking-[0.3em] mt-2">Gallery Score Sheet</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
          {projects.map(({ num, title, category, summary, techColor, featColor, btnBorder, techIcon, techLabel, featIcon, featLabel, ghColor, liveLink, ghLink, btnHover }, index) => (
            <div key={num} className={`project-card-container relative group transition-transform duration-300 hover:-translate-y-2${index === projects.length - 1 && projects.length % 3 !== 0 ? ' lg:col-start-2' : ''}`}>
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
                    <a className={`block w-full border-4 ${btnBorder} py-4 px-4 rounded-lg flex items-center justify-center group/btn wild-btn-transition ${btnHover}`} href={liveLink} target="_blank" rel="noopener noreferrer">
                      <span className="bg-black text-white px-6 py-2 rounded-full border-2 border-white text-sm font-black uppercase tracking-widest transition-transform group-hover/btn:scale-105">VIEW PROJECT</span>
                    </a>
                    <div className="flex justify-center pt-4">
                      <a className={`w-10 h-14 ${ghColor} border-2 border-black rounded-md flex items-center justify-center shadow-[2px_2px_0px_black] hover:scale-110 transition-transform`} href={ghLink} target="_blank" rel="noopener noreferrer">
                        <img src="/icons/github.svg" alt="GitHub" className="w-6 h-6" style={{filter: 'invert(1)'}} />
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
