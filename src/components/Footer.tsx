export default function Footer() {
  return (
    <footer className="w-full flex flex-col">
      {/* Social Links Section */}
      <div className="bg-white py-16 flex justify-center">
        <div className="flex gap-4 sm:gap-6 items-center">
          <a className="w-16 h-24 sm:w-20 sm:h-28 bg-uno-red rounded-lg border-[3px] sm:border-4 border-white shadow-[0_0_0_3px_black,4px_6px_0px_2px_black] flex items-center justify-center hover:-translate-y-2 hover:scale-105 transition-all transform rotate-[-6deg]" href="mailto:">
            <span className="material-symbols-outlined text-white text-3xl sm:text-4xl font-black drop-shadow-[1px_1px_0_black, -1px_-1px_0_black, 1px_-1px_0_black, -1px_1px_0_black, 2px_2px_0_black]">mail</span>
          </a>
          <a className="w-16 h-24 sm:w-20 sm:h-28 bg-uno-blue rounded-lg border-[3px] sm:border-4 border-white shadow-[0_0_0_3px_black,4px_6px_0px_2px_black] flex items-center justify-center hover:-translate-y-2 hover:scale-105 transition-all transform rotate-[4deg]" href="#">
            <span className="text-white text-3xl sm:text-4xl font-black italic drop-shadow-[1px_1px_0_black, -1px_-1px_0_black, 1px_-1px_0_black, -1px_1px_0_black, 2px_2px_0_black]">in</span>
          </a>
          <a className="w-16 h-24 sm:w-20 sm:h-28 bg-uno-green rounded-lg border-[3px] sm:border-4 border-white shadow-[0_0_0_3px_black,4px_6px_0px_2px_black] flex items-center justify-center hover:-translate-y-2 hover:scale-105 transition-all transform rotate-[-3deg]" href="#">
            <span className="text-white text-3xl sm:text-4xl font-black italic drop-shadow-[1px_1px_0_black, -1px_-1px_0_black, 1px_-1px_0_black, -1px_1px_0_black, 2px_2px_0_black]">GH</span>
          </a>
          <a className="w-16 h-24 sm:w-20 sm:h-28 bg-uno-yellow rounded-lg border-[3px] sm:border-4 border-white shadow-[0_0_0_3px_black,4px_6px_0px_2px_black] flex items-center justify-center hover:-translate-y-2 hover:scale-105 transition-all transform rotate-[5deg]" href="#">
            <span className="material-symbols-outlined text-white text-3xl sm:text-4xl font-black drop-shadow-[1px_1px_0_black, -1px_-1px_0_black, 1px_-1px_0_black, -1px_1px_0_black, 2px_2px_0_black]">link</span>
          </a>
        </div>
      </div>
      
      {/* Black Footer Bar */}
      <div className="bg-black text-white py-8 px-10 text-center border-t-4 border-black">
        <p className="text-sm font-bold uppercase tracking-[0.2em]">Designed for the Ultimate Play • © 2024</p>
      </div>
    </footer>
  );
}
