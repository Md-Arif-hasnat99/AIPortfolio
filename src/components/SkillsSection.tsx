import { useState } from 'react';

interface Skill {
  id: number;
  label: string;
  sublabel: string;
  name: string;
  sub: string;
  bg: string;
  border: string;
  text: string;
}

const ALL_SKILLS: Skill[] = [
  { id: 1,  label: 'FE', sublabel: 'FRONT', name: 'React',      sub: 'Library',   bg: 'bg-[#f20d0d]',   border: 'border-[#f20d0d]',   text: 'text-[#f20d0d]'   },
  { id: 2,  label: 'BE', sublabel: 'BACK',  name: 'Node.js',    sub: 'Runtime',   bg: 'bg-green-500',   border: 'border-green-500',   text: 'text-green-600'   },
  { id: 3,  label: 'DT', sublabel: 'DATA',  name: 'Python',     sub: 'Language',  bg: 'bg-yellow-400',  border: 'border-yellow-400',  text: 'text-yellow-600'  },
  { id: 4,  label: 'CL', sublabel: 'CLOUD', name: 'AWS',        sub: 'Platform',  bg: 'bg-blue-600',    border: 'border-blue-600',    text: 'text-blue-600'    },
  { id: 5,  label: 'UI', sublabel: 'STYLE', name: 'CSS',        sub: 'Styling',   bg: 'bg-cyan-500',    border: 'border-cyan-500',    text: 'text-cyan-600'    },
  { id: 6,  label: 'FE', sublabel: 'FRONT', name: 'TypeScript', sub: 'Language',  bg: 'bg-[#f20d0d]',   border: 'border-[#f20d0d]',   text: 'text-[#f20d0d]'   },
  { id: 7,  label: 'FE', sublabel: 'FRONT', name: 'Next.js',    sub: 'Framework', bg: 'bg-[#f20d0d]',   border: 'border-[#f20d0d]',   text: 'text-[#f20d0d]'   },
  { id: 8,  label: 'BE', sublabel: 'BACK',  name: 'FastAPI',    sub: 'Framework', bg: 'bg-green-500',   border: 'border-green-500',   text: 'text-green-600'   },
  { id: 9,  label: 'DT', sublabel: 'DATA',  name: 'Postgres',   sub: 'Database',  bg: 'bg-yellow-400',  border: 'border-yellow-400',  text: 'text-yellow-600'  },
  { id: 10, label: 'CL', sublabel: 'CLOUD', name: 'Docker',     sub: 'Container', bg: 'bg-blue-600',    border: 'border-blue-600',    text: 'text-blue-600'    },
  { id: 11, label: 'BE', sublabel: 'BACK',  name: 'Go',         sub: 'Language',  bg: 'bg-green-500',   border: 'border-green-500',   text: 'text-green-600'   },
  { id: 12, label: 'DT', sublabel: 'DATA',  name: 'MongoDB',    sub: 'Database',  bg: 'bg-yellow-400',  border: 'border-yellow-400',  text: 'text-yellow-600'  },
  { id: 13, label: 'CL', sublabel: 'CLOUD', name: 'Kubernetes', sub: 'Orchestr.', bg: 'bg-blue-600',    border: 'border-blue-600',    text: 'text-blue-600'    },
  { id: 14, label: 'UI', sublabel: 'STYLE', name: 'Tailwind',   sub: 'Framework', bg: 'bg-cyan-500',    border: 'border-cyan-500',    text: 'text-cyan-600'    },
  { id: 15, label: 'FE', sublabel: 'FRONT', name: 'Vue.js',     sub: 'Framework', bg: 'bg-[#f20d0d]',   border: 'border-[#f20d0d]',   text: 'text-[#f20d0d]'   },
  { id: 16, label: 'BE', sublabel: 'BACK',  name: 'GraphQL',    sub: 'API',       bg: 'bg-green-500',   border: 'border-green-500',   text: 'text-green-600'   },
];

