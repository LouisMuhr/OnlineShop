"use client";
import { useCart } from "@/lib/cartStore";

export default function Cart() {
  const { items, removeItem, clearCart } = useCart();
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="fixed top-4 right-4 bg-white shadow-xl rounded-lg p-6 w-80 z-50">
      <h3 className="text-xl font-bold mb-4">Warenkorb ({items.length})</h3>
      {items.length === 0 ? (
        <p>Leer</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id} className="flex justify-between py-2 border-b">
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-600">Menge: {item.quantity}</p>
              </div>
              <div className="text-right">
                <p>{(item.price * item.quantity).toFixed(2)} €</p>
                <button onClick={() => removeItem(item.id)} className="text-red-600 text-sm">Entfernen</button>
              </div>
            </div>
          ))}
          <div className="mt-4 pt-4 border-t">
            <p className="text-xl font-bold">Gesamt: {total.toFixed(2)} €</p>
            <div className="mt-4">
              {/* Lemon Squeezy Checkout Link – HIER DEINE STORE-ID + Varianten */}
              <script src="https://app.lemonsqueezy.com/js/lemon.js"></script>
              <a
                href={`https://dein-store.lemonsqueezy.com/checkout/buy/12345?checkout[custom][cart]=${encodeURIComponent(JSON.stringify(items))}`}
                className="lemmon-button w-full block text-center bg-green-600 text-white py-3 rounded hover:bg-green-700"
              >
                Jetzt bezahlen
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}