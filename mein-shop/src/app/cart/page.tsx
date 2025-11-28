// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-50 via-white to-stone-100">
      <div className="text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold text-[#1a4301] font-display leading-tight mb-8">
          Privatkoch Louis
        </h1>
        <p className="text-2xl md:text-3xl text-stone-700 mb-12 max-w-3xl mx-auto">
          Exklusive Menüs · Bei Ihnen zu Hause · 100 % maßgeschneidert
        </p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center">
          <Link
            href="/angebot"
            className="px-12 py-6 bg-[#ad974f] text-white text-xl font-bold rounded-xl shadow-xl hover:shadow-2xl hover:bg-[#9e8242] transition-all duration-300"
          >
            Mein Angebot entdecken
          </Link>
          <Link
            href="/kontakt"
            className="px-12 py-6 border-3 border-[#ad974f] text-[#ad974f] text-xl font-bold rounded-xl hover:bg-[#ad974f] hover:text-white transition-all duration-300"
          >
            Termin anfragen
          </Link>
        </div>
      </div>
    </main>
  );
}