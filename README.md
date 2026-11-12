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

## Direction visuelle — Taste

Seule référence de design : [Taste 2.5.1](https://github.com/Leonxlnx/taste-skill), lu dans `.agents/skills/design-taste-frontend/SKILL.md` et ses références `system`, `layout-v4`, `motion`, `sections`, `copy`, `copy-voice` et `perf`. Ses principes sont transposés dans les CSS Modules existants, sans installer un second système CSS.

- Palette beige, thème sombre initial, navbar sticky dépolie, données et fonctionnalités conservés.
- Instrument Serif pour les titres et DM Sans pour le texte, deux fichiers WOFF2 locaux avec leurs licences OFL dans `public/fonts`. Aucune requête Google Fonts à l’exécution.
- Corps de texte à 16 px minimum, métadonnées à 13 px minimum ; échelle commune d’espacement, rayons et interactions.
- Portrait droit sans ornements inclinés ni légende visible ; nom conservé dans la légende accessible et la navigation.
- Trois projets sur une rangée à grande largeur, cartes horizontales sur tablette et empilées sur téléphone ; compétences en trois colonnes sur desktop.
- Entrée du hero, survol et pression discrets ; aucun contenu masqué au scroll. Les cartes sans lien ne se soulèvent pas. Le badge de disponibilité s’anime deux fois, puis s’arrête avant cinq secondes ; réduction des mouvements respectée.

Adaptations au périmètre : pas de nouveau contenu, de scène WebGL, de kit CSS/JS supplémentaire ou de section ajoutée. La navbar dépolie demandée et les hauteurs adaptées au contenu sont conservées plutôt que le gabarit Taste strict à hauteurs d’écran fixes. Cela ne constitue pas une conformité complète à son checker de gabarit.

## Vérifications réalisées

### Après la passe Taste

- `npm run build` : succès.
- `npm exec eslint -- src vite.config.js eslint.config.js` : succès.
- `npm run lint` : échec préexistant, 76 erreurs dans les fichiers du skill tiers sous `.agents/`. Diagnostics identiques avant et après les changements ; ni le kit ni la configuration ESLint n’ont été modifiés.
- Tests Edge/Playwright sur le build : chargement des deux polices locales, lien d’évitement au clavier, thèmes persistants et stockage bloqué, filtres des trois projets, formulaire et lien `mailto:`, CV, portrait, ancienne route, menu et Échap, mouvement normal/réduit, survol des cartes liées seulement. Aucun échec ni erreur navigateur/ressource.
- Captures et contrôles de débordement à 320, 390, 768, 820, 1 024 et 1 440 px, dans les deux thèmes : succès.
- Axe WCAG A/AA sur desktop et mobile, dans les deux thèmes : aucune violation détectée ; pas une certification d’accessibilité.
- Taste `shoot.mjs` : captures avant/après sur le build. Dernier passage de `perf.mjs` à 1 440 et 390 px : PASS, aucun FAIL ni WARN, environ 217 Kio transférés, deux polices (57 Kio), CLS mesuré à 0. Les mesures locales ne remplacent pas les données terrain.
- Taste `consistency.mjs` : non concluant, connexions CDP interrompues puis délai maximal atteint, aucun rapport complet produit.
- Taste `layout/check.mjs` : exécuté aux cinq formats prescrits, non validé. Il signale notamment les hauteurs non multiples d’un écran et les colonnes/retraits hors de son gabarit de kit ; aucune dérogation n’a été ajoutée pour faire passer ce contrôle.

### Vérifications de la version précédente
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
