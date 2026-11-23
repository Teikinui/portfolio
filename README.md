# Portfolio — Teikinui Decian

Portfolio React/Vite : cinq projets, compétences, parcours, CV et formulaire de contact.

## Branche de travail

**`modification-design` : Studio technique beige et bleu.** Cette proposition n’est pas déployée sur le site principal. Le choix a été confirmé par l’utilisateur ; l’identité ocre/verte et la navigation latérale ont été écartées.

- Papier beige dominant, encre marine, grandes régions bleues pour les compétences et le contact.
- Titres Manrope locaux, corps DM Sans et navigation horizontale.
- Accueil asymétrique : grand titre, portrait réel, actions immédiatement accessibles et capture Candidatures agrandissable.
- Dossiers alternant descriptions et grands visuels ; Candidatures en pleine largeur.
- Schémas techniques verticaux sur téléphone, plutôt que libellés SVG trop réduits.
- Thème clair initial sans préférence enregistrée ; préférence claire/sombre persistante. L’accueil reste beige dans les deux modes.

Le système effectivement construit est documenté dans `DESIGN.md` et `.impeccable/design.json`. Le contrat de cette proposition est dans `.impeccable/surfaces/portfolio.md`. Le remplacement de DESIGN.md sur cette branche a été autorisé par l’utilisateur.

## Démarrer

Prérequis : Node.js 24 LTS recommandé, npm et Git.

```bash
npm ci
npm run dev
```

Ouvrir l’URL annoncée par Vite, généralement `http://localhost:5173/portfolio/`.

```bash
npm run lint
npm run build
npm run test:e2e
```

Playwright utilise Microsoft Edge sur Windows. Ailleurs, installer Chromium avec `npx playwright install chromium`. Le test démarre son propre aperçu de production sous `/portfolio/` sur le port 4173 ; ce port doit être libre.

## Fonctionnalités conservées

- Cinq projets, filtres technologiques et index de navigation vers chaque dossier.
- Réinitialisation des filtres lors d’un accès depuis l’accueil ; arrivée et focus sur le bon dossier.
- CV PDF, liens GitHub/LinkedIn, coordonnées et contenu factuel conservés.
- Navigation sticky, menu mobile, Échap et retour du focus au bouton.
- Anciennes routes React redirigées vers les sections.
- Thèmes persistants, focus visible, lien d’évitement et réduction des mouvements.
- Formulaire validé, erreurs corrigées pendant la saisie et brouillon invalidé après modification.
- **Le formulaire prépare un `mailto:` ; il n’envoie aucun e-mail et n’utilise aucun backend.**

## Réalisations

| Projet | Preuve visuelle | Code public |
| --- | --- | --- |
| Job board d’équipe | Vue illustrative avec les données de démonstration du dépôt | [projet-jobboard](https://github.com/Teikinui/projet-jobboard) |
| Sites et applications sécurisés | Schéma Cloudflare Zero Trust, Docker et Arcane | Non renseigné |
| NAS personnel et accès distant | Schéma WireGuard dans Docker sur le NAS | Non renseigné |
| TripTrap | Composition avec les sprites originaux de Tahiti | [projet-jeu-java](https://github.com/Teikinui/projet-jeu-java) |
| Candidatures | Vraie capture du Kanban avec données fictives isolées | [suivi-alternance](https://github.com/Teikinui/suivi-alternance) |

Les schémas ne prétendent pas montrer un état de production et les aperçus ne sont pas des démos jouables. Aucune donnée de candidature privée n’a été capturée.

Provenance et licences : `public/projects/candidatures/SOURCE.md`, `public/projects/triptrap/SOURCE.md`, `public/projects/infrastructure/SOURCE.md` et `public/fonts/SOURCE.md`. Portrait et CV utilisateur préexistants conservés.

## Vérifications de cette proposition

Commandes exécutées : lint et build réussis ; **6 tests Playwright Edge réussis**.

- Deux thèmes aux largeurs 320, 390, 768, 820, 1024 et 1440px : fontes chargées, cinq dossiers présents, absence de débordement horizontal et action principale entièrement dans le premier écran.
- Axe WCAG A/AA à 390 et 1440px, dans les deux thèmes : aucune violation détectée dans les états testés. Ce n’est pas une certification exhaustive d’accessibilité.
- Filtres, réinitialisation, ancre, focus du dossier, CV PDF, image agrandie et police locale servis.
- Menu mobile, Échap, persistance du thème et ancienne route Contact.
- Formulaire invalide puis valide, brouillon mailto et invalidation après modification.
- Focus, pression CSS ralentie à 10 % via CDP et absence de transformation sous mouvement réduit.

Captures et revue locale : `.impeccable/review/studio-*`. Traces de test : `test-results/`. Ces sorties sont ignorées par Git. Revue et documentation réalisées dans le fil principal, sans sous-agent autonome.

Limites : Safari, Firefox et gestes sur un téléphone physique non vérifiés. npm signale trois vulnérabilités modérées, non corrigées automatiquement dans cette refonte.

## Publication

Le site public reste [teikinui.github.io/portfolio](https://teikinui.github.io/portfolio/), sur la version précédente.

**Ne pas lancer `npm run deploy` pour une simple prévisualisation de cette branche** : cette commande reconstruit et remplace le site principal via `gh-pages`. La proposition doit être validée avant fusion et publication. Un push sur `modification-design` ne publie pas automatiquement le site.

## Structure

- `src/Accueil`, `src/Menu` : accueil, navigation, thèmes et menu.
- `src/Projets`, `src/data/projects.js` : dossiers, aperçus et faits communs.
- `src/Competences`, `src/Parcours`, `src/Contact` : sections et CSS Modules.
- `src/index.css`, `src/App.css` : tokens et styles partagés.
- `tests/studio.spec.js`, `playwright.config.js` : vérifications navigateur.
- `public` : portrait, CV, captures, sprites, logos et fontes locales.
