export const storeConfig = {
  name: "Deco & Marc Gifts",
  tagline: "L'élégance au plus que parfait — Fleuriste & Cadeaux de Prestige au Maroc",
  phone: "(+212) 674-971315",
  whatsappNumber: "212674971315",
  email: "contact@decomarcgifts.com",
  address: "Numéro 51, Marché Rivièra, Bd Ghandi, Casablanca 20000, Maroc",
  openingHours: "7j/7 de 08:30 à 21:30",
  currency: "Dhs",
  
  // Villes desservies & tarifs de livraison
  cities: [
    { name: "Casablanca", deliveryFee: 30, estimate: "Livraison sous 2h à 4h ou même jour", isExpress: true },
    { name: "Rabat / Salé", deliveryFee: 50, estimate: "Livraison sous 24h", isExpress: true },
    { name: "Marrakech", deliveryFee: 60, estimate: "Livraison sous 24h", isExpress: true },
    { name: "Tanger", deliveryFee: 60, estimate: "Livraison sous 24h", isExpress: true },
    { name: "Fès / Meknès", deliveryFee: 60, estimate: "Livraison sous 24h", isExpress: false },
    { name: "Agadir", deliveryFee: 70, estimate: "Livraison sous 24h à 48h", isExpress: false },
    { name: "Autre ville du Maroc", deliveryFee: 70, estimate: "Livraison sous 24h à 48h", isExpress: false },
  ],

  // Avantages rassurants
  features: [
    {
      icon: "Truck",
      title: "Livraison Express 24h",
      desc: "À Casablanca, Rabat, Marrakech et partout au Maroc",
    },
    {
      icon: "Flower2",
      title: "Fleurs Fraîches Garanties",
      desc: "Sélectionnées chaque matin par nos artisans fleuristes",
    },
    {
      icon: "Sparkles",
      title: "Chocolats Fins & Cadeaux",
      desc: "Chocolat Belge d'excellence & marques renommées",
    },
    {
      icon: "ShieldCheck",
      title: "Paiement Simple & Sécurisé",
      desc: "Paiement à la livraison (Cash) ou Virement bancaire",
    },
  ],
};
