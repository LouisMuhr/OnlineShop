// data/cooks.ts

export type Cook = {
  id: string;
  name: string;
  specialty: string;        // z. B. "Französische Haute Cuisine"
  experience: string;       // z. B. "15 Jahre, davon 8 bei 3-Sterne-Restaurants"
  description: string;
  image: string;
  rating: number;           // 1–5 (für Sterne-Anzeige)
};

export const cooks = [
  {
    id: "1",
    name: "Louis Moreau",
    specialty: "Moderne französische Küche",
    experience: "12 Jahre Erfahrung · Ehemals Sous-Chef im Le Bristol Paris",
    description: "Leidenschaftlich, präzise und immer auf der Suche nach dem perfekten Teller.",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80",
    rating: 5,
  },
  {
    id: "2",
    name: "Anna Keller",
    specialty: "Vegetarische & vegane Fine Dining",
    experience: "10 Jahre · Spezialistin für pflanzliche Hochküche",
    description: "Gemüse ist meine Leinwand – Geschmack mein Pinsel.",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80",
    rating: 5,
  },
  {
    id: "3",
    name: "Mateo Rossi",
    specialty: "Italienische Regionalküche",
    experience: "15 Jahre · Aus der Toskana, mit Nonna groß geworden",
    description: "Einfachheit ist die höchste Form der Raffinesse.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    rating: 5,
  },
  {
    id: "4",
    name: "Sophie Nguyen",
    specialty: "Asiatisch-französische Fusion",
    experience: "8 Jahre · Gewinnerin Rising Star Chef Award 2024",
    description: "Harmonie aus Fernost und Frankreich – auf Ihrem Teller.",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&q=80",
    rating: 5,
  },
] as const;