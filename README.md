# Portfolio — Teikinui Decian

Portfolio personnel React/Vite : profil, projets, compétences, parcours, CV et contact.

**En ligne :** [teikinui.github.io/portfolio](https://teikinui.github.io/portfolio/)

## Prérequis

Git, Node.js LTS récent et npm.

```bash
git --version
node --version
npm --version
```

## Télécharger et démarrer

```bash
git clone https://github.com/Teikinui/portfolio.git
cd portfolio
npm install
npm run dev
```

Ouvrir l’adresse affichée par Vite, généralement `http://localhost:5173/portfolio/`. Laisser le terminal ouvert ; arrêter avec `Ctrl+C`. Après l’installation, seul `npm run dev` est nécessaire. Pour récupérer les mises à jour : `git pull`.

## Vérifier et publier

```bash
npm run lint
npm run build
npm run preview
npm run deploy
```

`deploy` reconstruit le site puis publie `dist` sur la branche `gh-pages` du remote `origin`. Le préfixe `/portfolio/` est conservé. Les anciennes routes React redirigent vers leur section.

## Direction visuelle et intégration Impeccable

La refonte globale utilise **Impeccable 4.8.2 exclusivement** : couverture bleue, régions papier/beige en clair, surfaces encre en sombre, dossiers de projets, compétences en colonnes, parcours bleu et contact coordonné. Le contenu, les 24 titres, les liens et les fonctionnalités sont conservés. EPITECH Paris reste identifié par son nom réel, sans logo officiel inventé.

- `PRODUCT.md` consigne les faits et contraintes.
- `DESIGN.md` et `.impeccable/design.json` décrivent le système effectivement implémenté.
- `.impeccable/surfaces/portfolio.md` consigne la composition et les limites de revue.
- Installation utilisée : `npx impeccable install --providers=pi --scope=global --no-hooks --yes`. Le skill et son moteur restent dans le répertoire utilisateur, **pas dans le dépôt ni le bundle public**. En Pi, recharger les skills après installation.
- Les consignes Hermes ont également été lues : pour une installation locale, Hermes exige `hermes skills trust` ; le hook optionnel s’active avec `hermes plugins enable impeccable-design-hook`. Aucun plugin Hermes n’est activé par ce projet.
- Sans hook automatique Pi, un contrôle manuel Impeccable a été exécuté sur les sources et le rendu. Réserve conservée : Geist est signalée comme une police répandue ; six fins de paragraphes courtes sont signalées à titre consultatif. Aucune réserve de contraste bloquante détectée.

## Fonctionnement conservé

- Thème sombre initial, bascule clair/sombre et persistance `localStorage`, même si le stockage est bloqué.
- Navigation sticky, menu mobile et fermeture par Échap, lien d’évitement et focus visible.
- Trois projets filtrables par technologie. L’index du hero réinitialise le filtre puis rejoint le bon projet.
- Les aperçus sont des schémas de principe, pas de fausses captures. Les URL manquantes restent explicitement non publiques/non renseignées ; le dépôt réel du job board est conservé.
- Formulaire validant nom, e-mail et message, puis préparant un `mailto:`. **Aucun backend n’est configuré et aucun envoi n’est simulé.** L’envoi doit être confirmé dans l’application e-mail.
- CV et photos conservés ; portrait WebP de 36 Kio, polices locales Geist et DM Sans, aucune requête de police externe à l’exécution.
- Une entrée discrète du hero à contenu déjà visible, sans apparition répétitive des sections ; `prefers-reduced-motion` respecté.

## Contrôles de la refonte

- `npm run lint` et `npm run build` : succès. ESLint exclut les ressources d’outils tiers dans `.agents` et les sorties `.impeccable`, pas le code de l’application.
- Edge/Playwright sur le build : contenu des 24 titres inchangé, thèmes, stockage bloqué, filtres, ancres du hero après filtrage, erreurs et préparation du formulaire, CV PDF, portrait, ancienne route, menu mobile, Échap, focus et mouvement réduit/normal.
- Largeurs 320, 375, 390, 600, 701, 768, 820, 1 024, 1 280 et 1 440 px, dans les deux thèmes : aucune coupure de titre, aucun débordement horizontal, badge sur une ligne.
- Axe WCAG A/AA à 320, 390, 768 et 1 440 px, dans les deux thèmes : aucune violation détectée. Ce contrôle automatisé n’est pas une certification complète d’accessibilité.
- Captures de revue dans `.impeccable/review/` (ignorées par Git). La revue finale est réalisée dans le fil principal, sans sous-agent.

## Structure

- `src/Accueil`, `src/Projets`, `src/Competences`, `src/Parcours`, `src/Contact` : sections et CSS Modules.
- `src/Menu` : navigation et thème.
- `src/components` : Section, Card et iconographie SVG partagée.
- `src/data/projects.js` : données réelles communes au hero et à la liste de projets.
- `public` : photos, CV, favicon et polices locales avec licences.
