// components/OurChefs.tsx
import Image from "next/image";
import { cooks } from "../data/cooks";

export default function Chefs() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-[#1a4301] font-display">
            Unsere Köche
          </h2>
          <p className="text-xl text-stone-600 mt-6 max-w-3xl mx-auto">
            Handverlesen. Leidenschaftlich. Weltklasse. Nur für Sie zu Hause.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {cooks.map((cook) => (
            <article
              key={cook.id}
              className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={cook.image}
                  alt={cook.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-bold">{cook.name}</h3>
                  <p className="text-lg opacity-90">{cook.specialty}</p>
                </div>
              </div>

              <div className="p-8">
                <p className="text-sm text-stone-600 mb-4">{cook.experience}</p>
                <p className="italic text-gray-700 mb-6">„{cook.description}“</p>

                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-2xl">
                      {i < cook.rating ? "Star" : "Star"}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}