import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import ProductModal from "@/components/ProductModal";
import CartDrawer from "@/components/CartDrawer";
import MobileBottomNav from "@/components/MobileBottomNav";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata = {
  title: "Decowin — L'Art d'Offrir, le Triomphe du Cœur | Fleuriste & Cadeaux de Luxe au Maroc",
  description:
    "Decowin : Boutique de fleurs fraîches, boîtes de chocolats belges artisanaux, bouquets de roses et packs fiançailles/mariage. Livraison express 24h à Casablanca, Rabat, Marrakech et partout au Maroc.",
  keywords: [
    "Decowin",
    "chocolat",
    "gift",
    "fleurs",
    "cadeau fiancée",
    "cadeau anniversaire",
    "livraison fleurs casablanca",
    "fleuriste rabat",
    "fleurs marrakech",
    "boite fleurs chocolat",
    "pack fiançailles maroc",
    "mariage maroc",
    "saint-valentin maroc",
  ],
  openGraph: {
    title: "Decowin — L'Art d'Offrir, le Triomphe du Cœur",
    description: "Fleurs fraîches & chocolats de prestige livrés sous 24h au Maroc. Paiement à la livraison.",
    url: "https://decowin.ma",
    siteName: "Decowin",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" sizes="any" />
      </head>
      <body className="bg-[#fcfbfa] text-stone-800 antialiased selection:bg-brand-primary selection:text-white">
        <CartProvider>
          {children}
          {/* Modale d'aperçu rapide & personnalisation */}
          <ProductModal />
          {/* Tiroir de panier coulissant */}
          <CartDrawer />
          {/* Navigation tactile inférieure mobile (sticky) */}
          <MobileBottomNav />
          {/* Bouton d'assistance WhatsApp flottant */}
          <WhatsAppFloat />
        </CartProvider>
      </body>
    </html>
  );
}
