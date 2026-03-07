export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-12 md:py-16">
      <div className="w-full max-w-4xl mx-auto px-4 md:px-10">
        <div className="relative w-full bg-[#ffffe0] rounded-none p-8 md:p-16 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-4 border-black overflow-hidden">
          <div className="absolute inset-0 score-sheet-lines opacity-20 pointer-events-none mt-40"></div>
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-red-400 z-0"></div>
          <div className="relative z-10 p-4 md:p-8 lg:px-12">
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-center mb-6 md:mb-8 uppercase text-black border-b-4 border-black pb-4 ml-0 md:ml-6">About the Player</h2>
              <p className="text-center text-sm font-bold text-black uppercase tracking-widest -mt-4 mb-8">Developer Score Sheet: v2.4.0</p>
            </div>
            <div className="flex gap-8">
              <div className="hidden md:flex flex-col items-center gap-6 w-12 pt-4">
                {[
                  { bg: 'bg-primary',    label: 'R', rotate: '-rotate-[10deg]' },
                  { bg: 'bg-blue-600',   label: 'B', rotate: 'rotate-[5deg]'   },
                  { bg: 'bg-green-600',  label: 'G', rotate: '-rotate-[5deg]'  },
                  { bg: 'bg-yellow-500', label: 'Y', rotate: 'rotate-[10deg]'  },
                ].map(({ bg, label, rotate }) => (
                  <div key={label} className={`w-8 h-12 ${bg} rounded-sm border-2 border-white shadow-md flex items-center justify-center ${rotate}`}>
                    <span className="text-white font-bold text-xs">{label}</span>
                  </div>
                ))}
              </div>
              <div className="flex-1 pl-4 md:pl-12 lg:pl-16">
                <div className="space-y-10">
                  <section>
                    <h3 className="text-lg font-black uppercase tracking-wider text-black flex items-center gap-2 mb-2">
                      <span className="material-symbols-outlined font-bold">edit</span>
                      MISSION LOG
                    </h3>
                    <p className="font-handwriting text-2xl md:text-3xl font-medium text-black leading-[2.5rem] md:leading-[2.5rem] -mt-1 relative z-10">
                      Passionate full-stack developer with a knack for building intuitive and scalable web applications.
                      Like a strategic game of UNO, I enjoy managing complex states and turning the tide with
                      well-played solutions. I thrive in the "Wild Card" moments where creative problem-solving
                      is the only way to win.
                    </p>
                  </section>
                  <section className="mt-[2.5rem]">
                    <h3 className="text-lg font-black uppercase tracking-wider text-black flex items-center gap-2 mb-2">
                      <span className="material-symbols-outlined font-bold">school</span>
                      EDUCATION
                    </h3>
                    <div className="font-handwriting text-2xl md:text-3xl leading-[2.5rem] md:leading-[2.5rem] font-medium text-slate-900 -mt-1 relative z-10">
                      <p className="text-black">Bachelor of Science in Computer Science</p>
                      <p className="text-uno-red font-bold">Techno Engineering College Banipur</p>
                    </div>
                  </section>
                  <div className="pt-16 space-y-6 max-w-xl mx-auto">
                    <button className="w-full bg-uno-red text-white text-xl font-black uppercase tracking-widest py-4 rounded-xl border-4 border-white shadow-[0_0_0_2px_black,4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[0_0_0_2px_black,2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-3">
                      <span className="material-symbols-outlined">download</span> DOWNLOAD SCORECARD (RESUME)
                    </button>
                    <button
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="w-full bg-white text-black text-xl font-black uppercase tracking-widest py-4 rounded-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-3"
                    >
                      <span className="material-symbols-outlined">play_arrow</span> START NEW GAME (CONTACT)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
