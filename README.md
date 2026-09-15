# 🌸 Deco & Marc Gifts — E-Commerce Next.js & React

Boutique en ligne haut de gamme de fleurs fraîches, boîtes avec chocolats belges et coffrets de mariage/fiançailles au Maroc, inspirée de **[decomarcgifts.com](https://decomarcgifts.com/)**.

Développée avec **Next.js 14 (App Router)**, **Tailwind CSS** et **Lucide React**, conçue pour offrir une **expérience mobile-first ultra-fluide**, une **commande en 1 clic via WhatsApp** et un déploiement instantané sur **Vercel**.

---

## ✨ Fonctionnalités Clés

### 📱 1. Expérience Mobile-First & Simplicité
* **Sticky Bottom Navigation (Barre tactile inférieure)** :
  * 🏠 **Accueil**
  * 🛍️ **Catalogue**
  * 🛒 **Panier** avec compteur dynamique en temps réel
  * 💬 **WhatsApp 1 Clic** avec bouton d'action directe
* **Stories / Slider de Catégories tactile** : navigation horizontale sans rechargement de page.
* **Bouton WhatsApp flottant** avec message d'accueil personnalisé ("En direct").
* **Cart Drawer (Tiroir Panier)** coulissant et accessible d'une seule main.

### 🛍️ 2. Double Tunnel de Commande Sans Friction
1. **Commande directe WhatsApp en 1 Clic** :
   * Génère automatiquement un message prêt à l'envoi avec le nom de l'article, la quantité, le prix en Dhs, la date de livraison souhaitée, la ville et le mot personnalisé de la carte cadeau.
2. **Formulaire Express 1 Page (Cash on Delivery)** :
   * Nom, téléphone et adresse précise sans besoin de créer de compte ou de mot de passe.
   * Calcul automatique des frais de livraison selon la ville (Casablanca, Rabat, Marrakech, Tanger, etc.).

### 🌹 3. Catalogue Réel & Personnalisation
* **Boîtes Fleurs & Chocolat Belge** (Bestsellers signature 870g, 310g, etc.).
* **Packs Fiançailles & Mariage** avec présentoirs royaux pour bagues et parures.
* **Bouquets de Roses Rouges Fraîches d'Équateur**.
* **Décoration Florale de Voitures de Mariage**.
* **Carte de vœux manuscrite offerte** avec saisie de texte personnalisé.
* **Sélecteur de date de livraison souhaitée**.

---

## 🚀 Déploiement Facile sur Vercel (Comme pour votre Portfolio)

Comme vous l'avez déjà réalisé avec succès pour votre portfolio :

### Étape 1 : Créer un dépôt sur GitHub
1. Rendez-vous sur votre compte GitHub [github.com](https://github.com/).
2. Créez un nouveau dépôt public ou privé (ex: `decomarc-gifts`).
3. Dans le terminal de ce dossier, exécutez :
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Deco & Marc Gifts e-commerce Next.js"
   git branch -M main
   git remote add origin https://github.com/VOTRE_PSEUDO/decomarc-gifts.git
   git push -u origin main
   ```

### Étape 2 : Connecter à Vercel
1. Rendez-vous sur [vercel.com](https://vercel.com).
2. Cliquez sur **"Add New..."** &gt; **"Project"**.
3. Sélectionnez votre dépôt GitHub `decomarc-gifts`.
4. Vercel détecte automatiquement Next.js. Cliquez sur **"Deploy"**.
5. Votre site sera en ligne en moins de 60 secondes avec HTTPS gratuit !

---

## 🛠️ Développement Local (Optionnel)

Si vous souhaitez exécuter le projet en local sur votre machine :
```bash
npm install
npm run dev
```
Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

---

## 📍 Configuration de la Boutique

Toutes les coordonnées et paramètres sont modifiables dans `src/data/storeConfig.js` :
* Numéro WhatsApp : `212674971315`
* Téléphone : `(+212) 674-971315`
* Email : `contact@decomarcgifts.com`
* Villes et frais de livraison configurables.
