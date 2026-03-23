"use client";

import { useState } from "react";

export default function RSVP() {
  const [nome, setNome] = useState("");
  const [presenza, setPresenza] = useState("si");
  const [persone, setPersone] = useState("1");
  const [bambini, setBambini] = useState("0");
  const [allergie, setAllergie] = useState("");
  const [inviato, setInviato] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nome.trim() === "") return;
    setInviato(true);
  };

  if (inviato) {
    return (
      <section className="py-24 px-6 text-center animate-in fade-in zoom-in duration-700">
        <div className="mb-8 text-5xl">🍋</div>
        <h3 className="font-[family-name:var(--font-label)] text-7xl md:text-8xl text-[#2B4C7E] mb-6">
          Grazie!
        </h3>
        <p className="font-[family-name:var(--font-title)] text-2xl text-[#2B4C7E]/80">
          Non vediamo l'ora di brindare con voi.
        </p>
        <button 
          onClick={() => setInviato(false)}
          className="mt-12 text-[#FFD700] font-[family-name:var(--font-sans)] uppercase tracking-widest text-[10px] border-b-2 border-[#FFD700] pb-1 hover:text-[#2B4C7E] hover:border-[#2B4C7E] transition-all"
        >
          Modifica risposta
        </button>
      </section>
    );
  }

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <p className="font-[family-name:var(--font-sans)] text-[11px] uppercase tracking-[0.6em] text-[#FFD700] font-bold">
          R.S.V.P.
        </p>
        <h3 className="font-[family-name:var(--font-label)] text-7xl md:text-8xl text-[#2B4C7E]">
          Conferma la tua presenza
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-10">
        
        {/* NOME */}
        <div className="space-y-2">
          <label className="block font-[family-name:var(--font-sans)] text-[10px] uppercase tracking-widest text-[#2B4C7E] font-bold">
            Nome e Cognome
          </label>
          <input 
            type="text" 
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Esempio: Mario Rossi"
            className="w-full bg-[#F0F4F8] border-none rounded-xl p-5 text-[#2B4C7E] focus:ring-2 focus:ring-[#FFD700] outline-none transition-all placeholder:opacity-30"
          />
        </div>

        {/* PRESENZA */}
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => setPresenza("si")}
            className={`py-4 rounded-xl font-[family-name:var(--font-sans)] text-[10px] uppercase tracking-widest font-bold transition-all ${
              presenza === "si" ? "bg-[#2B4C7E] text-white shadow-lg" : "bg-[#F0F4F8] text-[#2B4C7E] opacity-50"
            }`}
          >
            Sì, ci sarò
          </button>
          <button
            type="button"
            onClick={() => setPresenza("no")}
            className={`py-4 rounded-xl font-[family-name:var(--font-sans)] text-[10px] uppercase tracking-widest font-bold transition-all ${
              presenza === "no" ? "bg-[#2B4C7E] text-white shadow-lg" : "bg-[#F0F4F8] text-[#2B4C7E] opacity-50"
            }`}
          >
            No, non potrò
          </button>
        </div>

        {/* NUMERI */}
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="block font-[family-name:var(--font-sans)] text-[10px] uppercase tracking-widest text-[#2B4C7E] font-bold">
              Adulti
            </label>
            <input 
              type="number" min="1" value={persone}
              onChange={(e) => setPersone(e.target.value)}
              className="w-full bg-[#F0F4F8] border-none rounded-xl p-5 text-[#2B4C7E] focus:ring-2 focus:ring-[#FFD700] outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="block font-[family-name:var(--font-sans)] text-[10px] uppercase tracking-widest text-[#2B4C7E] font-bold">
              Bambini
            </label>
            <input 
              type="number" min="0" value={bambini}
              onChange={(e) => setBambini(e.target.value)}
              className="w-full bg-[#F0F4F8] border-none rounded-xl p-5 text-[#2B4C7E] focus:ring-2 focus:ring-[#FFD700] outline-none"
            />
          </div>
        </div>

        {/* ALLERGIE */}
        <div className="space-y-2">
          <label className="block font-[family-name:var(--font-sans)] text-[10px] uppercase tracking-widest text-[#2B4C7E] font-bold">
            Allergie o Note
          </label>
          <textarea 
            rows={3}
            value={allergie}
            onChange={(e) => setAllergie(e.target.value)}
            placeholder="Segnala qui eventuali intolleranze..."
            className="w-full bg-[#F0F4F8] border-none rounded-xl p-5 text-[#2B4C7E] focus:ring-2 focus:ring-[#FFD700] outline-none resize-none placeholder:opacity-30"
          />
        </div>

        {/* BOTTONE */}
        <button 
          type="submit"
          className="w-full py-6 bg-[#FFD700] text-[#2B4C7E] font-bold uppercase tracking-[0.4em] text-[11px] rounded-full shadow-xl hover:bg-yellow-400 hover:scale-[1.02] transition-all active:scale-95"
        >
          Invia Conferma
        </button>
      </form>
    </section>
  );
}