function SkillCard({ skill, size = 'lg' }: { skill: Skill; size?: 'lg' | 'sm' }) {
  if (size === 'sm') {
    return (
      <div className={`min-w-[140px] h-[200px] ${skill.bg} rounded-xl p-2.5 shadow-md flex flex-col justify-between border-[5px] border-white`}>
        <div className="text-white font-black text-lg">{skill.label}</div>
        <div className="flex-grow flex items-center justify-center">
          <div className={`w-full h-20 bg-white rounded-3xl transform -rotate-12 flex items-center justify-center border-4 ${skill.border}`}>
            <span className={`${skill.text} font-black text-base`}>{skill.name}</span>
          </div>
        </div>
        <div className="text-white font-black text-lg self-end transform rotate-180">{skill.label}</div>
      </div>
    );
  }

  return (
    <div className={`w-full h-full ${skill.bg} rounded-xl p-4 md:p-6 shadow-2xl flex flex-col justify-between border-[8px] border-white transition-transform duration-500 hover:scale-105 hover:-rotate-2 cursor-pointer relative overflow-hidden group`}>
      <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-black/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
      <div className="text-white font-black text-4xl drop-shadow-md z-10 flex flex-col leading-none">
        <span>{skill.label}</span>
        <span className="text-sm opacity-80 font-bold mt-1">{skill.sublabel}</span>
      </div>
      <div className="flex-grow flex items-center justify-center relative z-10">
        <div className={`w-full h-64 bg-white rounded-[80px] transform -rotate-12 flex items-center justify-center shadow-[inset_0_4px_15px_rgba(0,0,0,0.1)] border-[8px] ${skill.border} group-hover:rotate-0 transition-transform duration-500`}>
          <div className="text-center transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
            <span className={`block ${skill.text} font-black text-5xl md:text-6xl tracking-tight drop-shadow-sm`}>{skill.name}</span>
            <span className="block text-slate-500 font-bold text-base mt-2 uppercase tracking-widest">{skill.sub}</span>
          </div>
        </div>
      </div>
      <div className="text-white font-black text-4xl drop-shadow-md z-10 flex flex-col leading-none self-end transform rotate-180">
        <span>{skill.label}</span>
        <span className="text-sm opacity-80 font-bold mt-1">{skill.sublabel}</span>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const [active, setActive] = useState<Skill>(ALL_SKILLS[0]);
  const [hand, setHand] = useState<Skill[]>(ALL_SKILLS.slice(1, 5));
  const [drawPile, setDrawPile] = useState<Skill[]>(ALL_SKILLS.slice(5));
  const [dealing, setDealing] = useState(false);

  const resetDeck = () => {
    setActive(ALL_SKILLS[0]);
    setHand(ALL_SKILLS.slice(1, 5));
    setDrawPile(ALL_SKILLS.slice(5));
  };

  // Draw from the pile → new card becomes active, old active joins hand
  const dealNext = () => {
    if (drawPile.length === 0 || dealing) return;

    setDealing(true);
    setTimeout(() => {
      const [next, ...rest] = drawPile;
      const newHand =
        hand.length < 4 ? [...hand, active] : [...hand.slice(1), active];
      setActive(next);
      setHand(newHand);
      setDrawPile(rest);
      setDealing(false);
    }, 200);
  };

  // Click a hand card → swap it with the active card
  const playFromHand = (index: number) => {
    const clicked = hand[index];
    const newHand = hand.map((s, i) => (i === index ? active : s));
    setActive(clicked);
    setHand(newHand);
  };

  const pilesEmpty = drawPile.length === 0;

  return (
    <section id="skills" className="bg-white py-12 md:py-16">
      <div className="w-full max-w-[1400px] mx-auto px-4">
        {/* Header */}
        <div className="w-full text-center mb-10 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">My Deck of Skills</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A collection of technologies I use to build modern applications — click a card in hand to spotlight it, or deal the next one!
          </p>
        </div>

        {/* ── Play Area ── */}
        <div className="flex flex-col items-center gap-16 w-full relative">
          {/* Draw Pile + Active Card */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-20 w-full">
            {/* Draw Pile */}
            <div
              onClick={dealNext}
              className={`relative w-48 h-72 md:w-56 md:h-80 group cursor-pointer perspective-1000 ${pilesEmpty ? 'opacity-40 cursor-not-allowed' : ''}`}
              title={pilesEmpty ? 'No more cards!' : 'Click to deal next skill'}
            >
              <div className="absolute inset-0 bg-slate-800 rounded-xl border-4 border-white shadow-xl transform -rotate-6 translate-x-4 -translate-y-2 transition-transform group-hover:-rotate-12 group-hover:translate-x-6"></div>
              <div className="absolute inset-0 bg-slate-800 rounded-xl border-4 border-white shadow-xl transform -rotate-3 translate-x-2 -translate-y-1 transition-transform group-hover:-rotate-6 group-hover:translate-x-3"></div>
              <div className="relative w-full h-full bg-slate-900 rounded-xl border-4 border-white shadow-2xl flex items-center justify-center p-4 transition-all duration-300 transform group-hover:-translate-y-4 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
                <div className="w-full h-full border-2 border-dashed border-primary/50 rounded-lg flex items-center justify-center">
                  <div className="w-32 h-48 bg-primary/20 rounded-full flex items-center justify-center transform -rotate-12 border-2 border-primary/30">
                    <span className="text-white font-black text-3xl tracking-widest transform rotate-12 drop-shadow-lg">SKILLS</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1">
                {!pilesEmpty && (
                  <span className="material-symbols-outlined text-primary text-xl animate-bounce">arrow_downward</span>
                )}
                <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                  {pilesEmpty ? 'Empty!' : `${drawPile.length} left`}
                </span>
              </div>
            </div>

            {/* Active Card */}
            <div className="relative w-64 h-96 md:w-72 md:h-[28rem] z-10">
              <SkillCard skill={active} size="lg" />
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Active Skill</span>
              </div>
            </div>
          </div>

          {/* Deal + Reshuffle Buttons */}
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <button
              onClick={dealNext}
              disabled={pilesEmpty || dealing}
              className={`flex items-center gap-3 cursor-pointer overflow-hidden rounded-full h-14 px-8 bg-primary text-white text-lg font-bold leading-normal tracking-wide shadow-lg transition-all duration-300 ${
                pilesEmpty || dealing
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-red-700 hover:shadow-xl hover:-translate-y-1'
              }`}
            >
              <span className="material-symbols-outlined">{dealing ? 'autorenew' : 'style'}</span>
              <span>{dealing ? 'Dealing...' : pilesEmpty ? 'Deck Empty!' : 'Deal Next Skill'}</span>
            </button>

            <button
              onClick={resetDeck}
              className="flex items-center gap-3 cursor-pointer overflow-hidden rounded-full h-14 px-8 bg-slate-900 text-white text-lg font-bold tracking-wide shadow-lg hover:bg-slate-700 hover:-translate-y-1 transition-all duration-300"
            >
              <span className="material-symbols-outlined">shuffle</span>
              <span>Reshuffle</span>
            </button>
          </div>

          {/* ── My Hand — horizontal row ── */}
          <div className="w-full bg-[#ffffe0] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-4 border-black">
            <div className="flex items-center justify-between mb-4 px-2">
              <h3 className="text-xl font-black uppercase tracking-tight text-black">My Hand</h3>
              <span className="text-sm font-bold text-black border-2 border-black px-3 py-1 rounded-full">
                {hand.length} card{hand.length !== 1 ? 's' : ''}
              </span>
            </div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider px-2 mb-4">
              Click a card to spotlight it
            </p>
            <div className="flex flex-row overflow-x-auto no-scrollbar gap-6 pb-2 px-2 items-end">
              {hand.map((skill, i) => (
                <div
                  key={skill.id}
                  onClick={() => playFromHand(i)}
                  className="cursor-pointer transition-transform hover:-translate-y-3 active:scale-95 flex-shrink-0"
                  title={`Play ${skill.name}`}
                >
                  <SkillCard skill={skill} size="sm" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
