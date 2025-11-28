// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Louis Privatkoch – Exklusive Menüs bei Ihnen zu Hause",
  description: "Maßgeschneiderte Privatkoch-Erlebnisse in höchster Qualität",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans bg-stone-50 text-gray-900 min-h-screen`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}