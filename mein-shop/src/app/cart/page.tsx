// src/app/cart/page.tsx
"use client";
import { useCart } from "@/lib/cartStore";
import Link from "next/link";

export default function CartPage() {
  const { items, clearCart } = useCart();
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0).toFixed(2);

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-[#fffdf9] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Warenkorb ist leer</h1>
          <Link href="/" className="text-[#ee3a38] text-xl underline">
            ← Zurück zum Shop
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fffdf9] py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-black text-[#ee3a38] mb-10 text-center">
          Dein Warenkorb
        </h1>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between items-center py-4 border-b last:border-0">
              <div>
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600">Menge: {item.quantity}</p>
              </div>
              <p className="text-2xl font-bold">{(item.price * item.quantity).toFixed(2)} €</p>
            </div>
          ))}

          <div className="mt-8 pt-8 border-t">
            <div className="flex justify-between text-3xl font-black mb-8">
              <span>Gesamt:</span>
              <span className="text-[#ee3a38]">{total} €</span>
            </div>

            <div className="flex gap-4">
              <Link
                href="/"
                className="flex-1 text-center bg-gray-200 py-4 rounded-xl font-bold hover:bg-gray-300 transition"
              >
                Weiter einkaufen
              </Link>

              {/* Hier kommt später dein echter Lemon Squeezy Checkout */}
              <button className="flex-1 bg-[#ee3a38] text-white py-4 rounded-xl font-bold hover:bg-red-700 transition">
                Jetzt bezahlen → Lemon Squeezy Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}