export default function HomeSection() {
  return (
    <section id="home">
      <main className="flex flex-col items-center justify-center px-8 relative min-h-[max(calc(100vh-73px),600px)] py-12 md:py-20">
        <div className="z-10 w-full max-w-6xl flex flex-col items-center gap-8 md:gap-12">
          <div className="text-center">
            <h1 className="text-5xl sm:text-9xl md:text-[12rem] uno-heading-black leading-none select-none">&lt;ARIF/&gt;</h1>
            <div className="flex items-center justify-center gap-4 mt-2 md:-mt-4">
              <div className="hidden sm:block h-1 w-10 md:w-20 bg-black"></div>
              <p className="text-[10px] md:text-sm font-black uppercase tracking-[0.2em] md:tracking-[0.5em] text-black">Full Stack Developer</p>
              <div className="hidden sm:block h-1 w-10 md:w-20 bg-black"></div>
            </div>
          </div>
          <div className="card-3d-container relative py-12">
            <div className="card-3d-element w-72 h-[420px] bg-[var(--accent-color)] accent-transition rounded-[2rem] border-[12px] border-white shadow-[20px_40px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center relative overflow-hidden ring-4 ring-black">
              <div className="absolute top-4 left-4 text-white text-4xl font-black italic leading-none">U</div>
              <div className="absolute bottom-4 right-4 text-white text-4xl font-black italic leading-none rotate-180">U</div>
              <div className="uno-card-white-oval w-[140%] h-[60%] absolute flex items-center justify-center overflow-hidden">
                <div className="rotate-[45deg] flex flex-col items-center justify-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-[var(--accent-color)] overflow-hidden mb-2 shadow-inner bg-white flex items-center justify-center">
                    <img 
                      src="/profile.jpg"
                      alt="Arif Hasnat" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "https://api.dicebear.com/9.x/avataaars/svg?seed=ArifHasnat";
                      }}
                    />
                  </div>
                  <span className="text-[var(--accent-color)] accent-transition text-2xl md:text-3xl font-black italic tracking-tighter block leading-tight">MD ARIF</span>
                  <span className="text-[var(--accent-color)] accent-transition text-xl md:text-2xl font-bold uppercase tracking-widest block">HASNAT</span>
                </div>
              </div>
            </div>
            <div className="hidden md:flex absolute -top-10 -right-20 w-32 h-48 bg-uno-blue rounded-xl border-4 border-white shadow-xl rotate-12 -z-10 ring-2 ring-black items-center justify-center">
              <span className="text-white text-6xl font-black italic">7</span>
            </div>
            <div className="hidden md:flex absolute -bottom-10 -left-20 w-32 h-48 bg-uno-green rounded-xl border-4 border-white shadow-xl -rotate-12 -z-10 ring-2 ring-black items-center justify-center">
              <span className="text-white text-6xl font-black italic">2</span>
            </div>
          </div>
          <div className="text-center max-w-md mt-4">
            <p className="text-lg font-bold italic border-b-2 border-black/10 pb-2">"Playing the right cards in digital experiences."</p>
          </div>

        </div>
      </main>
    </section>
  );
}
