# 🎯 Configuration EmailJS - Tutoriel Visuel Simplifié

## 📝 Avant de commencer

Vous aurez besoin de :
- ✅ Un email (Gmail, Outlook, etc.)
- ✅ 10 minutes
- ✅ Ce projet ouvert dans VS Code

---

## 🚀 ÉTAPE 1 : Créer un compte EmailJS

### 1.1 Inscription
```
🌐 Allez sur : https://www.emailjs.com/
👆 Cliquez sur "Sign Up"
✍️ Remplissez : Email, Mot de passe
📧 Vérifiez votre email et confirmez
```

### 1.2 Premier login
```
🔑 Connectez-vous au dashboard
📍 URL : https://dashboard.emailjs.com/
```

---

## 📮 ÉTAPE 2 : Créer un Service Email

### 2.1 Navigation
```
Dashboard → Menu de gauche → "Email Services"
👆 Cliquez sur le bouton "Add New Service"
```

### 2.2 Choix du provider
```
Pour Gmail :
  ✅ Sélectionnez "Gmail"
  ✅ Cliquez "Connect Account"
  ✅ Autorisez EmailJS à accéder à Gmail
  ✅ Sélectionnez votre compte Gmail

Pour Outlook :
  ✅ Sélectionnez "Outlook.com"
  ✅ Suivez les mêmes étapes
```

### 2.3 Configuration du service
```
Service Name : "Gmail Service" (ou autre nom)
Service ID : service_xxxxxxx ← COPIEZ CE CODE !

👆 Cliquez "Create Service"
```

**💡 IMPORTANT : Notez votre Service ID quelque part !**

---

## 📝 ÉTAPE 3 : Créer un Template Email

### 3.1 Navigation
```
Dashboard → Menu de gauche → "Email Templates"
👆 Cliquez sur "Create New Template"
```

### 3.2 Configuration du template

#### Onglet "Settings" (Paramètres)
```
Template Name : "Contact Form"

To Email : votre-email@gmail.com ← L'email où vous recevrez les messages

From Name : {{from_name}}

From Email : (laisser par défaut)

Reply To : {{from_email}} ← Pour répondre directement
```

#### Onglet "Content" (Contenu)

**Sujet de l'email :**
```
[Portfolio] Nouveau message de {{from_name}}
```

**Corps du message (mode Text) :**
```
Bonjour,

Vous avez reçu un nouveau message depuis votre portfolio :

Nom: {{from_name}}
Email: {{from_email}}
Sujet: {{subject}}

Message:
{{message}}

---
Message envoyé depuis le formulaire de contact.
```

**OU** utilisez le template HTML dans `EMAILJS_TEMPLATE.md` (plus joli !)

### 3.3 Tester le template
```
👆 Cliquez sur "Test It"
✍️ Remplissez les champs de test
📧 Vérifiez que vous recevez l'email de test
```

### 3.4 Sauvegarder
```
👆 Cliquez "Save"
Template ID : template_xxxxxxx ← COPIEZ CE CODE !
```

**💡 IMPORTANT : Notez votre Template ID !**

---

## 🔑 ÉTAPE 4 : Obtenir la Public Key

### 4.1 Navigation
```
Dashboard → Menu de gauche → "Account"
Section "API Keys"
```

### 4.2 Copier la clé
```
Public Key : xxxxxxxxxxxx ← COPIEZ CE CODE !
```

Si vous n'en avez pas, cliquez sur "Create New Public Key"

**💡 IMPORTANT : Notez votre Public Key !**

---

## ⚙️ ÉTAPE 5 : Configurer le Projet

### 5.1 Ouvrir le fichier .env.local
```
📁 Fichier : .env.local
📍 Emplacement : Racine du projet
```

### 5.2 Remplacer les valeurs
```env
# AVANT (valeurs d'exemple)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# APRÈS (vos vraies valeurs)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc1234
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz5678
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abcDEF123ghiJKL
```

### 5.3 Sauvegarder
```
💾 Ctrl + S (Windows) ou Cmd + S (Mac)
```

---

## 🎮 ÉTAPE 6 : Tester

### 6.1 Redémarrer le serveur

**Terminal actuel :**
```bash
Ctrl + C (pour arrêter le serveur)
```

**Relancer :**
```bash
npm run dev
```

### 6.2 Tester le formulaire
```
🌐 Allez sur : http://localhost:3000
📜 Scrollez jusqu'à la section "Contact"

Remplissez :
  Nom : Test
  Email : test@example.com
  Sujet : Test EmailJS
  Message : Ceci est un test

👆 Cliquez "Envoyer"
```

### 6.3 Vérifications
```
✅ Le bouton affiche "Envoi en cours..."
✅ Message de succès "Message envoyé avec succès !"
✅ Le formulaire se réinitialise
✅ Vous recevez un email dans votre boîte mail
```

---

## ✅ CHECKLIST FINALE

- [ ] Compte EmailJS créé
- [ ] Service email connecté (Gmail/Outlook)
- [ ] Template email créé et testé
- [ ] Service ID copié
- [ ] Template ID copié
- [ ] Public Key copiée
- [ ] Fichier .env.local modifié avec les vraies valeurs
- [ ] Serveur redémarré
- [ ] Formulaire testé
- [ ] Email de test reçu

---

## 🎉 FÉLICITATIONS !

Votre formulaire de contact est maintenant fonctionnel !

### Ce qui se passe maintenant :
```
Visiteur remplit le formulaire
         ↓
EmailJS envoie l'email
         ↓
Vous recevez l'email
         ↓
Vous pouvez répondre directement
```

---

## 🔄 Pour déployer sur Vercel

### 1. Aller sur Vercel
```
🌐 https://vercel.com
📂 Votre projet → Settings → Environment Variables
```

### 2. Ajouter les 3 variables
```
Key: NEXT_PUBLIC_EMAILJS_SERVICE_ID
Value: service_abc1234

Key: NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
Value: template_xyz5678

Key: NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
Value: abcDEF123ghiJKL
```

### 3. Redéployer
```
👆 Deployments → Redeploy
```

---

## 🆘 Problèmes ?

### L'email n'arrive pas
```
1. Vérifiez vos spams/courrier indésirable
2. Dashboard EmailJS → Usage → Vérifiez l'historique
3. Testez directement le template dans le dashboard
```

### Erreur "Configuration manquante"
```
1. Vérifiez que .env.local contient les bonnes valeurs
2. Vérifiez qu'il n'y a pas d'espaces avant/après les valeurs
3. Redémarrez le serveur (Ctrl+C puis npm run dev)
```

### Autres problèmes
```
📖 Consultez : EMAILJS_TESTING.md
💬 Support EmailJS : https://www.emailjs.com/support/
```

---

**Bon développement ! 🚀**
