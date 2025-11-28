// components/Navbar.tsx
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <h1 className="text-3xl md:text-4xl font-black text-[#1a4301] font-display">
            Louis Privatkoch
          </h1>
        </Link>

        {/* Buttons */}
        <div className="flex items-center gap-6">
          <Link
            href="/angebot"
            className="px-8 py-4 bg-[#ad974f] text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:bg-[#9e8242] transition-all duration-300"
          >
            Menü & Preise
          </Link>
          <Link
            href="/kontakt"
            className="px-8 py-4 border-2 border-[#ad974f] text-[#ad974f] font-bold rounded-xl hover:bg-[#ad974f] hover:text-white transition-all duration-300"
          >
            Kontakt
          </Link>
        </div>
      </div>
    </header>
  );
}