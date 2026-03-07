
import { useState } from 'react';

const WEB3FORMS_ACCESS_KEY = 'a530c8fc-736e-4292-929e-7e60be3669a2';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const formData = new FormData(e.currentTarget);
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
      const data = await res.json();
      if (data.success) {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

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
          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 ml-4 sm:ml-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-2 sm:gap-4 border-b-2 border-black pb-1">
              <label className="text-base md:text-lg font-bold uppercase tracking-wider text-black whitespace-nowrap">Player Name:</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-none px-2 py-0 text-lg md:text-xl font-bold focus:ring-0 outline-none placeholder:font-normal placeholder:text-gray-400"
                placeholder="Enter your name"
                type="text"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-2 sm:gap-4 border-b-2 border-black pb-1">
              <label className="text-base md:text-lg font-bold uppercase tracking-wider text-black whitespace-nowrap">Player Email:</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-none px-2 py-0 text-lg md:text-xl font-bold focus:ring-0 outline-none placeholder:font-normal placeholder:text-gray-400"
                placeholder="Enter your email"
                type="email"
              />
            </div>
            <div className="flex flex-col gap-2 pt-4">
              <label className="text-base md:text-lg font-bold uppercase tracking-wider text-black">Points / Message:</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-none px-2 py-0 text-lg md:text-xl font-bold focus:ring-0 outline-none resize-none score-pad-line placeholder:font-normal placeholder:text-gray-400"
                placeholder="Write your message here..."
                rows={4}
              ></textarea>
            </div>
            {status === 'sent' && (
              <p className="text-green-600 font-bold uppercase tracking-wider text-center">Message sent! I'll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 font-bold uppercase tracking-wider text-center">Something went wrong. Please try again.</p>
            )}
            <div className="pt-6 md:pt-8">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full wild-card-btn text-white text-xl md:text-3xl font-black uppercase tracking-widest py-4 md:py-6 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-2 active:shadow-none transition-all flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span className="bg-black text-white px-6 md:px-8 py-2 rounded-full border-4 border-white shadow-[0_0_0_2px_black]">
                  {status === 'sending' ? 'SENDING...' : 'PLAY WILD'}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
