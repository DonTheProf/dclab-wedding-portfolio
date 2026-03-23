"use client";

import { useState, useEffect, useRef } from "react";

export default function SofiaAlessandroPortfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [nome, setNome] = useState("");
  const [inviato, setInviato] = useState(false);
  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fullText = "Il piacere di invitarvi al nostro giorno più bello. Un'esperienza di eleganza, amore e condivisione.";

  useEffect(() => {
    if (!isOpen) { setTypedText(""); return; }
    let isCancelled = false;
    let i = 0;
    const type = () => {
      if (isCancelled) return;
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
        setTimeout(type, 50);
      }
    };
    const startTimeout = setTimeout(type, 300);
    return () => { isCancelled = true; clearTimeout(startTimeout); };
  }, [isOpen]);

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#1a1a1a] antialiased">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Bodoni+Moda:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:wght@200;300;400;600&family=Water+Brush&display=swap');
        :root { --font-royal: 'Cinzel', serif; --font-vogue: 'Bodoni Moda', serif; --font-clean: 'Montserrat', sans-serif; --font-label: 'Water Brush', cursive; }
      `}} />

      {/* Hero */}
      <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center p-8 transition-all duration-[1500ms] bg-white ${isOpen ? "translate-y-[-100%] opacity-0 pointer-events-none" : "translate-y-0 opacity-100"}`}>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=2072')] bg-cover opacity-30" />
        <div className="text-center relative z-10 border-x border-black/10 px-12 py-20">
          <h1 className="text-6xl md:text-8xl font-[family-name:var(--font-royal)] mb-8">Sofia & Alessandro</h1>
          <button onClick={() => setIsOpen(true)} className="px-12 py-4 border border-black uppercase tracking-widest text-[10px] font-bold hover:bg-black hover:text-white transition-all cursor-pointer">Entra</button>
        </div>
      </div>

      <div className={`transition-all duration-1000 delay-500 ${isOpen ? "opacity-100" : "opacity-0"}`}>
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative">
          <div className="w-[1px] h-32 bg-black/20 mb-12" />
          <div className="max-w-3xl mx-auto relative">
            <h2 className="font-[family-name:var(--font-vogue)] text-5xl md:text-7xl italic mb-12 text-gray-400">L'essenza dell'Amore</h2>
            <div className="relative">
              <p className="font-[family-name:var(--font-vogue)] text-2xl md:text-4xl leading-relaxed text-transparent select-none italic">{fullText}</p>
              <p className="absolute top-0 left-0 w-full h-full font-[family-name:var(--font-vogue)] text-2xl md:text-4xl leading-relaxed text-gray-800 italic">
                {typedText}<span className="animate-pulse ml-1">|</span>
              </p>
            </div>
          </div>
          <div className="w-[1px] h-32 bg-black/20 mt-12" />
        </section>
      </div>
    </main>
  );
}