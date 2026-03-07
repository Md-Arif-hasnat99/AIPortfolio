

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-12 md:py-16">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-8 px-4 sm:px-8">
        <div className="text-center space-y-2">
          <h2 className="text-6xl sm:text-8xl md:text-9xl font-black italic tracking-tighter uno-logo-text border-8 border-black rounded-full px-6 md:px-8 py-2 bg-white inline-block shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">UNO!</h2>
          <p className="text-lg md:text-2xl font-bold text-black uppercase tracking-widest mt-4">Score Sheet</p>
        </div>
        <div className="w-full max-w-2xl bg-[#ffffe0] rounded-none p-6 sm:p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-4 border-black relative overflow-hidden">
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-red-400"></div>
          <h3 className="text-2xl md:text-3xl font-black text-center mb-6 md:mb-8 uppercase text-black border-b-4 border-black pb-4 ml-4 sm:ml-6">Score Card</h3>
          <form className="space-y-6 md:space-y-8 ml-4 sm:ml-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-2 sm:gap-4 border-b-2 border-black pb-1">
              <label className="text-base md:text-lg font-bold uppercase tracking-wider text-black whitespace-nowrap">Player Name:</label>
              <input className="w-full bg-transparent border-none px-2 py-0 text-lg md:text-xl font-bold focus:ring-0 outline-none placeholder:font-normal placeholder:text-gray-400" placeholder="Enter your name" type="text" />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-2 sm:gap-4 border-b-2 border-black pb-1">
              <label className="text-base md:text-lg font-bold uppercase tracking-wider text-black whitespace-nowrap">Player Email:</label>
              <input className="w-full bg-transparent border-none px-2 py-0 text-lg md:text-xl font-bold focus:ring-0 outline-none placeholder:font-normal placeholder:text-gray-400" placeholder="Enter your email" type="email" />
            </div>
            <div className="flex flex-col gap-2 pt-4">
              <label className="text-base md:text-lg font-bold uppercase tracking-wider text-black">Points / Message:</label>
              <textarea className="w-full bg-transparent border-none px-2 py-0 text-lg md:text-xl font-bold focus:ring-0 outline-none resize-none score-pad-line placeholder:font-normal placeholder:text-gray-400" placeholder="Write your message here..." rows={4}></textarea>
            </div>
            <div className="pt-6 md:pt-8">
              <button className="w-full wild-card-btn text-white text-xl md:text-3xl font-black uppercase tracking-widest py-4 md:py-6 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-2 active:shadow-none transition-all flex items-center justify-center gap-3" type="button">
                <span className="bg-black text-white px-6 md:px-8 py-2 rounded-full border-4 border-white shadow-[0_0_0_2px_black]">PLAY WILD</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
