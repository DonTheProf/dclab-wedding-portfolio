"use client";

import { useState } from "react";

export default function RSVP() {
  const [nome, setNome] = useState("");
  const [presenza, setPresenza] = useState("si");
  const [adulti, setAdulti] = useState("1");
  const [bambini, setBambini] = useState("0");
  const [note, setNote] = useState("");
  const [inviato, setInviato] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nome.trim() === "") {
      alert("Per favore, inserisci il tuo nome.");
      return;
    }
    setInviato(true);
  };

  if (inviato) {
    return (
      <section className="flex flex-col items-center text-center px-6 py-24 bg-white/20 backdrop-blur-md max-w-3xl mx-auto rounded-[40px] border border-white/40 shadow-sm my-20 transition-all duration-1000">
        <h3 className="text-6xl md:text-8xl font-[family-name:var(--font-label)] text-[#5c4a40] font-normal tracking-tight mb-6">
          Grazie {nome.split(' ')[0]}!
        </h3>
        <p className="font-[family-name:var(--font-cormorant)] text-[#5c4a40] text-2xl italic">
          {presenza === "si" 
            ? `Non vediamo l'ora di avervi con noi!` 
            : "Ci dispiace che non potrai esserci, sarai comunque nei nostri pensieri."}
        </p>
        <button 
          onClick={() => setInviato(false)}
          className="mt-10 text-[#C48061] font-[family-name:var(--font-details)] uppercase tracking-widest text-[10px] border-b border-[#C48061] pb-1 hover:opacity-70 transition-opacity"
        >
          Modifica risposta
        </button>
      </section>
    );
  }

  return (
    <section className="flex flex-col items-center text-center px-6 py-20 bg-white/20 backdrop-blur-md max-w-3xl mx-auto rounded-[40px] border border-white/40 shadow-sm my-20">
      <p className="text-[#7A8B76] font-[family-name:var(--font-details)] uppercase tracking-[0.4em] text-[14px] mb-4 font-bold">
        RSVP
      </p>
      
      <h3 className="text-6xl md:text-8xl font-[family-name:var(--font-label)] text-[#5c4a40] font-normal tracking-tight mb-8">
        Conferma la tua presenza
      </h3>
      
      <p className="font-[family-name:var(--font-cormorant)] text-[#5c4a40] text-xl italic mb-12">
        È importante per noi sapere se sarai dei nostri entro il 30 Giugno 2027
      </p>
      
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-10 font-[family-name:var(--font-details)]">
        {/* NOME E COGNOME */}
        <div className="text-left group">
          <label className="block text-[10px] uppercase tracking-widest text-[#8c7a6b] mb-2 ml-2 font-bold">
            Nome e Cognome
          </label>
          <input 
            type="text" 
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Inserisci il tuo nome completo"
            className="w-full bg-transparent border-b border-[#C48061]/30 p-4 focus:outline-none focus:border-[#C48061] transition-colors text-[#5c4a40]"
          />
        </div>

        {/* RADIO BUTTONS PRESENZA */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 py-4">
          <label className="flex items-center cursor-pointer group">
            <input 
              type="radio" 
              name="presence" 
              value="si" 
              className="hidden peer" 
              checked={presenza === "si"}
              onChange={() => setPresenza("si")}
            />
            <span className="w-5 h-5 border border-[#C48061] rounded-full mr-3 peer-checked:bg-[#C48061] transition-all ring-offset-4 ring-[#C48061]/20 peer-checked:ring-2"></span>
            <span className="text-[12px] uppercase tracking-widest text-[#5c4a40] font-bold">Sì, verrò volentieri</span>
          </label>
          <label className="flex items-center cursor-pointer group">
            <input 
              type="radio" 
              name="presence" 
              value="no" 
              className="hidden peer"
              checked={presenza === "no"}
              onChange={() => setPresenza("no")}
            />
            <span className="w-5 h-5 border border-[#C48061] rounded-full mr-3 peer-checked:bg-[#C48061] transition-all ring-offset-4 ring-[#C48061]/20 peer-checked:ring-2"></span>
            <span className="text-[12px] uppercase tracking-widest text-[#5c4a40] font-bold">No, non potrò esserci</span>
          </label>
        </div>

        {/* CAMPI NUMERICI (Mostrati solo se presenza === "si") */}
        {presenza === "si" && (
          <div className="grid grid-cols-2 gap-6 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="text-left">
              <label className="block text-[10px] uppercase tracking-widest text-[#8c7a6b] mb-2 ml-2 font-bold">
                Numero Adulti
              </label>
              <input 
                type="number" 
                min="1"
                value={adulti}
                onChange={(e) => setAdulti(e.target.value)}
                className="w-full bg-white/30 border border-[#C48061]/20 p-4 focus:outline-none focus:border-[#C48061] transition-colors rounded-2xl text-[#5c4a40]"
              />
            </div>
            <div className="text-left">
              <label className="block text-[10px] uppercase tracking-widest text-[#8c7a6b] mb-2 ml-2 font-bold">
                Numero Bambini
              </label>
              <input 
                type="number" 
                min="0"
                value={bambini}
                onChange={(e) => setBambini(e.target.value)}
                className="w-full bg-white/30 border border-[#C48061]/20 p-4 focus:outline-none focus:border-[#C48061] transition-colors rounded-2xl text-[#5c4a40]"
              />
            </div>
          </div>
        )}

        {/* NOTE / ALLERGIE */}
        <div className="text-left">
          <label className="block text-[10px] uppercase tracking-widest text-[#8c7a6b] mb-2 ml-2 font-bold">
            Allergie o preferenze alimentari
          </label>
          <textarea 
            rows={3}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Es: Celiachia, Intolleranza al lattosio, Vegano..."
            className="w-full bg-white/30 border border-[#C48061]/20 p-4 focus:outline-none focus:border-[#C48061] transition-colors rounded-2xl resize-none text-[#5c4a40]"
          />
        </div>

        {/* TASTO INVIO */}
        <button 
          type="submit"
          className="w-full py-5 bg-[#C48061] text-white uppercase tracking-[0.3em] text-[11px] font-bold rounded-full hover:bg-[#A86B51] transition-all shadow-xl active:scale-95 shadow-[#C48061]/20"
        >
          Invia Conferma
        </button>
      </form>
    </section>
  );
}