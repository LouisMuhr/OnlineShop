// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useCart } from "@/lib/cartStore";

export default function Navbar() {
  const items = useCart((s) => s.items);
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo / Shop-Name */}
        <Link href="/" className="flex items-center gap-3">
          <h1 className="text-3xl font-black text-[#ee3a38]">Chili Inferno</h1>
        </Link>

        {/* Warenkorb-Button – schön kompakt */}
        <Link
          href="/cart"
          className="relative bg-[#ee3a38] text-white px-8 py-4 rounded-2xl font-bold hover:bg-red-700 transition flex items-center gap-3 shadow-lg"
        >
          <span className="hidden sm:inline">Warenkorb</span>
          {/* Anzahl-Badge */}
          {itemCount > 0 && (
            <span className="absolute -top-3 -right-3 bg-[#a7d848] text-black text-sm font-black rounded-full h-8 w-8 flex items-center justify-center shadow-md">
              {itemCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}