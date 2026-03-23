"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function WeddingPortfolioHome() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.5);
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

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handleEnter = () => {
    setHasEntered(true);
    if (audioRef.current) {
      audioRef.current.play().catch(err => console.log("Audio play failed:", err));
    }
  };

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
    <main className="min-h-screen bg-[#FAF9F6] text-[#1a1a1a] relative overflow-hidden">
      
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Montserrat:wght@200;400;600&display=swap');
        :root {
          --font-logo: 'Cinzel', serif;
          --font-tech: 'Montserrat', sans-serif;
        }
        .volume-slider { -webkit-appearance: none; height: 4px; background: #e5e7eb; border-radius: 2px; outline: none; }
        .volume-slider::-webkit-slider-thumb { -webkit-appearance: none; width: 12px; height: 12px; background: #1a1a1a; border-radius: 50%; cursor: pointer; }
      `}} />

      <audio ref={audioRef} loop src="/canzone2.mp3" />

      {/* --- SPLASH SCREEN --- */}
      <div className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#FAF9F6] transition-all duration-[1500ms] ease-in-out ${
        hasEntered ? "translate-y-[-100%] opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
      }`}>
        <div className="text-center space-y-12 p-8">
          <div className="space-y-4 animate-pulse">
            <h2 className="font-[family-name:var(--font-logo)] text-2xl tracking-[0.5em] text-gray-400">Welcome to</h2>
            <h1 className="font-[family-name:var(--font-logo)] text-6xl md:text-8xl tracking-[0.2em]">DC LAB</h1>
          </div>
          <button onClick={handleEnter} className="group relative px-16 py-5 overflow-hidden border border-black transition-all hover:text-white">
            <div className="absolute inset-0 w-0 bg-black transition-all duration-500 group-hover:w-full"></div>
            <span className="relative z-10 font-[family-name:var(--font-tech)] text-xs uppercase tracking-[0.6em] font-bold">Entra nell'Esperienza</span>
          </button>
        </div>
      </div>

      {/* --- CONTROLLO VOLUME (IN ALTO A DESTRA) --- */}
      <div className={`fixed top-8 right-8 z-[150] flex items-center group bg-white/40 backdrop-blur-xl border border-black/5 p-2 rounded-full shadow-xl transition-all duration-1000 delay-[1000ms] hover:pr-4 ${
        hasEntered ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}>
        <button onClick={toggleMusic} className="flex items-center justify-center w-10 h-10 bg-white border border-black/10 rounded-full shadow-sm hover:scale-105 transition-all duration-300">
          {isPlaying && volume > 0 ? <span className="text-sm">🔊</span> : <span className="text-sm opacity-50">🔇</span>}
        </button>
        <div className="w-0 overflow-hidden group-hover:w-24 transition-all duration-500 ease-in-out flex items-center">
          <input type="range" min="0" max="1" step="0.01" value={volume} onChange={(e) => setVolume(parseFloat(e.target.value))} className="volume-slider w-full ml-3" />
        </div>
      </div>

      {/* --- CONTENUTO HOME --- */}
      <div className={`transition-all duration-1000 delay-700 ${hasEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <header className="text-center pt-32 mb-24 space-y-4">
          <div className="inline-block border-b border-black/20 pb-4">
            <h1 className="text-6xl md:text-7xl font-[family-name:var(--font-logo)] tracking-[0.3em] uppercase">DC LAB</h1>
          </div>
          <p className="text-[10px] md:text-xs uppercase tracking-[0.8em] text-gray-400 font-[family-name:var(--font-tech)] font-light">Wedding Tech Studio</p>
        </header>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 p-8 md:p-0">
          {demoList.map((item) => (
            <Link href={item.path} key={item.path} className="group block space-y-6">
              <div className="aspect-[3/4] overflow-hidden bg-gray-200 relative shadow-sm rounded-sm">
                <img src={item.img} alt={item.couple} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1500ms] scale-[1.02] group-hover:scale-110" />
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

        <footer className="mt-40 pt-20 border-t border-black/5 text-center max-w-2xl mx-auto space-y-8 pb-24">
          <div className="space-y-4 px-8">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.4em] font-[family-name:var(--font-tech)]">Esperienze Digitali</h4>
            <p className="text-gray-500 text-sm leading-relaxed italic font-light">Dalla partecipazione interattiva alla Live Photo Gallery. Portiamo l'avanguardia tecnologica nel giorno più importante.</p>
          </div>
          <p className="text-[9px] uppercase tracking-[1em] text-gray-300 font-[family-name:var(--font-tech)]">EST. 2026</p>
        </footer>
      </div>
    </main>
  );
}