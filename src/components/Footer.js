"use client";

import React from "react";
import Link from "next/link";
import { storeConfig } from "@/data/storeConfig";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-12 pb-24 md:pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* 1. PRÉSENTATION DE LA MARQUE DECOWIN */}
          <div className="space-y-4">
            <div>
              <span className="text-2xl font-serif font-black text-white tracking-tight">
                DECO<span className="text-brand-primary">WIN</span>
              </span>
              <p className="text-[11px] uppercase tracking-[0.2em] text-brand-primary font-bold mt-0.5">
                {storeConfig.tagline}
              </p>
            </div>
            <p className="text-stone-400 leading-relaxed text-xs">
              Maison artisanale marocaine de fleurs fraîches et chocolaterie belge de prestige. Nous concevons avec passion des coffrets floraux raffinés, des packs de fiançailles royaux et des cadeaux inoubliables livrés partout au Maroc.
            </p>
            <div className="flex items-center space-x-2 text-amber-400 font-semibold text-xs">
              <ShieldCheck className="w-4 h-4" />
              <span>Fraîcheur garantie 7 jours &amp; livraison sous 24h</span>
            </div>
          </div>

          {/* 2. CATÉGORIES POPULAIRES */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              Nos Univers Floraux
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <Link href="/categories/boites-fleurs" className="hover:text-brand-primary transition-colors">
                  Boîtes Fleurs &amp; Chocolat Belge
                </Link>
              </li>
              <li>
                <Link href="/categories/mariage-fiancailles" className="hover:text-brand-primary transition-colors">
                  Packs Fiançailles &amp; Hdia Mariage
                </Link>
              </li>
              <li>
                <Link href="/categories/bouquets" className="hover:text-brand-primary transition-colors">
                  Bouquets de Roses Rouges Fraîches
                </Link>
              </li>
              <li>
                <Link href="/categories/pour-elle" className="hover:text-brand-primary transition-colors">
                  Cadeaux Anniversaire &amp; Pour Elle
                </Link>
              </li>
              <li>
                <Link href="/categories/pour-lui" className="hover:text-brand-primary transition-colors">
                  Cadeaux Pour Lui &amp; Félicitations
                </Link>
              </li>
              <li>
                <Link href="/categories/decoration-voiture" className="hover:text-brand-primary transition-colors">
                  Décoration Voiture de Mariage
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. PAGES DU SITE & ASSISTANCE */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              Informations &amp; Aide
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <Link href="/a-propos" className="hover:text-brand-primary transition-colors">
                  À Propos de la Maison Decowin
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-primary transition-colors">
                  Contact &amp; Foire Aux Questions (FAQ)
                </Link>
              </li>
              <li>
                <Link href="/panier" className="hover:text-brand-primary transition-colors">
                  Consulter mon Panier
                </Link>
              </li>
              <li>
                <Link href="/catalogue" className="hover:text-brand-primary transition-colors">
                  Catalogue Complet Decowin
                </Link>
              </li>
              <li>
                <a
                  href={`https://wa.me/${storeConfig.whatsappNumber}?text=Bonjour%20Decowin%2C%20je%20souhaite%20suivre%20ma%20commande`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline"
                >
                  Suivi de commande sur WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* 4. BOUTIQUE PHYSIQUE & PAIEMENT */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              Atelier &amp; Livraison
            </h4>
            <ul className="space-y-2.5 text-stone-400">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                <span>{storeConfig.address}</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-brand-primary flex-shrink-0" />
                <a href={`tel:${storeConfig.phone}`} className="hover:text-white font-medium">
                  {storeConfig.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Ouvert {storeConfig.openingHours}</span>
              </li>
            </ul>

            <div className="pt-2">
              <div className="bg-stone-800/90 p-2.5 rounded-xl border border-stone-700/60 flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="text-white font-semibold">Paiement à la livraison (Cash)</span>
              </div>
            </div>
          </div>
        </div>

        {/* LIGNE INFÉRIEURE */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500 text-[11px]">
          <p>© {new Date().getFullYear()} Decowin. Tous droits réservés. L'Art d'Offrir, le Triomphe du Cœur.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/" className="hover:text-stone-300 transition-colors">
              Accueil
            </Link>
            <Link href="/catalogue" className="hover:text-stone-300 transition-colors">
              Catalogue
            </Link>
            <Link href="/a-propos" className="hover:text-stone-300 transition-colors">
              À Propos
            </Link>
            <Link href="/contact" className="hover:text-stone-300 transition-colors">
              Contact
            </Link>
            <Link href="/panier" className="hover:text-stone-300 transition-colors">
              Panier
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
