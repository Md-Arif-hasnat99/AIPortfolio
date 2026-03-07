import { useEffect, useState } from 'react';

const sections = [
  { label: 'Home',     href: '#home'     },
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
];


export default function Navbar() {
  const [active, setActive] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);

  // Highlight nav link based on which section is in view
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ href }) => {
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: '-40% 0px -55% 0px' }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="flex items-center justify-between px-4 md:px-10 py-4 bg-white fixed top-0 left-0 right-0 w-full z-50 whitespace-nowrap shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-12 bg-[var(--accent-color)] accent-transition border-2 border-black rounded-sm transform -rotate-12 flex items-center justify-center shadow-sm">
          <span className="text-white text-[10px] font-black italic">U</span>
        </div>
        <h2 className="text-xl font-black italic uppercase tracking-tighter">Portfolio</h2>
      </div>

      {/* Right side group: Nav links + Theme Switcher + Mobile Menu */}
      <div className="flex items-center gap-6 md:gap-10">
        {/* Desktop Nav links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {sections.map(({ label, href }) => {
            const id = href.replace('#', '');
            const isActive = active === id;
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => handleNav(e, href)}
                className={`text-sm md:text-base font-black uppercase tracking-widest transition-colors ${
                  isActive
                    ? 'text-[var(--accent-color)] border-b-[4px] border-[var(--accent-color)] pb-2'
                    : 'text-black hover:text-[var(--accent-color)]'
                }`}
              >
                {label}
              </a>
            );
          })}
        </nav>

        {/* Wild card theme switcher */}
        <div className="relative hidden md:block">
          <button
            aria-label="Switch Theme"
            className="relative w-10 h-14 rounded-md border-2 border-black wild-glow overflow-hidden bg-white flex flex-col items-center justify-center cursor-pointer focus:outline-none"
            onClick={() => setIsThemeOpen(prev => !prev)}
          >
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
              <div className="bg-uno-red"></div>
              <div className="bg-uno-blue"></div>
              <div className="bg-uno-yellow"></div>
              <div className="bg-uno-green"></div>
            </div>
            <div className="z-10 bg-white rounded-full w-6 h-6 flex items-center justify-center border-2 border-black shadow-sm">
              <span className="text-[8px] font-black italic leading-none">WILD</span>
            </div>
          </button>
          {isThemeOpen && (
            <div className="absolute top-full mt-3 right-0 bg-white/95 backdrop-blur-sm p-3 rounded-2xl border-2 border-black shadow-2xl flex items-center gap-3 z-50">
              {[
                { color: '#ff5555', glow: 'rgba(255,85,85,0.4)',  bg: 'bg-uno-red',    label: 'R' },
                { color: '#5555ff', glow: 'rgba(85,85,255,0.4)',  bg: 'bg-uno-blue',   label: 'B' },
                { color: '#55aa55', glow: 'rgba(85,170,85,0.4)',  bg: 'bg-uno-green',  label: 'G' },
                { color: '#ffaa00', glow: 'rgba(255,170,0,0.4)',  bg: 'bg-uno-yellow', label: 'Y' },
              ].map(({ color, glow, bg, label }) => (
                <button
                  key={label}
                  className={`w-8 h-12 ${bg} rounded border-2 border-black hover:scale-110 transition-transform flex items-center justify-center`}
                  onClick={() => {
                    document.documentElement.style.setProperty('--accent-color', color);
                    document.documentElement.style.setProperty('--accent-glow', glow);
                    setIsThemeOpen(false);
                  }}
                >
                  <span className="text-white font-black italic text-[10px]">{label}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden flex flex-col items-center justify-center gap-[5px] w-10 h-10 border-2 border-black rounded-md bg-white p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={`w-6 h-1 bg-black rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`}></div>
          <div className={`w-6 h-1 bg-black rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-1 bg-black rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b-4 border-black border-t-2 border-t-black/10 shadow-xl flex flex-col p-4 gap-4 animate-fade-in">
          {sections.map(({ label, href }) => {
            const id = href.replace('#', '');
            const isActive = active === id;
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => handleNav(e, href)}
                className={`text-lg font-black uppercase tracking-wider py-2 transition-colors ${
                  isActive
                    ? 'text-[var(--accent-color)] pl-2 border-l-4 border-[var(--accent-color)]'
                    : 'text-black hover:text-[var(--accent-color)] pl-3'
                }`}
              >
                {label}
              </a>
            );
          })}
          
          <div className="mt-4 pt-4 border-t-2 border-black/10">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Theme</p>
            <div className="flex gap-4">
              {[
                { color: '#ff5555', glow: 'rgba(255,85,85,0.4)',  bg: 'bg-uno-red',    label: 'R' },
                { color: '#5555ff', glow: 'rgba(85,85,255,0.4)',  bg: 'bg-uno-blue',   label: 'B' },
                { color: '#55aa55', glow: 'rgba(85,170,85,0.4)',  bg: 'bg-uno-green',  label: 'G' },
                { color: '#ffaa00', glow: 'rgba(255,170,0,0.4)',  bg: 'bg-uno-yellow', label: 'Y' },
              ].map(({ color, glow, bg, label }) => (
                <button
                  key={label}
                  className={`w-10 h-14 ${bg} rounded border-2 border-black shadow-[2px_2px_0px_black] active:translate-y-1 active:shadow-none flex items-center justify-center`}
                  onClick={() => {
                    document.documentElement.style.setProperty('--accent-color', color);
                    document.documentElement.style.setProperty('--accent-glow', glow);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <span className="text-white font-black italic text-sm">{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
