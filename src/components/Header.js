"use client";

import React, { useState } from "react";
import Link from "next/link";
import { storeConfig } from "@/data/storeConfig";
import { useCart } from "@/context/CartContext";
import { Phone, Mail, ShoppingBag, Search, Menu, X, Clock, Sparkles } from "lucide-react";

export default function Header({ searchQuery, setSearchQuery, onSelectCategory, selectedCategory }) {
  const { totalItemsCount, setIsCartOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpenMobile, setIsSearchOpenMobile] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-stone-100 transition-all">
      {/* 1. TOP BAR DESKTOP (Coordonnées & Réassurance) */}
      <div className="hidden md:block bg-stone-900 text-stone-300 text-xs py-2 px-4 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a
              href={`tel:${storeConfig.phone}`}
              className="flex items-center space-x-2 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-primary" />
              <span>{storeConfig.phone}</span>
            </a>
            <a
              href={`mailto:${storeConfig.email}`}
              className="flex items-center space-x-2 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand-primary" />
              <span>{storeConfig.email}</span>
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1 text-amber-400">
              <Clock className="w-3.5 h-3.5" />
              <span>Livraison 7j/7 sous 2h à Casablanca & 24h au Maroc</span>
            </span>
            <span className="text-stone-500">•</span>
            <span className="text-stone-300 font-medium">Paiement à la livraison (Cash)</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER (Logo, Search, Actions) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Menu Burger Mobile */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 -ml-2 rounded-lg text-stone-700 hover:text-brand-primary focus:outline-none"
              aria-label="Ouvrir le menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Bouton recherche mobile */}
            <button
              onClick={() => setIsSearchOpenMobile(!isSearchOpenMobile)}
              className="p-2 text-stone-700 hover:text-brand-primary ml-1"
              aria-label="Rechercher"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* LOGO */}
          <div className="flex-1 md:flex-initial text-center md:text-left">
            <Link href="/" className="inline-block group">
              <div className="flex flex-col items-center md:items-start">
                <span className="text-2xl md:text-3xl font-serif font-black tracking-tight text-stone-900 group-hover:text-brand-primary transition-colors">
                  DECO <span className="text-brand-primary font-normal">&amp;</span> MARC
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-stone-500 font-medium -mt-1">
                  Gifts &bull; Casablanca
                </span>
              </div>
            </Link>
          </div>

          {/* BARRE DE RECHERCHE DESKTOP */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery || ""}
                onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
                placeholder="Rechercher des fleurs, coffrets, chocolats..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-stone-200 bg-stone-50/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary text-sm transition-all"
              />
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5 pointer-events-none" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-3 text-xs text-stone-400 hover:text-stone-700"
                >
                  Effacer
                </button>
              )}
            </div>
          </div>

          {/* ACTIONS DROITE (Panier + WhatsApp Express) */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Bouton Commande WhatsApp Desktop */}
            <a
              href={`https://wa.me/${storeConfig.whatsappNumber}?text=Bonjour%20Deco%20%26%20Marc%20Gifts%2C%20je%20souhaite%20commander`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center space-x-2 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 px-3.5 py-2 rounded-full text-xs font-semibold border border-emerald-200 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>WhatsApp Direct</span>
            </a>

            {/* Bouton Panier */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 md:px-4 md:py-2.5 rounded-full bg-stone-100 hover:bg-brand-primary/10 text-stone-800 hover:text-brand-primary transition-all flex items-center space-x-2"
              aria-label="Voir mon panier"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5" />
                {totalItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-brand-primary text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-sm animate-bounce">
                    {totalItemsCount}
                  </span>
                )}
              </div>
              <span className="hidden md:inline-block text-xs font-semibold">
                Panier
              </span>
            </button>
          </div>
        </div>

        {/* BARRE DE RECHERCHE DÉROULANTE MOBILE */}
        {isSearchOpenMobile && (
          <div className="md:hidden pb-3 animate-fade-in">
            <div className="relative">
              <input
                type="text"
                value={searchQuery || ""}
                onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
                placeholder="Rechercher un coffret, bouquet, chocolat..."
                className="w-full pl-10 pr-10 py-2.5 rounded-full border border-stone-200 bg-stone-50 focus:bg-white text-sm focus:outline-none focus:border-brand-primary"
                autoFocus
              />
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-2.5 text-xs text-stone-500"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* 3. MENU DE NAVIGATION DESKTOP */}
      <nav className="hidden md:block bg-stone-50 border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-xs font-semibold tracking-wide uppercase text-stone-700">
          <div className="flex space-x-8 py-3">
            <Link
              href="/"
              className={`hover:text-brand-primary transition-colors ${
                !selectedCategory || selectedCategory === "all" ? "text-brand-primary font-bold" : ""
              }`}
              onClick={() => onSelectCategory && onSelectCategory("all")}
            >
              Accueil
            </Link>
            <button
              onClick={() => onSelectCategory && onSelectCategory("boites-fleurs")}
              className={`hover:text-brand-primary transition-colors ${
                selectedCategory === "boites-fleurs" ? "text-brand-primary font-bold" : ""
              }`}
            >
              Boîtes Fleurs &amp; Chocolats
            </button>
            <button
              onClick={() => onSelectCategory && onSelectCategory("bouquets")}
              className={`hover:text-brand-primary transition-colors ${
                selectedCategory === "bouquets" ? "text-brand-primary font-bold" : ""
              }`}
            >
              Bouquets Frais
            </button>
            <button
              onClick={() => onSelectCategory && onSelectCategory("mariage-fiancailles")}
              className={`hover:text-brand-primary transition-colors ${
                selectedCategory === "mariage-fiancailles" ? "text-brand-primary font-bold" : ""
              }`}
            >
              Packs Fiançailles &amp; Mariage
            </button>
            <button
              onClick={() => onSelectCategory && onSelectCategory("pour-elle")}
              className={`hover:text-brand-primary transition-colors ${
                selectedCategory === "pour-elle" ? "text-brand-primary font-bold" : ""
              }`}
            >
              Pour Elle
            </button>
            <button
              onClick={() => onSelectCategory && onSelectCategory("pour-lui")}
              className={`hover:text-brand-primary transition-colors ${
                selectedCategory === "pour-lui" ? "text-brand-primary font-bold" : ""
              }`}
            >
              Pour Lui
            </button>
            <button
              onClick={() => onSelectCategory && onSelectCategory("decoration-voiture")}
              className={`hover:text-brand-primary transition-colors ${
                selectedCategory === "decoration-voiture" ? "text-brand-primary font-bold" : ""
              }`}
            >
              Décoration Voiture
            </button>
          </div>

          <Link
            href="/catalogue"
            className="text-brand-primary hover:text-brand-primary-hover font-bold flex items-center space-x-1"
          >
            <span>Catalogue Complet</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </nav>

      {/* 4. MENU LATÉRAL DÉROULANT MOBILE (Tiroir Hamburger) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative w-4/5 max-w-sm bg-white h-full shadow-2xl z-10 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="p-4 border-b border-stone-100 flex items-center justify-between bg-stone-50">
                <div>
                  <span className="font-serif font-black text-xl text-stone-900">
                    DECO <span className="text-brand-primary">&amp;</span> MARC
                  </span>
                  <p className="text-[11px] text-stone-500">Boutique de fleurs &amp; cadeaux</p>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1 rounded-full text-stone-400 hover:text-stone-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-4 space-y-1">
                <p className="text-[11px] font-bold uppercase tracking-wider text-stone-400 px-3 pb-2">
                  Nos Collections
                </p>
                <button
                  onClick={() => {
                    onSelectCategory && onSelectCategory("all");
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-stone-800 hover:bg-brand-primary/10 hover:text-brand-primary"
                >
                  🌸 Tous nos produits
                </button>
                <button
                  onClick={() => {
                    onSelectCategory && onSelectCategory("boites-fleurs");
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-stone-800 hover:bg-brand-primary/10 hover:text-brand-primary flex items-center justify-between"
                >
                  <span>🎁 Boîtes Fleurs &amp; Chocolats</span>
                  <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-bold">
                    Top Vente
                  </span>
                </button>
                <button
                  onClick={() => {
                    onSelectCategory && onSelectCategory("bouquets");
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-stone-800 hover:bg-brand-primary/10 hover:text-brand-primary"
                >
                  💐 Bouquets de Fleurs Fraîches
                </button>
                <button
                  onClick={() => {
                    onSelectCategory && onSelectCategory("mariage-fiancailles");
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-stone-800 hover:bg-brand-primary/10 hover:text-brand-primary flex items-center justify-between"
                >
                  <span>💍 Packs Fiançailles &amp; Mariage</span>
                  <span className="text-[10px] bg-rose-100 text-brand-primary px-2 py-0.5 rounded-full font-bold">
                    VIP
                  </span>
                </button>
                <button
                  onClick={() => {
                    onSelectCategory && onSelectCategory("pour-elle");
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-stone-800 hover:bg-brand-primary/10 hover:text-brand-primary"
                >
                  🎀 Cadeaux Pour Elle
                </button>
                <button
                  onClick={() => {
                    onSelectCategory && onSelectCategory("pour-lui");
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-stone-800 hover:bg-brand-primary/10 hover:text-brand-primary"
                >
                  👔 Cadeaux Pour Lui
                </button>
                <button
                  onClick={() => {
                    onSelectCategory && onSelectCategory("decoration-voiture");
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-stone-800 hover:bg-brand-primary/10 hover:text-brand-primary"
                >
                  🚗 Décoration Voiture de Mariage
                </button>

                <div className="pt-4 border-t border-stone-100">
                  <Link
                    href="/catalogue"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center py-2.5 rounded-xl bg-stone-900 text-white text-xs font-bold uppercase tracking-wider"
                  >
                    Voir tout le catalogue
                  </Link>
                </div>
              </div>
            </div>

            {/* Bas du tiroir mobile : contact direct */}
            <div className="p-4 bg-stone-50 border-t border-stone-100 space-y-3">
              <a
                href={`tel:${storeConfig.phone}`}
                className="flex items-center space-x-3 text-stone-800 text-xs font-medium"
              >
                <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-brand-primary">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-stone-500">Service client téléphonique</p>
                  <p className="font-bold">{storeConfig.phone}</p>
                </div>
              </a>

              <a
                href={`https://wa.me/${storeConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md transition-colors"
              >
                <span>Commander sur WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
