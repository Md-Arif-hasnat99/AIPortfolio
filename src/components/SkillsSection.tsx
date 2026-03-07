import { useState } from 'react';

interface Skill {
  id: number;
  label: string;
  sublabel: string;
  name: string;
  sub: string;
  icon: string;
  iconBg: string;
  iconFilter: string;
  bg: string;
  border: string;
  text: string;
}

const ALL_SKILLS: Skill[] = [
  { id: 1,  label: 'FE', sublabel: 'FRONT', name: 'HTML',         sub: 'HTML',         icon: '/icons/html5.svg',        iconBg: '#E34F26', iconFilter: 'invert(1)',                                          bg: 'bg-[#E34F26]',  border: 'border-[#E34F26]',  text: 'text-[#E34F26]'  },
  { id: 2,  label: 'UI', sublabel: 'STYLE', name: 'Tailwind CSS', sub: 'Tailwind CSS', icon: '/icons/tailwindcss.svg',  iconBg: '#06B6D4', iconFilter: 'invert(1)',                                          bg: 'bg-[#06B6D4]',  border: 'border-[#06B6D4]',  text: 'text-[#06B6D4]'  },
  { id: 3,  label: 'FE', sublabel: 'FRONT', name: 'JavaScript',   sub: 'JavaScript',   icon: '/icons/javascript.svg',   iconBg: '#F7DF1E', iconFilter: 'none',                                               bg: 'bg-[#F7DF1E]',  border: 'border-[#F7DF1E]',  text: 'text-[#ca9f00]'  },
  { id: 4,  label: 'FE', sublabel: 'FRONT', name: 'TypeScript',   sub: 'TypeScript',   icon: '/icons/typescript.svg',   iconBg: '#3178C6', iconFilter: 'invert(1)',                                          bg: 'bg-[#3178C6]',  border: 'border-[#3178C6]',  text: 'text-[#3178C6]'  },
  { id: 5,  label: 'FE', sublabel: 'FRONT', name: 'React',        sub: 'React',        icon: '/icons/react.svg',         iconBg: '#61DAFB', iconFilter: 'none',     bg: 'bg-[#61DAFB]',  border: 'border-[#61DAFB]',  text: 'text-[#20232A]'  },
  { id: 6,  label: 'BE', sublabel: 'BACK',  name: 'Node.js',      sub: 'Node.js',      icon: '/icons/nodedotjs.svg',    iconBg: '#339933', iconFilter: 'invert(1)',                                          bg: 'bg-[#339933]',  border: 'border-[#339933]',  text: 'text-[#339933]'  },
  { id: 7,  label: 'FE', sublabel: 'FRONT', name: 'Next.js',      sub: 'Next.js',      icon: '/icons/nextdotjs.svg',    iconBg: '#000000', iconFilter: 'invert(1)',                                          bg: 'bg-[#111111]',  border: 'border-[#111111]',  text: 'text-[#555555]'  },
  { id: 8,  label: 'BE', sublabel: 'BACK',  name: 'Java',         sub: 'Java',         icon: '/icons/icons8-java.svg',  iconBg: '#ffffff', iconFilter: 'none',                                               bg: 'bg-[#007396]',  border: 'border-[#007396]',  text: 'text-[#007396]'  },
  { id: 9,  label: 'BE', sublabel: 'BACK',  name: 'Python',       sub: 'Python',       icon: '/icons/python.svg',        iconBg: '#3776AB', iconFilter: 'invert(1)',                                          bg: 'bg-[#3776AB]',  border: 'border-[#3776AB]',  text: 'text-[#3776AB]'  },
  { id: 10, label: 'DB', sublabel: 'DATABASE',  name: 'PostgreSQL',   sub: 'PostgreSQL',   icon: '/icons/postgresql.svg',   iconBg: '#4169E1', iconFilter: 'invert(1)',                                          bg: 'bg-[#4169E1]',  border: 'border-[#4169E1]',  text: 'text-[#4169E1]'  },
  { id: 11, label: 'DV', sublabel: 'TOOLS', name: 'Git',          sub: 'Git',          icon: '/icons/git.svg',           iconBg: '#F05032', iconFilter: 'invert(1)',                                          bg: 'bg-[#F05032]',  border: 'border-[#F05032]',  text: 'text-[#F05032]'  },
  { id: 12, label: 'DV', sublabel: 'TOOLS', name: 'GitHub',       sub: 'GitHub',       icon: '/icons/github.svg',        iconBg: '#181717', iconFilter: 'invert(1)',                                          bg: 'bg-[#181717]',  border: 'border-[#181717]',  text: 'text-[#555555]'  },
  { id: 13, label: 'DB', sublabel: 'DATABASE',  name: 'Supabase',     sub: 'Supabase',     icon: '/icons/supabase.svg',      iconBg: '#3ECF8E', iconFilter: 'invert(1)',                                          bg: 'bg-[#3ECF8E]',  border: 'border-[#3ECF8E]',  text: 'text-[#1a1a1a]'  },
];

function SkillCard({ skill, size = 'lg' }: { skill: Skill; size?: 'lg' | 'sm' }) {
  if (size === 'sm') {
    return (
      <div className={`min-w-[140px] h-[200px] ${skill.bg} rounded-xl p-2.5 shadow-md flex flex-col justify-between border-[5px] border-white`}>
        <div className="text-white font-black text-lg">{skill.label}</div>
        <div className="flex-grow flex items-center justify-center">
          <div className={`w-full h-20 bg-white rounded-3xl transform -rotate-12 flex flex-col items-center justify-center border-4 ${skill.border} gap-1`}>
            <div className="w-7 h-7 rounded-md flex items-center justify-center" style={{backgroundColor: skill.iconBg}}>
              <img src={skill.icon} alt={skill.name} className="w-5 h-5 object-contain" style={{filter: skill.iconFilter}} />
            </div>
            <span className={`${skill.text} font-black text-xs`}>{skill.name}</span>
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
          <div className="text-center transform rotate-12 group-hover:rotate-0 transition-transform duration-500 flex flex-col items-center gap-3">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl flex items-center justify-center shadow-lg" style={{backgroundColor: skill.iconBg}}>
              <img src={skill.icon} alt={skill.name} className="w-16 h-16 md:w-20 md:h-20 object-contain" style={{filter: skill.iconFilter}} />
            </div>
            <span className="block text-slate-700 font-black text-xl md:text-2xl tracking-tight">{skill.sub}</span>
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
        <div className="w-full text-center space-y-2 mb-10 md:mb-16">
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-black italic tracking-tighter uno-logo-text border-8 border-black rounded-full px-8 md:px-12 py-3 md:py-4 bg-white inline-block shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] uppercase">SKILLS</h2>
          <p className="text-lg md:text-2xl font-bold text-black uppercase tracking-[0.2em] md:tracking-[0.3em] mt-6">My Deck of Skills</p>
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
          <div className="w-fit max-w-full bg-[#ffffe0] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-4 border-black mx-auto">
            <div className="flex items-center justify-between mb-4 px-2">
              <h3 className="text-xl font-black uppercase tracking-tight text-black">My Hand</h3>
              <span className="text-sm font-bold text-black border-2 border-black px-3 py-1 rounded-full">
                {hand.length} card{hand.length !== 1 ? 's' : ''}
              </span>
            </div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider px-2 mb-4">
              Click a card to spotlight it
            </p>
            <div className="flex flex-col sm:flex-row overflow-x-auto no-scrollbar gap-6 pb-2 px-2 items-center sm:items-end">
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
