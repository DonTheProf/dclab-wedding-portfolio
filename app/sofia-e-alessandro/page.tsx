"use client";

import { useState } from "react";

export default function SofiaAlessandroPortfolio() {
  const [isOpen, setIsOpen] = useState(false);
  
  // STATI PER IL FORM RSVP (Mantenuti per funzionalità futura)
  const [nome, setNome] = useState("");
  const [inviato, setInviato] = useState(false);

  const fullText = "Il piacere di invitarvi al nostro giorno più bello. Un'esperienza di eleganza, amore e condivisione.";

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#1a1a1a] antialiased selection:bg-black/10">
      
      {/* --- FONT CONFIGURATION --- */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Bodoni+Moda:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:wght@200;300;400;600&family=Water+Brush&display=swap');
        
        :root {
          --font-royal: 'Cinzel', serif;
          --font-vogue: 'Bodoni Moda', serif;
          --font-clean: 'Montserrat', sans-serif;
          --font-label: 'Water Brush', cursive;
        }
      `}} />

      {/* --- COPERTINA (HERO) --- */}
      <div 
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center p-8 transition-all duration-[1500ms] bg-white ${
          isOpen ? "translate-y-[-100%] opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
        }`}
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=2072')] bg-cover bg-center opacity-30"></div>
        
        <div className="text-center relative z-10 border-x border-black/10 px-12 py-20">
          <p className="font-[family-name:var(--font-clean)] uppercase tracking-[0.8em] text-[10px] mb-8 font-light">Save the Date</p>
          <h1 className="text-6xl md:text-8xl font-[family-name:var(--font-royal)] leading-tight mb-8">
            Sofia <span className="block text-3xl md:text-4xl font-light italic my-2">&</span> Alessandro
          </h1>
          <p className="font-[family-name:var(--font-clean)] text-sm tracking-[0.4em] uppercase mb-12 font-light">20 • 06 • 2027</p>
          <button 
            onClick={() => setIsOpen(true)} 
            className="group relative px-12 py-4 overflow-hidden border border-black transition-all hover:text-white cursor-pointer"
          >
            <div className="absolute inset-0 w-0 bg-black transition-all duration-300 group-hover:w-full"></div>
            <span className="relative z-10 font-[family-name:var(--font-clean)] text-[10px] uppercase tracking-[0.3em] font-bold">Entra</span>
          </button>
        </div>
      </div>

      {/* --- CONTENUTO PRINCIPALE --- */}
      <div className={`transition-all duration-[1500ms] delay-500 ${isOpen ? "opacity-100" : "opacity-0"}`}>
        
        {/* Intro con Nuova Animazione Fluida */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative">
          {/* Linea decorativa superiore */}
          <div className={`w-[1px] bg-black/20 mb-12 transition-all duration-[2000ms] delay-500 ${isOpen ? "h-32" : "h-0"}`}></div>
          
          <div className="max-w-3xl mx-auto">
            <h2 className={`font-[family-name:var(--font-vogue)] text-5xl md:text-7xl italic mb-12 text-gray-400 transition-all duration-[2000ms] delay-[700ms] ${
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              L'essenza dell'Amore
            </h2>
            
            {/* NUOVA ANIMAZIONE: Dissolvenza e risalita lenta */}
            <p className={`font-[family-name:var(--font-vogue)] text-2xl md:text-4xl font-light leading-relaxed tracking-tight text-gray-800 italic transition-all duration-[2500ms] delay-[1000ms] ${
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}>
              {fullText}
            </p>

            {/* Linea sottile di chiusura */}
            <div className={`h-[1px] bg-black/10 mx-auto mt-16 transition-all duration-[2000ms] delay-[1500ms] ${isOpen ? "w-48" : "w-0"}`}></div>
          </div>
          
          {/* Linea decorativa inferiore */}
          <div className={`w-[1px] bg-black/20 mt-12 transition-all duration-[2000ms] delay-500 ${isOpen ? "h-32" : "h-0"}`}></div>
        </section>

        {/* --- Footer (Esempio per chiudere la struttura) --- */}
        <footer className="py-24 text-center bg-white border-t border-black/5">
          <p className="font-[family-name:var(--font-royal)] text-2xl tracking-[0.4em] mb-4 font-bold">S & A</p>
          <p className="font-[family-name:var(--font-clean)] text-[9px] uppercase tracking-[0.6em] opacity-40 italic">DC Lab Luxury Tech Studio</p>
        </footer>
      </div>
    </main>
  );
}