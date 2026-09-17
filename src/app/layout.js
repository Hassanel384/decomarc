import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import ProductModal from "@/components/ProductModal";
import CartDrawer from "@/components/CartDrawer";
import MobileBottomNav from "@/components/MobileBottomNav";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata = {
  title: "Deco & Marc Gifts — Fleuriste & Livraison de Fleurs Casablanca Rabat Marrakech Maroc",
  description:
    "Livraison express de fleurs fraîches et chocolats de luxe sous 24h pour toutes les occasions : fiançailles, mariage, anniversaire, naissance, Saint-Valentin. Fleuriste d'exception à Casablanca, Rabat, Marrakech et tout le Maroc.",
  keywords: [
    "fleuriste casablanca",
    "livraison fleurs maroc",
    "fleurs rabat",
    "fleurs marrakech",
    "boite fleurs chocolat",
    "cadeau mariage maroc",
    "deco marc gifts",
  ],
  openGraph: {
    title: "Deco & Marc Gifts — L'élégance au plus que parfait",
    description: "Fleuriste de luxe & créateur de coffrets cadeaux au Maroc. Livraison rapide sous 24h.",
    url: "https://decomarcgifts.com",
    siteName: "Deco & Marc Gifts",
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
