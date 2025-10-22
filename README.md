# 🚀 Portfolio - Abdou Aziz

Portfolio personnel moderne construit avec Next.js 14, TypeScript, Tailwind CSS et Framer Motion.

## ✨ Fonctionnalités

- 🎨 Design moderne avec animations fluides
- 🌐 Support multilingue (Français/Anglais)
- 📱 Fully responsive
- 📧 Formulaire de contact avec EmailJS
- 🎭 Thème sombre élégant
- ⚡ Optimisé pour les performances
- 🎯 SEO friendly

## 🛠️ Technologies

- **Framework** : Next.js 14
- **Language** : TypeScript
- **Styling** : Tailwind CSS
- **Animations** : Framer Motion
- **Icons** : React Icons, Tabler Icons
- **3D** : Three.js
- **Email** : EmailJS
- **Deployment** : Vercel

## 📦 Installation

```bash
# Cloner le repository
git clone https://github.com/abdouAzizCamara/abdouAzizCamara.github.io.git

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📧 Configuration EmailJS

Le formulaire de contact utilise EmailJS pour l'envoi d'emails.

### Configuration rapide (5 minutes)
📖 Voir : [EMAILJS_QUICKSTART.md](./EMAILJS_QUICKSTART.md)

### Configuration complète
📖 Voir : [EMAILJS_SETUP.md](./EMAILJS_SETUP.md)

### Tutoriel pas à pas
📖 Voir : [EMAILJS_TUTORIAL.md](./EMAILJS_TUTORIAL.md)

### Fichiers de configuration
```
.env.local              # Variables d'environnement (à créer)
.env.example           # Exemple de configuration
EMAILJS_README.md      # Récapitulatif complet
EMAILJS_TEMPLATE.md    # Template HTML EmailJS
EMAILJS_TESTING.md     # Guide de test et débogage
```

## 🚀 Déploiement

### Vercel (Recommandé)

```bash
# Installer Vercel CLI
npm install -g vercel

# Déployer
npm run deploy
```

N'oubliez pas d'ajouter les variables d'environnement dans Vercel :
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

## 📂 Structure du projet

```
portfolio-main/
├── app/                      # Pages Next.js 14 (App Router)
│   ├── page.tsx             # Page d'accueil
│   ├── layout.tsx           # Layout principal
│   ├── globals.css          # Styles globaux
│   └── provider.tsx         # Providers (i18n, etc.)
├── components/              # Composants React
│   ├── Contact.tsx          # Formulaire de contact
│   ├── Hero.tsx            # Section Hero
│   ├── Projects.tsx        # Projets
│   ├── Experience.tsx      # Expérience professionnelle
│   ├── Education.tsx       # Formation
│   └── ui/                 # Composants UI réutilisables
├── data/                   # Données statiques
│   └── index.ts           # Données du portfolio
├── lib/                   # Utilitaires
│   ├── i18n.tsx          # Configuration i18n
│   └── utils.ts          # Fonctions utilitaires
├── public/               # Assets statiques
│   ├── locales/         # Traductions
│   │   ├── en.json
│   │   └── fr.json
│   └── technologies/    # Images des technologies
└── .env.local          # Variables d'environnement (à créer)
```

## 🌍 Internationalisation

Le site supporte le français et l'anglais.

Les traductions se trouvent dans :
- `public/locales/fr.json`
- `public/locales/en.json`

## 🎨 Personnalisation

### Modifier les informations personnelles
Éditez `data/index.ts`

### Modifier les couleurs
Éditez `tailwind.config.ts`

### Ajouter/modifier des sections
Créez un nouveau composant dans `components/` et importez-le dans `app/page.tsx`

## 📝 Scripts disponibles

```bash
# Développement
npm run dev

# Build production
npm run build

# Démarrer en production
npm start

# Linter
npm run lint

# Déployer sur Vercel
npm run deploy
```

## 🐛 Débogage

### Problèmes courants

#### Le serveur ne démarre pas
```bash
# Nettoyer et réinstaller
rm -rf node_modules package-lock.json
npm install
```

#### Les emails ne s'envoient pas
📖 Consultez [EMAILJS_TESTING.md](./EMAILJS_TESTING.md)

#### Erreurs de build
```bash
# Vérifier les erreurs TypeScript
npm run lint
```

## 📊 Performance

- ✅ Score Lighthouse : 90+
- ✅ First Contentful Paint : < 1.5s
- ✅ Time to Interactive : < 3s
- ✅ Cumulative Layout Shift : < 0.1

## 🤝 Contribution

Les contributions sont les bienvenues !

1. Fork le projet
2. Créez votre branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT.

## 👤 Auteur

**Abdou Aziz Camara**

- Email : aambengue13@gmail.com
- Téléphone : +221 70 706 61 75
- Localisation : Dakar, Sénégal

## 🙏 Remerciements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [EmailJS](https://www.emailjs.com/)
- [Vercel](https://vercel.com/)

---

Fait avec ❤️ par Abdou Aziz Camara
