export const storeConfig = {
  name: "Decowin",
  brandName: "Decowin Gifts",
  tagline: "L'Art d'Offrir, le Triomphe du Cœur",
  subTagline: "Fleurs Fraîches & Chocolats de Luxe — L'Émotion Livrée en 24h au Maroc",
  phone: "(+212) 648-811362",
  whatsappNumber: "212648811362",
  email: "contact@decowin.ma",
  address: "Ain Sebaa, Casablanca 20000, Maroc",
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

  // Mots-clés SEO stratégiques
  seoKeywords: [
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
    "cadeau pour femme",
    "cadeau pour homme",
    "saint-valentin maroc",
  ],

  // Avantages réassurance
  features: [
    {
      icon: "Truck",
      title: "Livraison Express 24h",
      desc: "À Casablanca sous 2h-4h, et sous 24h à Rabat, Marrakech, Tanger et tout le Maroc.",
    },
    {
      icon: "Flower2",
      title: "Fleurs Fraîches Garanties",
      desc: "Sélectionnées chaque matin par nos artisans fleuristes pour une tenue de plus de 7 jours.",
    },
    {
      icon: "Sparkles",
      title: "Chocolats Fins & Coffrets",
      desc: "Chocolats belges artisanaux pur beurre de cacao & marques prestigieuses.",
    },
    {
      icon: "ShieldCheck",
      title: "Paiement Simple & Sûr",
      desc: "Paiement à la livraison (Cash) ou virement bancaire après validation.",
    },
  ],
};
