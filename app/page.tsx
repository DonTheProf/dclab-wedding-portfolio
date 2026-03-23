"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function WeddingPortfolioHome() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const demoList = [
    { 
      title: "Boho Chic", 
      couple: "Giulia & Marco", 
      path: "/giulia-e-marco", 
      img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070", 
      style: "Caldo e Naturale" 
    },
    { 
      title: "Minimal Luxury", 
      couple: "Sofia & Alessandro", 
      path: "/sofia-e-alessandro", 
      img: "https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=2072", 
      style: "Elegante e Solenne" 
    },
    { 
      title: "Mediterranean Summer", 
      couple: "Chiara & Matteo", 
      path: "/chiara-e-matteo", 
      img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=2000", 
      style: "Vibrante e Solare" 
    }
  ];

  // Funzione per gestire il toggle della musica
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#1a1a1a] p-8 md:p-24 relative">
      
      {/* --- CONFIGURAZIONE FONT LUXURY --- */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Montserrat:wght@200;400;600&display=swap');
        
        :root {
          --font-logo: 'Cinzel', serif;
          --font-tech: 'Montserrat', sans-serif;
        }
      `}} />

      {/* --- ELEMENTO AUDIO (Sostituisci il link con la tua traccia) --- */}
      <audio ref={audioRef} loop>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
      </audio>

      {/* --- TASTO VOLUME FLOATING --- */}
      <div className="fixed bottom-8 right-8 z-[100]">
        <button 
          onClick={toggleMusic}
          className="flex items-center justify-center w-12 h-12 bg-white/80 backdrop-blur-md border border-black/10 rounded-full shadow-lg hover:scale-110 transition-all duration-300 group"
          title={isPlaying ? "Disattiva Musica" : "Attiva Musica"}
        >
          {isPlaying ? (
            <span className="text-xl">🔊</span>
          ) : (
            <span className="text-xl opacity-40 group-hover:opacity-100">🔇</span>
          )}
        </button>
      </div>

      {/* Header Studio */}
      <header className="text-center mb-24 space-y-4">
        <div className="inline-block border-b border-black/20 pb-4">
          <h1 className="text-6xl md:text-7xl font-[family-name:var(--font-logo)] tracking-[0.3em] uppercase transition-all duration-700">
            DC LAB
          </h1>
        </div>
        <p className="text-[10px] md:text-xs uppercase tracking-[0.8em] text-gray-400 font-[family-name:var(--font-tech)] font-light">
          Wedding Tech Studio
        </p>
      </header>

      {/* Grid delle Demo */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        {demoList.map((item) => (
          <Link href={item.path} key={item.path} className="group block space-y-6">
            <div className="aspect-[3/4] overflow-hidden bg-gray-200 relative shadow-sm rounded-sm">
              <img 
                src={item.img} 
                alt={item.couple} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1500ms] scale-[1.02] group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700" />
            </div>
            <div className="space-y-3">
              <p className="text-[9px] uppercase tracking-[0.5em] text-gray-400 font-semibold font-[family-name:var(--font-tech)]">{item.style}</p>
              <h3 className="text-3xl font-serif italic text-gray-800 font-light">{item.couple}</h3>
              <div className="h-[1px] w-12 bg-black/20 group-hover:w-full group-hover:bg-black transition-all duration-700" />
            </div>
          </Link>
        ))}
      </div>

      {/* Sezione Servizi */}
      <footer className="mt-40 pt-20 border-t border-black/5 text-center max-w-2xl mx-auto space-y-8">
        <div className="space-y-4">
          <h4 className="text-[11px] font-bold uppercase tracking-[0.4em] font-[family-name:var(--font-tech)]">Esperienze Digitali</h4>
          <p className="text-gray-500 text-sm leading-relaxed italic font-light">
            Dalla partecipazione interattiva alla Live Photo Gallery. <br /> 
            Portiamo l'avanguardia tecnologica nel giorno più importante.
          </p>
        </div>
        <div className="pt-8">
           <p className="text-[9px] uppercase tracking-[1em] text-gray-300 font-[family-name:var(--font-tech)]">EST. 2026</p>
        </div>
      </footer>
    </main>
  );
}