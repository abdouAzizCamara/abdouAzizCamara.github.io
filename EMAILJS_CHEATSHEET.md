# 📌 EmailJS - Aide-Mémoire Rapide

## 🔑 Mes Identifiants EmailJS

### Service Email
```
Service ID: ___________________
Provider: [ ] Gmail  [ ] Outlook  [ ] Autre: _______
```

### Template Email
```
Template ID: ___________________
To Email: ___________________
```

### API Key
```
Public Key: ___________________
```

---

## ⚡ Commandes Rapides

### Démarrer le projet
```bash
npm run dev
```

### Redémarrer après modification .env.local
```bash
# Terminal : Ctrl + C
npm run dev
```

### Tester le build
```bash
npm run build
npm start
```

---

## 📝 Checklist de Configuration

### Compte EmailJS
- [ ] Compte créé sur emailjs.com
- [ ] Email confirmé
- [ ] Accès au dashboard

### Service Email
- [ ] Service créé (Gmail/Outlook)
- [ ] Compte email connecté
- [ ] Service ID copié
- [ ] Status "Connected" ✅

### Template Email
- [ ] Template créé
- [ ] Template ID copié
- [ ] "To Email" configuré (votre email)
- [ ] Template testé avec "Test It"
- [ ] Email de test reçu ✅

### Projet
- [ ] Package @emailjs/browser installé
- [ ] Fichier .env.local créé
- [ ] Service ID ajouté dans .env.local
- [ ] Template ID ajouté dans .env.local
- [ ] Public Key ajoutée dans .env.local
- [ ] Serveur redémarré
- [ ] Formulaire testé en local
- [ ] Email reçu depuis le formulaire ✅

### Déploiement
- [ ] Variables ajoutées sur Vercel
- [ ] Projet redéployé
- [ ] Formulaire testé en production
- [ ] Email reçu depuis la production ✅

---

## 🔗 Liens Utiles

| Ressource | URL |
|-----------|-----|
| Dashboard EmailJS | https://dashboard.emailjs.com/ |
| Documentation | https://www.emailjs.com/docs/ |
| Support | https://www.emailjs.com/support/ |
| Mon Portfolio (local) | http://localhost:3000 |
| Vercel Dashboard | https://vercel.com/dashboard |

---

## 🐛 Codes d'Erreur Rapides

| Code | Problème | Solution |
|------|----------|----------|
| 401 | Public Key incorrecte | Vérifier la clé dans Account → API Keys |
| 400 | Service/Template ID incorrect | Vérifier les IDs dans le dashboard |
| 412 | Service offline | Reconnecter le service email |
| Config manquante | Variables non chargées | Redémarrer le serveur |

---

## 📞 Template Variables

Variables disponibles dans le template :

```
{{from_name}}      → Nom de l'expéditeur
{{from_email}}     → Email de l'expéditeur
{{subject}}        → Sujet du message
{{message}}        → Contenu du message
{{to_name}}        → Votre nom
```

---

## ⚙️ Variables d'Environnement

### Format du fichier .env.local
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxx
```

⚠️ **Important** :
- Pas d'espaces autour du `=`
- Pas de guillemets
- Préfixe `NEXT_PUBLIC_` obligatoire
- Redémarrer le serveur après modification

---

## 🎯 Test Rapide

### 1. Vérifier les variables
Ouvrez la console navigateur (F12) et tapez :
```javascript
console.log(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID)
console.log(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID)
console.log(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
```

Si ça affiche `undefined` → Variables non chargées

### 2. Tester le formulaire
```
1. Remplir le formulaire
2. Cliquer "Envoyer"
3. Vérifier le message de succès
4. Vérifier l'email reçu
```

---

## 📊 Monitoring

### Voir les emails envoyés
```
Dashboard → Usage → View Details
```

### Vérifier les quotas
```
Dashboard → Account → Quota
Gratuit : 200 emails/mois
```

---

## 🚀 Déploiement Vercel

### Ajouter les variables
```
1. Vercel Dashboard
2. Votre projet → Settings
3. Environment Variables
4. Add → Name + Value
5. Redeploy
```

### Vérifier le déploiement
```
1. Aller sur votre site en production
2. Tester le formulaire
3. Vérifier l'email reçu
```

---

## 💡 Astuces

### Email n'arrive pas
```
✓ Vérifier les spams
✓ Vérifier Dashboard → Usage
✓ Tester le template directement
✓ Vérifier "To Email" dans le template
```

### Formulaire ne s'envoie pas
```
✓ Console navigateur (F12) pour les erreurs
✓ Vérifier les variables d'environnement
✓ Redémarrer le serveur
✓ Vérifier que le service est "Connected"
```

### Modifier le template
```
Dashboard → Email Templates → Edit
Pas besoin de redéployer l'app !
```

---

## 📞 Support

### Documentation complète
- `EMAILJS_SETUP.md` - Guide complet
- `EMAILJS_QUICKSTART.md` - Démarrage rapide
- `EMAILJS_TUTORIAL.md` - Tutoriel pas à pas
- `EMAILJS_TESTING.md` - Tests et débogage
- `EMAILJS_TEMPLATE.md` - Template HTML

### Communauté
- Support EmailJS : https://www.emailjs.com/support/
- GitHub Issues : [Créer une issue](https://github.com/abdouAzizCamara/abdouAzizCamara.github.io/issues)

---

**📅 Dernière mise à jour** : 22 octobre 2025
**✅ Statut** : Configuration complète

---

💡 **Conseil** : Imprimez ou gardez cette page ouverte pendant la configuration !
