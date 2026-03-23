"use client";

import { useState, useEffect, useRef } from "react";

export default function SofiaAlessandroPortfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  
  // STATI PER IL FORM RSVP
  const [nome, setNome] = useState("");
  const [persone, setPersone] = useState("1");
  const [bambini, setBambini] = useState("0");
  const [allergie, setAllergie] = useState("");
  const [inviato, setInviato] = useState(false);

  // STATO PER LE FOTO CARICATE
  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fullText = "Il piacere di invitarvi al nostro giorno più bello. Un'esperienza di eleganza, amore e condivisione.";

  // --- LOGICA MACMACHINE DA SCRIVERE "BLINDATA" ---
  useEffect(() => {
    if (!isOpen) {
      setTypedText(""); 
      return;
    }

    let isCancelled = false; 
    let i = 0;
    setTypedText(""); // Reset iniziale immediato

    const type = () => {
      if (isCancelled) return;

      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
        setTimeout(type, 50); // Velocità 50ms per un effetto fluido e di classe
      }
    };

    // Ritardo di 300ms: attende che l'animazione della copertina sia partita
    const startTimeout = setTimeout(type, 300);

    return () => {
      isCancelled = true; 
      clearTimeout(startTimeout);
    };
  }, [isOpen]); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nome.trim() !== "") setInviato(true);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newPhotos = Array.from(files).map(file => URL.createObjectURL(file));
      setUploadedPhotos(prev => [...newPhotos, ...prev]);
    }
  };

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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
        
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
      <div className={`transition-all duration-1000 delay-500 ${isOpen ? "opacity-100" : "opacity-0"}`}>
        
        {/* Intro con Scroll Line */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative">
          <div className="w-[1px] h-32 bg-black/20 mb-12"></div>
          
          <div className="max-w-3xl mx-auto">
            <h2 className="font-[family-name:var(--font-vogue)] text-5xl md:text-7xl italic mb-12 text-gray-400">L'essenza dell'Amore</h2>
            
            <div className="relative">
               {/* Ghost Text: mantiene l'altezza per evitare sbalzi di layout */}
               <p className="font-[family-name:var(--font-vogue)] text-2xl md:text-4xl font-light leading-relaxed tracking-tight text-transparent select-none">
                {fullText}
               </p>
               {/* Testo animato reale */}
               <p className="absolute top-0 left-0 w-full h-full font-[family-name:var(--font-vogue)] text-2xl md:text-4xl font-light leading-relaxed tracking-tight text-gray-800 italic">
                {typedText}
                <span className="animate-pulse ml-1 opacity-60">|</span>
               </p>
            </div>
          </div>
          
          <div className="w-[1px] h-32 bg-black/20 mt-12"></div>
        </section>

        <div className="max-w-5xl mx-auto px-6 space-y-64 pb-40">
          {/* Cerimonia */}
          <section className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative group">
              <img src="https://images.unsplash.com/photo-1544124499-58912cbddaad?q=80&w=1974&auto=format&fit=crop" className="w-full grayscale hover:grayscale-0 transition-all duration-1000 aspect-[3/4] object-cover shadow-2xl" alt="Basilica" />
            </div>
            <div className="order-1 md:order-2 space-y-8">
              <p className="font-[family-name:var(--font-clean)] text-[10px] uppercase tracking-[0.6em] text-gray-400 font-bold">La Promessa</p>
              <h3 className="font-[family-name:var(--font-royal)] text-4xl md:text-5xl border-b border-black/5 pb-6">Basilica di Santa Maria</h3>
              <p className="font-[family-name:var(--font-clean)] text-sm leading-relaxed text-gray-500 italic font-light">Il rito religioso avrà inizio alle ore 11:30.</p>
              <a href="https://www.google.it/maps" target="_blank" rel="noopener noreferrer" className="inline-block text-[10px] uppercase tracking-[0.4em] font-bold border-b border-black pb-2 mt-4 hover:opacity-50 transition-opacity">Visualizza Mappa</a>
            </div>
          </section>

          {/* Ricevimento */}
          <section className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-right">
              <p className="font-[family-name:var(--font-clean)] text-[10px] uppercase tracking-[0.6em] text-gray-400 font-bold">Il Galà</p>
              <h3 className="font-[family-name:var(--font-royal)] text-4xl md:text-5xl border-b border-black/5 pb-6">Villa del Borgo</h3>
              <p className="font-[family-name:var(--font-clean)] text-sm leading-relaxed text-gray-500 italic font-light">A seguire, i festeggiamenti proseguiranno nei giardini della villa.</p>
              <a href="https://www.google.it/maps" target="_blank" rel="noopener noreferrer" className="inline-block text-[10px] uppercase tracking-[0.4em] font-bold border-b border-black pb-2 mt-4 hover:opacity-50 transition-opacity">La Location</a>
            </div>
            <div className="relative group">
              <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2048&auto=format&fit=crop" className="w-full grayscale hover:grayscale-0 transition-all duration-1000 aspect-[3/4] object-cover shadow-2xl" alt="Villa" />
            </div>
          </section>

          {/* Live Gallery */}
          <section className="text-center space-y-16">
            <div className="space-y-4">
              <p className="font-[family-name:var(--font-clean)] text-[10px] uppercase tracking-[0.8em] text-gray-400 font-bold">Momenti Condivisi</p>
              <h3 className="font-[family-name:var(--font-label)] text-6xl md:text-8xl">La nostra bacheca</h3>
              <p className="font-[family-name:var(--font-clean)] text-[11px] uppercase tracking-widest text-gray-500 max-w-sm mx-auto leading-relaxed italic">
                Rendete eterno ogni istante. <br /> Caricate le vostre foto per far parte del racconto.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <input 
                type="file" multiple accept="image/*" className="hidden" 
                ref={fileInputRef} onChange={handlePhotoUpload} 
              />
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="px-16 py-6 border border-black text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-black hover:text-white transition-all duration-700 shadow-xl cursor-pointer"
              >
                Carica un momento
              </button>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full mt-24">
                {uploadedPhotos.map((src, index) => (
                  <div key={index} className="aspect-square overflow-hidden bg-gray-100 animate-in fade-in slide-in-from-bottom-6 duration-[1000ms]">
                    <img src={src} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Upload guest" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* RSVP */}
          <section className="pt-32 border-t border-black/10">
            {inviato ? (
              <div className="text-center py-20 animate-in fade-in zoom-in duration-1000">
                <h4 className="font-[family-name:var(--font-label)] text-7xl md:text-9xl mb-8 text-[#C4A484]">Grazie</h4>
                <p className="font-[family-name:var(--font-royal)] text-lg tracking-[0.3em] uppercase font-light">La vostra risposta è stata registrata.</p>
                <button onClick={() => setInviato(false)} className="mt-8 text-[9px] uppercase tracking-widest border-b border-black/20 pb-1 cursor-pointer">Modifica</button>
              </div>
            ) : (
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-16">
                  <p className="font-[family-name:var(--font-clean)] text-[10px] uppercase tracking-[0.8em] text-gray-400 mb-4 font-bold">R.S.V.P.</p>
                  <h4 className="font-[family-name:var(--font-label)] text-6xl md:text-8xl">Conferma la tua presenza</h4>
                </div>

                <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="group relative">
                    <label className="block font-[family-name:var(--font-clean)] text-[9px] uppercase tracking-[0.4em] text-gray-400 mb-2 font-bold">Nome e Cognome</label>
                    <input type="text" required value={nome} onChange={(e) => setNome(e.target.value)} placeholder="NOME COMPLETO" className="w-full bg-transparent border-b border-black/10 py-4 text-[11px] tracking-[0.4em] uppercase focus:outline-none focus:border-black transition-all placeholder:text-gray-200" />
                  </div>

                  <div className="flex flex-col md:flex-row justify-center gap-12 py-4">
                    <label className="flex items-center space-x-4 cursor-pointer">
                      <input type="radio" name="presence" defaultChecked className="w-3 h-3 appearance-none border border-black checked:bg-black transition-all cursor-pointer" />
                      <span className="font-[family-name:var(--font-clean)] text-[10px] uppercase tracking-[0.4em] font-semibold">Sì, confermo</span>
                    </label>
                    <label className="flex items-center space-x-4 cursor-pointer opacity-40 hover:opacity-100">
                      <input type="radio" name="presence" className="w-3 h-3 appearance-none border border-black checked:bg-black transition-all cursor-pointer" />
                      <span className="font-[family-name:var(--font-clean)] text-[10px] uppercase tracking-[0.4em] font-semibold">No, non potrò</span>
                    </label>
                  </div>

                  <div className="grid grid-cols-2 gap-12">
                    <div className="relative">
                      <label className="block font-[family-name:var(--font-clean)] text-[9px] uppercase tracking-[0.4em] text-gray-400 mb-2 font-bold">Adulti</label>
                      <input type="number" min="1" value={persone} onChange={(e) => setPersone(e.target.value)} className="w-full bg-transparent border-b border-black/10 py-4 text-[11px] tracking-[0.4em] focus:outline-none focus:border-black transition-all" />
                    </div>
                    <div className="relative">
                      <label className="block font-[family-name:var(--font-clean)] text-[9px] uppercase tracking-[0.4em] text-gray-400 mb-2 font-bold">Bambini</label>
                      <input type="number" min="0" value={bambini} onChange={(e) => setBambini(e.target.value)} className="w-full bg-transparent border-b border-black/10 py-4 text-[11px] tracking-[0.4em] focus:outline-none focus:border-black transition-all" />
                    </div>
                  </div>

                  <div className="group relative">
                    <label className="block font-[family-name:var(--font-clean)] text-[9px] uppercase tracking-[0.4em] text-gray-400 mb-2 font-bold">Allergie</label>
                    <textarea rows={2} value={allergie} onChange={(e) => setAllergie(e.target.value)} placeholder="ES. CELIACHIA, VEGAN..." className="w-full bg-transparent border-b border-black/10 py-4 text-[11px] tracking-[0.4em] uppercase focus:outline-none focus:border-black transition-all resize-none placeholder:text-gray-200" />
                  </div>

                  <div className="text-center pt-8">
                    <button type="submit" className="bg-black text-white px-20 py-6 font-[family-name:var(--font-clean)] text-[10px] uppercase tracking-[0.5em] hover:bg-gray-800 transition-all duration-500 shadow-2xl cursor-pointer">Invia Conferma</button>
                  </div>
                </form>
              </div>
            )}
          </section>

        </div>

        {/* Footer */}
        <footer className="py-24 text-center bg-white border-t border-black/5">
          <p className="font-[family-name:var(--font-royal)] text-2xl tracking-[0.4em] mb-4 font-bold">S & A</p>
          <div className="w-8 h-[1px] bg-black/20 mx-auto mb-8"></div>
          <p className="font-[family-name:var(--font-clean)] text-[9px] uppercase tracking-[0.6em] opacity-40 italic">DC Lab Luxury Tech Studio</p>
        </footer>
      </div>
    </main>
  );
}