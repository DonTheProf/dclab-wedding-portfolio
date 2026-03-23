"use client";
import Link from "next/link";

export default function WeddingPortfolioHome() {
  const demoList = [
    { title: "Boho Chic", couple: "Giulia & Marco", path: "/giulia-e-marco", img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070", style: "Caldo e Naturale" },
    { title: "Minimal Luxury", couple: "Sofia & Alessandro", path: "/sofia-e-alessandro", img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069", style: "Elegante e Solenne" },
    { title: "Mediterranean Summer", couple: "Chiara & Matteo", path: "/chiara-e-matteo", img: "https://images.unsplash.com/photo-1520933566085-8622003d03f1?q=80&w=2070", style: "Vibrante e Solare" }
  ];

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#1a1a1a] p-8 md:p-24">
      {/* Header Studio */}
      <header className="text-center mb-24 space-y-4">
        <h1 className="text-5xl font-bold tracking-[0.2em] uppercase border-b-2 border-black inline-block pb-2">DC LAB</h1>
        <p className="text-xs uppercase tracking-[0.5em] text-gray-500">Wedding Tech Studio</p>
      </header>

      {/* Grid delle Demo */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {demoList.map((item) => (
          <Link href={item.path} key={item.path} className="group block space-y-6">
            <div className="aspect-[3/4] overflow-hidden bg-gray-200 relative">
              <img src={item.img} alt={item.couple} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="space-y-2">
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">{item.style}</p>
              <h3 className="text-2xl font-serif italic text-gray-800">{item.couple}</h3>
              <div className="h-[1px] w-8 bg-black group-hover:w-full transition-all duration-500" />
            </div>
          </Link>
        ))}
      </div>

      {/* Sezione Servizi */}
      <section className="mt-40 pt-20 border-t border-black/5 text-center max-w-2xl mx-auto space-y-6">
        <h4 className="text-sm font-bold uppercase tracking-[0.3em]">Servizi Digitali per Matrimoni</h4>
        <p className="text-gray-500 text-sm leading-relaxed italic">
          Offriamo agli sposi soluzioni innovative: RSVP istantanei, Live Photo Gallery degli ospiti e integrazione QR Code su partecipazioni fisiche.
        </p>
      </section>
    </main>
  );
}