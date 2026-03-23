"use client";

import { useState } from "react";

export default function RSVPMini() {
  const [nome, setNome] = useState("");
  const [presenza, setPresenza] = useState("si");
  const [persone, setPersone] = useState("1"); // Numero adulti
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
      <section className="py-32 px-6 text-center animate-in fade-in zoom-in duration-700">
        <h3 className="font-[family-name:var(--font-label)] text-7xl md:text-9xl text-black mb-8">
          Grazie
        </h3>
        <p className="font-[family-name:var(--font-clean)] text-sm tracking-[0.4em] uppercase">
          La vostra risposta è stata registrata con successo.
        </p>
        <button 
          onClick={() => setInviato(false)}
          className="mt-12 text-[9px] uppercase tracking-[0.4em] border-b border-black/20 pb-1 hover:border-black transition-all"
        >
          Modifica Risposta
        </button>
      </section>
    );
  }

  return (
    <section className="py-32 px-6 max-w-4xl mx-auto border-t border-black/5">
      <div className="text-center mb-20">
        <p className="font-[family-name:var(--font-clean)] text-[10px] uppercase tracking-[0.8em] text-gray-400 mb-4 font-bold">
          R.S.V.P.
        </p>
        <h3 className="font-[family-name:var(--font-label)] text-7xl md:text-8xl text-black">
          Conferma la tua presenza
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-12">
        
        {/* NOME E COGNOME */}
        <div className="relative group">
          <label className="block font-[family-name:var(--font-clean)] text-[9px] uppercase tracking-[0.3em] text-gray-400 mb-2 font-bold">
            Nome e Cognome
          </label>
          <input 
            type="text" 
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="INSERISCI NOME"
            className="w-full bg-transparent border-b border-black/10 py-4 text-[11px] tracking-[0.3em] uppercase focus:outline-none focus:border-black transition-colors placeholder:text-gray-200 font-medium"
          />
        </div>

        {/* SARAI DEI NOSTRI? */}
        <div className="space-y-6">
          <label className="block font-[family-name:var(--font-clean)] text-[9px] uppercase tracking-[0.3em] text-gray-400 font-bold">
            Sarai dei nostri?
          </label>
          <div className="flex space-x-12">
            <label className="flex items-center space-x-3 cursor-pointer group">
              <input 
                type="radio" 
                name="presence" 
                checked={presenza === "si"}
                onChange={() => setPresenza("si")}
                className="w-3 h-3 appearance-none border border-black checked:bg-black transition-all cursor-pointer" 
              />
              <span className="font-[family-name:var(--font-clean)] text-[10px] uppercase tracking-[0.2em]">Sì, con piacere</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer group opacity-50 hover:opacity-100 transition-opacity">
              <input 
                type="radio" 
                name="presence" 
                checked={presenza === "no"}
                onChange={() => setPresenza("no")}
                className="w-3 h-3 appearance-none border border-black checked:bg-black transition-all cursor-pointer" 
              />
              <span className="font-[family-name:var(--font-clean)] text-[10px] uppercase tracking-[0.2em]">No, non potrò</span>
            </label>
          </div>
        </div>

        {/* GRIGLIA: NUMERO PERSONE E BAMBINI */}
        <div className="grid grid-cols-2 gap-12">
          {/* Numero Adulti */}
          <div className="relative">
            <label className="block font-[family-name:var(--font-clean)] text-[9px] uppercase tracking-[0.3em] text-gray-400 mb-2 font-bold">
              Numero Persone
            </label>
            <input 
              type="number" 
              min="1"
              value={persone}
              onChange={(e) => setPersone(e.target.value)}
              className="w-full bg-transparent border-b border-black/10 py-4 text-[11px] tracking-[0.3em] focus:outline-none focus:border-black transition-colors"
            />
          </div>

          {/* Numero Bambini */}
          <div className="relative">
            <label className="block font-[family-name:var(--font-clean)] text-[9px] uppercase tracking-[0.3em] text-gray-400 mb-2 font-bold">
              Numero Bambini
            </label>
            <input 
              type="number" 
              min="0"
              value={bambini}
              onChange={(e) => setBambini(e.target.value)}
              className="w-full bg-transparent border-b border-black/10 py-4 text-[11px] tracking-[0.3em] focus:outline-none focus:border-black transition-colors"
            />
          </div>
        </div>

        {/* ALLERGIE O NOTE ALIMENTARI */}
        <div className="space-y-4">
          <label className="block font-[family-name:var(--font-clean)] text-[9px] uppercase tracking-[0.3em] text-gray-400 font-bold">
            Allergie o Intolleranze
          </label>
          <textarea 
            rows={2}
            value={allergie}
            onChange={(e) => setAllergie(e.target.value)}
            className="w-full bg-black/[0.02] border border-black/5 p-4 text-[11px] tracking-[0.2em] focus:outline-none focus:border-black/20 resize-none uppercase placeholder:text-gray-200 font-light"
            placeholder="ES. CELIACHIA, VEGAN..."
          />
        </div>

        {/* BOTTONE INVIO */}
        <div className="pt-8 text-center">
          <button 
            type="submit"
            className="w-full bg-black text-white py-6 font-[family-name:var(--font-clean)] text-[10px] uppercase tracking-[0.6em] hover:bg-gray-800 transition-all duration-500 shadow-xl shadow-black/5 active:scale-[0.98]"
          >
            Invia Risposta
          </button>
          <p className="mt-6 font-[family-name:var(--font-clean)] text-[8px] uppercase tracking-[0.4em] text-gray-300 italic">
            Risposta richiesta entro il 15.05.2027
          </p>
        </div>
      </form>
    </section>
  );
}