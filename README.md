# Portfolio — Teikinui Decian

Portfolio personnel construit avec React et Vite. Il présente mon profil, mes compétences, mon parcours, mes projets et les moyens de me contacter.

**Portfolio en ligne :** [https://teikinui.github.io/portfolio/](https://teikinui.github.io/portfolio/)

## Prérequis

- [Git](https://git-scm.com/downloads) pour cloner le dépôt.
- [Node.js](https://nodejs.org/) avec npm. Une version LTS récente est recommandée.

Vérifier les installations dans un terminal :

```bash
git --version
node --version
npm --version
```

## Télécharger le projet

Cloner le dépôt GitHub, puis entrer dans le dossier créé :

```bash
git clone https://github.com/Teikinui/portfolio.git
cd portfolio
```

Pour récupérer plus tard les dernières modifications du dépôt :

```bash
git pull
```

## Installer et démarrer le portfolio

Depuis le dossier `portfolio`, installer les dépendances :

```bash
npm install
```

Démarrer ensuite le serveur de développement :

```bash
npm run dev
```

Ouvrir dans le navigateur l’adresse affichée par Vite, généralement [http://localhost:5173/portfolio/](http://localhost:5173/portfolio/). Laisser le terminal ouvert pendant le développement ; arrêter le serveur avec `Ctrl+C`.

Après le premier `npm install`, les démarrages suivants nécessitent uniquement `npm run dev`.

## Vérifications

```bash
npm run lint
npm run build
```

## Fonctionnement

- Page à sections, navigation sticky et menu mobile ; les anciennes routes React redirigent vers leur section. Le préfixe Vite `/portfolio/` est conservé.
- Palette beige déclinée en sombre (par défaut) et clair. Le choix est conservé dans `localStorage` lorsque le navigateur l’autorise.
- Animations Framer Motion avec prise en compte de `prefers-reduced-motion`. Les CSS Modules existants sont conservés, sans ajouter de framework CSS.
- Les projets se filtrent par technologie. Leurs aperçus sont des schémas de principe, pas des captures de services publics. Les URL de démo et de dépôt ne sont pas renseignées : ajouter les liens vérifiés dans `src/Projets/Projets.jsx` pour les afficher.
- Le formulaire valide nom, e-mail et message, puis propose un lien `mailto:`. Aucun backend n’est configuré : la confirmation indique que le message est prêt, **pas qu’il a été envoyé**. L’envoi doit être confirmé dans une application e-mail configurée.
- Le profil GitHub reprend le compte `teikinui` utilisé par l’URL de publication du dépôt ; LinkedIn et l’e-mail reprennent les coordonnées existantes.
- Le portrait WebP (environ 36 Ko au lieu de 519 Ko) est utilisé à l’écran ; la photo originale et le CV sont conservés.

## Vérifications réalisées

- `npm run lint` et `npm run build` : succès.
- Tests navigateur sur le build de production (Edge/Playwright) : thème et persistance, filtres, validation, préparation d’e-mail, chargement du portrait et du CV, redirection d’une ancienne route, menu mobile et touche Échap.
- Absence de débordement horizontal aux largeurs 320, 375, 768, 1 024 et 1 440 px.
- Audit automatisé axe WCAG A/AA : aucune violation détectée sur desktop clair et mobile sombre. Cela ne remplace pas un audit manuel complet.
- `npm audit --omit=dev` : aucune vulnérabilité. L’audit complet signale 4 vulnérabilités modérées dans la chaîne ESLint/minimatch ; pas de mise à niveau majeure forcée de l’outillage.

## Structure

- `src/Accueil` : présentation et page d’accueil
- `src/Competences` : compétences techniques
- `src/Parcours` : expériences et formation
- `src/Projets` : projets personnels
- `src/Contact` : coordonnées de contact
- `src/Menu` : navigation partagée
- `src/components` : composants réutilisables, notamment `Section.jsx` et `Card`
- `public` : ressources statiques, dont la photo de profil
