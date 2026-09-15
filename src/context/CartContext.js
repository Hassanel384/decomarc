"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { storeConfig } from "@/data/storeConfig";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(storeConfig.cities[0]);
  const [selectedProductForModal, setSelectedProductForModal] = useState(null);

  // Charger le panier depuis le localStorage au démarrage
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("decomarc_cart");
      if (savedCart) {
        setItems(JSON.parse(savedCart));
      }
    } catch (e) {
      console.error("Erreur lors de la récupération du panier:", e);
    }
  }, []);

  // Sauvegarder le panier à chaque modification
  useEffect(() => {
    try {
      localStorage.setItem("decomarc_cart", JSON.stringify(items));
    } catch (e) {
      console.error("Erreur de sauvegarde du panier:", e);
    }
  }, [items]);

  const addToCart = (product, quantity = 1, options = {}) => {
    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const newItems = [...prevItems];
        newItems[existingIndex].quantity += quantity;
        if (options.customMessage) newItems[existingIndex].customMessage = options.customMessage;
        if (options.deliveryDate) newItems[existingIndex].deliveryDate = options.deliveryDate;
        return newItems;
      } else {
        return [
          ...prevItems,
          {
            product,
            quantity,
            customMessage: options.customMessage || "",
            deliveryDate: options.deliveryDate || "",
          },
        ];
      }
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const deliveryFee = items.length > 0 ? (selectedCity?.deliveryFee ?? 30) : 0;
  const total = subtotal + deliveryFee;

  // Génération du lien de commande WhatsApp en 1 clic
  const generateWhatsAppCheckoutLink = (customerInfo = {}) => {
    if (items.length === 0) return `https://wa.me/${storeConfig.whatsappNumber}`;

    let msg = `Bonjour *Deco & Marc Gifts* ! 👋\n`;
    msg += `Je souhaite passer une commande depuis votre site web :\n\n`;
    msg += `🛍️ *DÉTAIL DE MA COMMANDE :*\n`;

    items.forEach((item, index) => {
      msg += `• ${item.quantity}x *${item.product.name}* — ${item.product.price * item.quantity} Dhs\n`;
      if (item.deliveryDate) msg += `  📅 Date souhaitée : ${item.deliveryDate}\n`;
      if (item.customMessage) msg += `  💌 Mot pour la carte : "${item.customMessage}"\n`;
    });

    msg += `\n📍 *Ville de livraison :* ${selectedCity.name} (${deliveryFee} Dhs)\n`;
    msg += `💰 *TOTAL À PAYER :* *${total} Dhs* (Paiement à la livraison)\n\n`;

    if (customerInfo.name || customerInfo.phone || customerInfo.address) {
      msg += `👤 *MES COORDONNÉES :*\n`;
      if (customerInfo.name) msg += `• Nom : ${customerInfo.name}\n`;
      if (customerInfo.phone) msg += `• Téléphone : ${customerInfo.phone}\n`;
      if (customerInfo.address) msg += `• Adresse précise : ${customerInfo.address}\n`;
    }

    msg += `\nMerci de me confirmer la prise en charge de ma commande ! 🌸`;

    return `https://wa.me/${storeConfig.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  // Commande directe d'un seul produit via WhatsApp (1 clic depuis la fiche produit)
  const generateDirectProductWhatsAppLink = (product, quantity = 1, options = {}) => {
    let msg = `Bonjour *Deco & Marc Gifts* ! 👋\n\n`;
    msg += `Je souhaite commander cet article vu sur votre site web :\n`;
    msg += `🎁 *${product.name}*\n`;
    msg += `💵 *Prix :* ${product.price} Dhs (Quantité : ${quantity})\n`;
    if (options.deliveryDate) msg += `📅 *Date de livraison souhaitée :* ${options.deliveryDate}\n`;
    if (options.city) msg += `📍 *Ville :* ${options.city}\n`;
    if (options.customMessage) msg += `💌 *Mot pour la carte offerte :* "${options.customMessage}"\n`;
    msg += `\nPouvez-vous m'indiquer la disponibilité et les modalités de livraison ? Merci ! ✨`;

    return `https://wa.me/${storeConfig.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        selectedCity,
        setSelectedCity,
        subtotal,
        deliveryFee,
        total,
        totalItemsCount,
        generateWhatsAppCheckoutLink,
        generateDirectProductWhatsAppLink,
        selectedProductForModal,
        setSelectedProductForModal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
