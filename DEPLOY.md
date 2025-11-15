# Guide de déploiement sur GitHub

## 1. Créer un nouveau repository sur GitHub

1. Allez sur https://github.com/new
2. Nom du repository : `chatbot-guide` (ou autre nom de votre choix)
3. Description : "Guide interactif des chatbots IA générative"
4. Public ou Private selon votre préférence
5. Ne cochez PAS "Add a README file" (on en a déjà un)
6. Cliquez sur "Create repository"

## 2. Pousser le code sur GitHub

Dans votre terminal, à la racine du dossier `chatbot-guide` :

```bash
git init
git add .
git commit -m "Initial commit: chatbot personality guide"
git branch -M main
git remote add origin https://github.com/VOTRE-USERNAME/chatbot-guide.git
git push -u origin main
```

Remplacez `VOTRE-USERNAME` par votre nom d'utilisateur GitHub.

## 3. Activer GitHub Pages

1. Sur votre repository GitHub, cliquez sur **Settings**
2. Dans le menu de gauche, cliquez sur **Pages**
3. Sous "Source", sélectionnez :
   - Branch: `main`
   - Folder: `/ (root)`
4. Cliquez sur **Save**

Après quelques secondes, votre site sera disponible à :
```
https://VOTRE-USERNAME.github.io/chatbot-guide/
```

## 4. Mettre à jour le README

Une fois déployé, éditez le README.md pour remplacer :
```markdown
[Voir la démo en ligne](#) *(à compléter après déploiement sur GitHub Pages)*
```

Par :
```markdown
[Voir la démo en ligne](https://VOTRE-USERNAME.github.io/chatbot-guide/)
```

Puis :
```bash
git add README.md
git commit -m "Update demo link"
git push
```

## Troubleshooting

**Les images ne s'affichent pas ?**
- Vérifiez que le dossier `assets/images/` est bien dans votre repository
- Les chemins dans le HTML doivent être `assets/images/nom-du-fichier.png` (sans `/` au début)

**Le site ne se charge pas ?**
- Attendez quelques minutes, GitHub Pages peut prendre du temps
- Vérifiez que GitHub Pages est bien activé dans Settings > Pages
- Vérifiez qu'il n'y a pas d'erreurs dans la console du navigateur (F12)

**Je veux un nom de domaine personnalisé ?**
- Dans Settings > Pages, vous pouvez ajouter un custom domain

## License

N'oubliez pas d'éditer le fichier LICENSE pour ajouter votre nom et l'année si vous le souhaitez.
