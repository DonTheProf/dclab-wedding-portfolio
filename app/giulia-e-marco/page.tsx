"use client";

import { useState } from "react";
import RSVP from "./components/RSVP";

export default function GiuliaMarcoPortfolio() {
  const [isOpen, setIsOpen] = useState(false);
  
  const fullText = "Siamo felici di invitarvi a celebrare il nostro amore in una cornice rustica e romantica, circondati dalla natura e dalle persone che amiamo.";

  const bohoBackgroundStyle = {
    backgroundColor: "#F4EBD0",
    backgroundImage: `url('/bg-boho.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  };

  return (
    <main style={bohoBackgroundStyle} className="min-h-screen relative overflow-x-hidden antialiased selection:bg-[#C48061]/20 text-gray-800">
      
      {/* --- FONT STYLE BLOCK --- */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Belleza&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400;1,600&family=Parisienne&family=Tenor+Sans&family=Water+Brush&display=swap');
        
        :root {
          --font-script: 'Parisienne', cursive;
          --font-heading: 'Belleza', sans-serif;
          --font-label: 'Water Brush', cursive;
          --font-cormorant: 'Cormorant Garamond', serif;
          --font-details: 'Tenor Sans', sans-serif;
        }
      `}} />

      {/* --- COPERTINA (HERO) --- */}
      <div 
        style={{
          backgroundImage: `url("/hero-boho.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center p-8 transition-all duration-1000 ease-in-out ${
          isOpen ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
        }`}
      >
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="text-center relative z-10 p-10 border border-white/20 backdrop-blur-sm bg-[#F4EBD0]/10 rounded-t-[50%]">
          <p className="text-white/90 font-[family-name:var(--font-details)] uppercase tracking-[0.4em] text-xs mb-6 font-medium">Ci sposiamo!</p>
          <h1 className="text-7xl md:text-9xl font-[family-name:var(--font-script)] text-white leading-tight drop-shadow-md py-4">Giulia & Marco</h1>
          <p className="mt-6 text-white/90 font-[family-name:var(--font-details)] uppercase tracking-[0.3em] text-xs">12 Settembre 2027 • Toscana</p>
          <button 
            onClick={() => setIsOpen(true)} 
            className="mt-12 px-10 py-3 bg-[#C48061] text-white hover:bg-[#A86B51] transition-colors duration-300 tracking-[0.2em] text-[10px] uppercase cursor-pointer rounded-full shadow-lg font-[family-name:var(--font-details)]"
          >
            Scopri i dettagli
          </button>
        </div>
      </div>

      {/* --- CONTENUTO --- */}
      <div className={`transition-all duration-[1500ms] delay-500 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        
        {/* Intro con nuova animazione Reveal */}
        <section className="min-h-[65vh] flex flex-col items-center justify-center text-center px-4 pt-24 pb-24 relative">
          <h2 className="text-7xl md:text-9xl font-[family-name:var(--font-script)] text-[#5c4a40] relative z-10">Giulia & Marco</h2>
          
          <div className="my-8 w-64 md:w-96 flex justify-center">
             <img src="/boho-divider.png" alt="Decorazione" className="w-full h-auto drop-shadow-sm opacity-90" />
          </div>

          <div className="max-w-2xl mx-auto overflow-hidden">
            {/* AGGIORNATO: Font Belleza (var(--font-heading)) e rimosso italic per coerenza con Belleza */}
            <p 
              className={`font-[family-name:var(--font-heading)] text-[#5c4a40] leading-relaxed text-2xl md:text-3xl font-light uppercase tracking-wide transition-all duration-[2000ms] delay-[800ms] ease-out ${
                isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              {fullText}
            </p>
            <div className={`h-[1px] bg-[#C48061]/30 mx-auto mt-8 transition-all duration-[2000ms] delay-[1500ms] ${isOpen ? "w-24" : "w-0"}`}></div>
          </div>
        </section>

        <div className="space-y-28 pb-20">
          {/* --- CERIMONIA --- */}
          <section className="flex flex-col items-center text-center px-4">
            <div className="flex flex-col items-center">
              <p className="text-[#7A8B76] font-[family-name:var(--font-label)] text-4xl md:text-5xl mb-2">La Cerimonia</p>
              <h3 className="text-5xl md:text-7xl font-[family-name:var(--font-heading)] text-[#5c4a40] font-normal tracking-tight">Tenuta La Campana</h3>
              <p className="text-[#8c7a6b] font-[family-name:var(--font-details)] uppercase tracking-widest text-[14px] mt-4 font-bold">Ore 16:30 • Rito Civile all'aperto</p>
              <a 
                href="https://www.google.it/maps" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-6 inline-block px-8 py-2.5 bg-[#C48061] text-white hover:bg-[#A86B51] transition-colors duration-300 tracking-[0.2em] text-[10px] uppercase cursor-pointer rounded-full shadow-md font-[family-name:var(--font-details)]"
              >
                Visualizza mappa
              </a>
            </div>
            <div className="mt-12 w-full max-w-4xl mx-auto px-4 md:px-8">
              <img src="/boho-ceremony.png" alt="Cerimonia" className="w-full h-96 md:h-[600px] object-cover rounded-t-full shadow-xl border border-[#C48061]/20" />
            </div>
          </section>

          {/* --- RICEVIMENTO --- */}
          <section className="flex flex-col items-center text-center px-4">
            <div className="flex flex-col items-center">
              <p className="text-[#7A8B76] font-[family-name:var(--font-label)] text-4xl md:text-5xl mb-2">Il Ricevimento</p>
              <h3 className="text-5xl md:text-7xl font-[family-name:var(--font-heading)] text-[#5c4a40] font-normal tracking-tight">Cena sotto gli ulivi</h3>
              <p className="text-[#8c7a6b] font-[family-name:var(--font-details)] uppercase tracking-widest text-[14px] mt-4 font-bold">A seguire, nella stessa location</p>
            </div>
            <div className="mt-12 w-full max-w-4xl mx-auto px-4 md:px-8">
              <img src="/boho-reception.png" alt="Ricevimento" className="w-full h-96 md:h-[600px] object-cover rounded-b-full shadow-xl border border-[#C48061]/20" />
            </div>
          </section>

          <RSVP />
        </div>

        <footer className="pb-12 text-center border-t border-[#C48061]/20 pt-12">
          <p className="text-[#7A8B76] font-[family-name:var(--font-details)] text-[12px] uppercase tracking-[0.6em] font-bold">G & M • 12.09.2027</p>
          <p className="text-[#C48061] mt-6 text-[10px] uppercase tracking-widest font-[family-name:var(--font-details)] font-bold italic">DC Lab</p>
        </footer>
      </div>
    </main>
  );
}