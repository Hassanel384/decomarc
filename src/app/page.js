"use client";

import React, { useState, useMemo } from "react";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import CategorySlider from "@/components/CategorySlider";
import ProductCard from "@/components/ProductCard";
import TrustBadges from "@/components/TrustBadges";
import CityCoverage from "@/components/CityCoverage";
import CustomerReviews from "@/components/CustomerReviews";
import Footer from "@/components/Footer";
import { products, categories } from "@/data/products";
import { Sparkles, ArrowRight, Heart, Gift, PhoneCall } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filtrage dynamique selon la catégorie et le terme de recherche
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchCategory = selectedCategory === "all" || item.category === selectedCategory;
      const matchSearch =
        !searchQuery ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const activeCategoryObj = categories.find((c) => c.id === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      {/* 1. EN-TÊTE PRINCIPAL */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* 2. HERO CAROUSEL */}
      <HeroSlider />

      {/* 3. STORIES / SLIDER DE CATÉGORIES TACTILE */}
      <CategorySlider
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* 4. GRILLE DES PRODUITS & FILTRES */}
      <main id="catalogue" className="flex-1 py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Titre de section et état de filtrage */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 border-b border-stone-200/80 pb-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                Créations Florales &amp; Gourmandes
              </span>
              {filteredProducts.length > 0 && (
                <span className="text-[11px] font-bold bg-stone-100 text-stone-600 px-2.5 py-0.5 rounded-full">
                  {filteredProducts.length} créations
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">
              {searchQuery
                ? `Résultats pour "${searchQuery}"`
                : activeCategoryObj?.name || "Toutes nos créations"}
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              {activeCategoryObj?.description ||
                "Sélectionnez vos bouquets, coffrets cadeaux ou contactez notre artisan sur WhatsApp pour du sur-mesure."}
            </p>
          </div>

          {/* Bouton réinitialiser si filtre actif */}
          {(selectedCategory !== "all" || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="mt-3 sm:mt-0 text-xs text-brand-primary font-bold hover:underline flex items-center space-x-1"
            >
              <span>Afficher toutes les catégories</span>
              <span>&times;</span>
            </button>
          )}
        </div>

        {/* GRILLE PRODUITS */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center bg-white rounded-3xl border border-stone-200 p-8">
            <Gift className="w-12 h-12 text-stone-300 mx-auto mb-3" />
            <h3 className="text-lg font-serif font-semibold text-stone-800">
              Aucun produit ne correspond à votre recherche
            </h3>
            <p className="text-xs text-stone-500 max-w-sm mx-auto mt-1">
              Essayez un autre mot-clé ou réinitialisez les filtres pour voir nos coffrets phares.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="mt-4 px-6 py-2.5 rounded-full bg-brand-primary text-white text-xs font-bold uppercase tracking-wider"
            >
              Voir tout le catalogue
            </button>
          </div>
        )}

        {/* 5. BANNIÈRE PROMO & COMMANDE SUR-MESURE */}
        <section className="mt-12 sm:mt-16 rounded-3xl overflow-hidden relative bg-stone-900 text-white shadow-xl">
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#d25d5d_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative p-6 sm:p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-3 text-center md:text-left max-w-xl">
              <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-amber-400 text-stone-900 text-[10px] font-black uppercase tracking-wider">
                <Sparkles className="w-3 h-3" />
                <span>Service Sur-Mesure Événements</span>
              </span>
              <h3 className="text-xl sm:text-3xl font-serif font-bold text-white leading-tight">
                Un Événement, Fiançailles ou Demande en Mariage ?
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                Nos maîtres fleuristes créent pour vous des arrangements personnalisés d'exception : bouquets XXL, décoration florale de salle, voiture de mariée et coffrets gravés.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <a
                href="https://wa.me/212674971315?text=Bonjour%20Deco%20%26%20Marc%2C%20j%27ai%20un%20%C3%A9v%C3%A9nement%20sp%C3%A9cial%20et%20je%20souhaite%20un%20devis%20sur-mesure"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1ebd56] text-white text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center space-x-2 shadow-lg transition-transform hover:scale-105"
              >
                <span>Discuter de mon projet</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+212674971315"
                className="w-full sm:w-auto px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold border border-white/20 flex items-center justify-center space-x-2 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-brand-primary" />
                <span>Appel direct</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 6. RÉASSURANCE & AVANTAGES */}
      <TrustBadges />

      {/* 7. COUVERTURE DES VILLES AU MAROC */}
      <CityCoverage />

      {/* 8. AVIS CLIENTS & TÉMOIGNAGES */}
      <CustomerReviews />

      {/* 9. PIED DE PAGE COMPLET */}
      <Footer />
    </div>
  );
}
