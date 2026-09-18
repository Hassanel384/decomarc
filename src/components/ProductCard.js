"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { storeConfig } from "@/data/storeConfig";
import { ShoppingBag, Star, MessageCircle, Eye } from "lucide-react";

export default function ProductCard({ product }) {
  const { addToCart, generateDirectProductWhatsAppLink, setSelectedProductForModal } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsAdding(true);
    addToCart(product, 1);
    setTimeout(() => setIsAdding(false), 800);
  };

  const handleQuickWhatsApp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const link = generateDirectProductWhatsAppLink(product, 1);
    window.open(link, "_blank");
  };

  const handleQuickView = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setSelectedProductForModal(product);
  };

  const productUrl = `/produit/${product.slug || product.id}`;

  return (
    <div className="group bg-white rounded-2xl border border-stone-100 overflow-hidden shadow-subtle hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      {/* 1. ZONE IMAGE & BADGES */}
      <Link
        href={productUrl}
        className="relative w-full aspect-square overflow-hidden bg-stone-100 block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image principale */}
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className={`object-cover transition-opacity duration-500 ${
            isHovered && product.secondaryImage
              ? "opacity-0"
              : "opacity-100 group-hover:scale-105 transition-transform duration-500"
          }`}
        />

        {/* Image secondaire au survol */}
        {product.secondaryImage && (
          <Image
            src={product.secondaryImage}
            alt={`${product.name} vue alternative`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className={`object-cover transition-all duration-500 ${
              isHovered ? "opacity-100 scale-105" : "opacity-0"
            }`}
          />
        )}

        {/* Badge Flottant */}
        {product.badge && (
          <div className="absolute top-2.5 left-2.5 z-10">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-stone-900/90 backdrop-blur-md text-amber-300 px-2.5 py-1 rounded-full shadow-sm">
              {product.badge}
            </span>
          </div>
        )}

        {/* Bouton Aperçu Rapide */}
        <button
          onClick={handleQuickView}
          className="hidden sm:flex absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 items-center justify-center transition-opacity z-10"
        >
          <span className="bg-white/95 text-stone-900 text-xs font-bold px-3 py-1.5 rounded-full shadow flex items-center space-x-1 transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Eye className="w-3.5 h-3.5" />
            <span>Aperçu rapide</span>
          </span>
        </button>
      </Link>

      {/* 2. ZONE INFORMATIONS */}
      <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Note étoiles */}
          <div className="flex items-center space-x-1 mb-1">
            <div className="flex text-amber-400">
              <Star className="w-3 h-3 fill-amber-400" />
            </div>
            <span className="text-[11px] font-semibold text-stone-700">{product.rating}</span>
            <span className="text-[10px] text-stone-400">({product.reviewsCount})</span>
          </div>

          {/* Titre du produit */}
          <Link href={productUrl}>
            <h3 className="text-xs sm:text-sm font-medium text-stone-900 group-hover:text-brand-primary transition-colors line-clamp-2 leading-snug">
              {product.name}
            </h3>
          </Link>
        </div>

        {/* PRIX ET ACTIONS */}
        <div className="mt-3 pt-2.5 border-t border-stone-100 flex flex-col space-y-2.5">
          {/* Ligne Prix */}
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline space-x-1.5">
              <span className="text-sm sm:text-base font-bold text-stone-900">
                {product.price} <span className="text-xs font-normal text-stone-600">{storeConfig.currency}</span>
              </span>
              {product.oldPrice && (
                <span className="text-[11px] text-stone-400 line-through">
                  {product.oldPrice} {storeConfig.currency}
                </span>
              )}
            </div>
            <span className="text-[10px] text-emerald-700 font-medium bg-emerald-50 px-1.5 py-0.5 rounded">
              Dispo 24h
            </span>
          </div>

          {/* BOUTONS D'ACHAT */}
          <div className="grid grid-cols-2 gap-1.5">
            {/* 1. Bouton Panier */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-2 px-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all flex items-center justify-center space-x-1 shadow-sm ${
                isAdding
                  ? "bg-emerald-600 text-white"
                  : "bg-brand-primary hover:bg-brand-primary-hover text-white"
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>{isAdding ? "Ajouté !" : "Panier"}</span>
            </button>

            {/* 2. Bouton Commande Directe WhatsApp */}
            <button
              onClick={handleQuickWhatsApp}
              className="w-full py-2 px-2 rounded-xl text-[11px] sm:text-xs font-bold bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition-colors flex items-center justify-center space-x-1"
              title="Commander directement sur WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
