"use client";

import React from "react";
import { Truck, Flower2, Sparkles, ShieldCheck } from "lucide-react";

export default function TrustBadges() {
  const badges = [
    {
      icon: Truck,
      title: "Livraison 2h à 24h",
      desc: "À Casablanca sous 2h-4h, et sous 24h à Rabat, Marrakech, Tanger et tout le Maroc.",
      color: "text-brand-primary bg-rose-50",
    },
    {
      icon: Flower2,
      title: "Fleurs Fraîches du Jour",
      desc: "Sélectionnées chaque matin chez les producteurs pour une tenue optimale de plus de 7 jours.",
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      icon: Sparkles,
      title: "Chocolats Fins de Luxe",
      desc: "Chocolat Belge d'excellence pur beurre de cacao et coffrets prestigieux.",
      color: "text-amber-600 bg-amber-50",
    },
    {
      icon: ShieldCheck,
      title: "Paiement à la Livraison",
      desc: "Commandez en toute sérénité et réglez en espèces à la réception de votre bouquet.",
      color: "text-blue-600 bg-blue-50",
    },
  ];

  return (
    <section className="py-8 sm:py-12 bg-stone-50 border-y border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {badges.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left p-3.5 sm:p-4 rounded-2xl bg-white border border-stone-100 shadow-sm"
              >
                <div className={`p-2.5 rounded-xl ${b.color} mb-2.5 sm:mb-0 sm:mr-3.5 flex-shrink-0`}>
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-stone-900 leading-snug">
                    {b.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-stone-500 mt-1 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
