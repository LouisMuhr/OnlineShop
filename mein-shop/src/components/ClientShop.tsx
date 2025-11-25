"use client"; // ← das macht den ganzen Baum zur Client Component
import { products } from "@/data/products";
import BuyButton from "@/components/BuyButton";
import { useCart } from "@/lib/cartStore";
import Link from "next/link";

export default function ClientShop() {
  const items = useCart((s) => s.items);

  return (
    <main className="min-h-screen bg-[#fffdf9]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 to-red-50 py-20 text-center">
        <h2 className="text-6xl font-black text-[#ee3a38] mb-4">
          Die schärfsten Chilis Deutschlands
        </h2>
        <p className="text-2xl text-gray-700 max-w-2xl mx-auto">
          Frisch geerntet · 100 % natürlich · Von mild bis „Ruf-die-Feuerwehr“
        </p>
      </section>

      {/* Produkte */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((p) => (
            <article
              key={p.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group flex flex-col h-full"
            >
              <div className="relative overflow-hidden">
                <img
                  src={
                    p.image ||
                    "https://via.placeholder.com/600x800/ff6b35/ffffff?text=Chili"
                  }
                  alt={p.name}
                  className="w-full h-64 sm:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[#ee3a38] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {p.hotness || "Ultra Scharf"}
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                  {p.name}
                </h3>

                {/* Schärfegrad */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">
                      {i < (p.spiciness ?? 0) ? "Chili" : "Chili"}
                    </span>
                  ))}
                </div>

                {/* Preis + Button in einer Zeile */}
                <div className="mt-auto flex items-center justify-between gap-4">
                  <span className="text-3xl font-black text-[#ee3a38]">
                    {p.price.toFixed(2)} €
                  </span>

                  <BuyButton
                    product={{ id: p.id, name: p.name, price: p.price }}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
