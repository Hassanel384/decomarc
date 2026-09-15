"use client";

import React from "react";
import Link from "next/link";
import { storeConfig } from "@/data/storeConfig";
import { Phone, Mail, MapPin, Clock, Heart, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-12 pb-24 md:pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* 1. PRÉSENTATION DE LA MARQUE */}
          <div className="space-y-4">
            <div>
              <span className="text-2xl font-serif font-black text-white tracking-tight">
                DECO <span className="text-brand-primary">&amp;</span> MARC
              </span>
              <p className="text-[11px] uppercase tracking-[0.25em] text-stone-400 mt-0.5">
                Gifts &bull; Casablanca
              </p>
            </div>
            <p className="text-stone-400 leading-relaxed text-xs">
              L'élégance au plus que parfait. Fleuriste créateur et maître chocolatier spécialisé dans les compositions florales d'exception, coffrets prestigieux et livraisons express au Maroc.
            </p>
            <div className="flex items-center space-x-2 text-amber-400 font-semibold text-xs">
              <ShieldCheck className="w-4 h-4" />
              <span>Garantie fraîcheur &amp; livraison sous 24h</span>
            </div>
          </div>

          {/* 2. CATÉGORIES POPULAIRES */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              Nos Collections
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <Link href="/catalogue" className="hover:text-brand-primary transition-colors">
                  Boîtes Fleurs &amp; Chocolats Belges
                </Link>
              </li>
              <li>
                <Link href="/catalogue" className="hover:text-brand-primary transition-colors">
                  Bouquets de Roses Fraîches
                </Link>
              </li>
              <li>
                <Link href="/catalogue" className="hover:text-brand-primary transition-colors">
                  Packs Fiançailles &amp; Mariage
                </Link>
              </li>
              <li>
                <Link href="/catalogue" className="hover:text-brand-primary transition-colors">
                  Cadeaux Pour Elle &amp; Pour Lui
                </Link>
              </li>
              <li>
                <Link href="/catalogue" className="hover:text-brand-primary transition-colors">
                  Décoration Florale &amp; Voiture
                </Link>
              </li>
              <li>
                <Link href="/catalogue" className="hover:text-brand-primary transition-colors">
                  Chocolats Fins Patchi &amp; Ferrero
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. COORDONNÉES & ATELIER */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              Boutique &amp; Contact
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
                <Mail className="w-4 h-4 text-brand-primary flex-shrink-0" />
                <a href={`mailto:${storeConfig.email}`} className="hover:text-white">
                  {storeConfig.email}
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Ouvert {storeConfig.openingHours}</span>
              </li>
            </ul>
          </div>

          {/* 4. PAIEMENT & LIVRAISON */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              Paiement Sécurisé
            </h4>
            <p className="text-stone-400 text-xs leading-relaxed">
              Nous facilitons vos achats avec les options les plus sûres et appréciées au Maroc :
            </p>
            <div className="space-y-2 pt-1">
              <div className="bg-stone-800/80 p-2.5 rounded-xl border border-stone-700/60 flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="text-white font-semibold">Paiement à la livraison (Cash)</span>
              </div>
              <div className="bg-stone-800/80 p-2.5 rounded-xl border border-stone-700/60 flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span className="text-stone-300">Virement bancaire / Carte CMI</span>
              </div>
            </div>
          </div>
        </div>

        {/* LIGNE INFÉRIEURE */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500 text-[11px]">
          <p>© {new Date().getFullYear()} Deco &amp; Marc Gifts. Tous droits réservés.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/" className="hover:text-stone-300 transition-colors">
              Accueil
            </Link>
            <Link href="/catalogue" className="hover:text-stone-300 transition-colors">
              Catalogue
            </Link>
            <a
              href={`https://wa.me/${storeConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              Support WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
