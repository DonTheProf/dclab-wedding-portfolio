"use client";

import { useState, useEffect, useRef } from "react";

export default function ChiaraMatteoPortfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [nome, setNome] = useState("");
  const [persone, setPersone] = useState("1");
  const [bambini, setBambini] = useState("0");
  const [allergie, setAllergie] = useState("");
  const [inviato, setInviato] = useState(false);
  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fullText = "Sotto il sole del Mediterraneo, tra il profumo dei limoni e il blu del mare, vi aspettiamo per brindare al nostro amore.";

  // --- LOGICA MACCHINA DA SCRIVERE OTTIMIZZATA ---
  useEffect(() => {
    if (!isOpen) {
      setTypedText("");
      return;
    }

    let isCancelled = false;
    let i = 0;
    setTypedText("");

    const type = () => {
      if (isCancelled) return;
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
        setTimeout(type, 50);
      }
    };

    const startTimeout = setTimeout(type, 300);

    return () => {
      isCancelled = true;
      clearTimeout(startTimeout);
    };
  }, [isOpen]);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newPhotos = Array.from(files).map(file => URL.createObjectURL(file));
      setUploadedPhotos(prev => [...newPhotos, ...prev]);
    }
  };

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#2B4C7E] antialiased">
      
      {/* --- FONT MEDITERRANEI AGGIORNATI CON BELLEZA --- */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Belleza&family=Prata&family=Yellowtail&family=Montserrat:wght@300;400;600&display=swap');
        
        :root {
          --font-title: 'Prata', serif;
          --font-accent: 'Yellowtail', cursive;
          --font-sans: 'Montserrat', sans-serif;
          --font-belleza: 'Belleza', sans-serif;
        }
      `}} />

      {/* --- COPERTINA (HERO) --- */}
      <div 
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center p-8 transition-all duration-1000 ease-in-out ${
          isOpen ? "-translate-x-full opacity-0 pointer-events-none" : "translate-x-0 opacity-100"
        }`}
        style={{
          backgroundImage: `linear-gradient(rgba(43, 76, 126, 0.4), rgba(43, 76, 126, 0.4)), url('https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1974&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center text-white space-y-6">
          <p className="font-[family-name:var(--font-sans)] uppercase tracking-[0.5em] text-sm font-semibold">Il nostro Sì</p>
          <h1 className="text-7xl md:text-9xl font-[family-name:var(--font-accent)]">Chiara & Matteo</h1>
          <p className="font-[family-name:var(--font-title)] text-2xl">Positano • 14 Luglio 2027</p>
          <button 
            onClick={() => setIsOpen(true)} 
            className="mt-12 px-12 py-4 bg-[#FFD700] text-[#2B4C7E] font-bold uppercase tracking-widest rounded-full hover:scale-110 transition-transform shadow-2xl cursor-pointer"
          >
            Apri l'invito
          </button>
        </div>
      </div>

      {/* --- CONTENUTO --- */}
      <div className={`transition-all duration-1000 ${isOpen ? "opacity-100" : "opacity-0"}`}>
        
        {/* Intro - FONT CAMBIATO IN BELLEZA */}
        <section className="py-24 px-6 text-center max-w-3xl mx-auto space-y-8 min-h-[40vh] flex flex-col justify-center items-center">
          <img src="https://cdn-icons-png.flaticon.com/512/290/290452.png" className="w-20 mx-auto opacity-80" alt="Lemon" />
          <div className="relative">
             <p className="font-[family-name:var(--font-belleza)] text-3xl md:text-4xl leading-relaxed text-transparent select-none">
                {fullText}
             </p>
             <p className="absolute top-0 left-0 w-full h-full font-[family-name:var(--font-belleza)] text-3xl md:text-4xl leading-relaxed text-[#2B4C7E]">
               {typedText}
               <span className="animate-pulse ml-1 opacity-60">|</span>
             </p>
          </div>
        </section>

        {/* --- PROGRAMMA - FONT CAMBIATO IN YELLOWTAIL --- */}
        <section className="bg-[#F0F4F8] py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center font-[family-name:var(--font-accent)] text-6xl text-[#2B4C7E] mb-20">Il Programma</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { time: "17:00", event: "Cerimonia", desc: "Chiesa di Santa Maria Assunta", icon: "⛪" },
                { time: "18:30", event: "Aperitivo", desc: "Terrazza Vista Mare", icon: "🍸" },
                { time: "20:30", event: "Cena", desc: "Sotto il Pergolato", icon: "🍝" },
                { time: "23:30", event: "Party", desc: "Dj Set & Open Bar", icon: "💃" },
              ].map((item, i) => (
                <div key={i} className="text-center p-8 bg-white rounded-2xl shadow-sm border-t-4 border-[#FFD700]">
                  <span className="text-4xl mb-4 block">{item.icon}</span>
                  <p className="font-bold text-[#FFD700] mb-2 font-[family-name:var(--font-sans)]">{item.time}</p>
                  <h4 className="font-[family-name:var(--font-title)] text-xl mb-2">{item.event}</h4>
                  <p className="text-sm text-gray-500 font-[family-name:var(--font-sans)]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- LIVE GALLERY --- */}
        <section className="py-24 px-6 max-w-6xl mx-auto text-center">
          <h3 className="font-[family-name:var(--font-accent)] text-6xl text-[#FFD700] mb-4">I vostri scatti</h3>
          <p className="font-[family-name:var(--font-sans)] mb-12 uppercase tracking-widest text-sm text-gray-400 font-semibold">Caricate le foto della giornata</p>
          
          <input type="file" multiple accept="image/*" className="hidden" ref={fileInputRef} onChange={handlePhotoUpload} />
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="mb-16 px-10 py-4 border-2 border-[#2B4C7E] text-[#2B4C7E] font-bold uppercase tracking-widest rounded-full hover:bg-[#2B4C7E] hover:text-white transition-all cursor-pointer"
          >
            Carica Foto
          </button>

          <div className="columns-2 md:columns-4 gap-4 space-y-4">
            {uploadedPhotos.map((src, i) => (
              <img key={i} src={src} className="w-full rounded-lg shadow-md animate-in fade-in zoom-in duration-700" alt="Guest" />
            ))}
          </div>
        </section>

        {/* --- RSVP --- */}
        <section className="py-24 px-6 bg-[#2B4C7E] text-white">
          <div className="max-w-xl mx-auto">
            {inviato ? (
              <div className="text-center space-y-6 animate-in fade-in zoom-in duration-1000">
                <h4 className="font-[family-name:var(--font-accent)] text-7xl text-[#FFD700]">Grazie!</h4>
                <p className="font-[family-name:var(--font-title)] text-2xl">Ci vediamo a Positano.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setInviato(true); }} className="space-y-8">
                <h3 className="text-center font-[family-name:var(--font-title)] text-5xl mb-12">R.S.V.P.</h3>
                <input 
                  type="text" required placeholder="NOME E COGNOME" 
                  className="w-full bg-white/10 border-b border-white p-4 focus:outline-none focus:bg-white/20 uppercase tracking-widest text-sm"
                />
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest">Adulti</label>
                    <input type="number" min="1" defaultValue="1" className="w-full bg-white/10 border-b border-white p-4 focus:outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest">Bambini</label>
                    <input type="number" min="0" defaultValue="0" className="w-full bg-white/10 border-b border-white p-4 focus:outline-none" />
                  </div>
                </div>
                <textarea 
                  placeholder="ALLERGIE O INTOLLERANZE" 
                  className="w-full bg-white/10 border-b border-white p-4 focus:outline-none uppercase tracking-widest text-sm" 
                />
                <button className="w-full py-5 bg-[#FFD700] text-[#2B4C7E] font-bold uppercase tracking-[0.3em] rounded-xl hover:bg-yellow-400 transition-colors cursor-pointer">
                  Conferma Presenza
                </button>
              </form>
            )}
          </div>
        </section>

        <footer className="py-12 text-center text-gray-400 font-[family-name:var(--font-sans)] text-[10px] uppercase tracking-[0.6em]">
          Chiara & Matteo • 2027 • Made by DC Lab
        </footer>
      </div>
    </main>
  );
}