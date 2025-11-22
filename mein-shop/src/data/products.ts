// src/data/products.ts
export const products = [
  {
    id: "1",
    name: "Carolina Reaper Pulver",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1607305387299-d997d12abc30?w=800",
    description: "Die schärfste Chili der Welt als Pulver",
    hotness: "2.200.000 SHU",   // <-- neu
    spiciness: 5,               // <-- neu (1–5)
  },
  {
    id: "2",
    name: "Habanero Chili-Sauce",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1595429776812-4dd4581d97c8?w=800",
    description: "Fruchtig-scharfe Sauce",
    hotness: "200.000 SHU",
    spiciness: 4,
  },
  {
    id: "3",
    name: "Jalapeño mild",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1625246333197-973eae2e4ce4?w=800",
    description: "Perfekt für Einsteiger",
    hotness: "5.000 SHU",
    spiciness: 2,
  },
  // weitere Produkte einfach so ergänzen
];