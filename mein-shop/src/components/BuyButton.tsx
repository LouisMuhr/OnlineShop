"use client";
import { useCart } from "@/lib/cartStore";

export default function BuyButton({ product }: { product: { id: string; name: string; price: number } }) {
  const addItem = useCart((state) => state.addItem);

  return (
    <button
      onClick={() => addItem(product)}
      className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
    >
      In den Warenkorb
    </button>
  );
}