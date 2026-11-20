# Portfolio — Teikinui Decian

Portfolio React/Vite : projets, compétences, parcours, CV et contact.

**Site :** [teikinui.github.io/portfolio](https://teikinui.github.io/portfolio/)

## Démarrer

Prérequis : Git, Node.js 24 LTS recommandé et npm.

```bash
git clone https://github.com/Teikinui/portfolio.git
cd portfolio
npm ci
npm run dev
```

Ouvrir l’URL Vite, généralement `http://localhost:5173/portfolio/`.

## Vérifier et publier

```bash
npm run lint
npm run build
npm run test:e2e
npm run deploy
```

Les tests utilisent Microsoft Edge sur Windows. Sur les autres systèmes, installer Chromium avec `npx playwright install chromium`. Playwright démarre son propre aperçu sur `127.0.0.1:4173` ; ce port doit être libre.

`deploy` reconstruit le site et publie `dist` sur la branche `gh-pages`. Un push sur `main` seul ne met pas automatiquement le site en ligne à jour. Le préfixe GitHub Pages `/portfolio/` est conservé.

## Direction visuelle

Refonte complète avec **Impeccable** et **make-interfaces-feel-better**. Objectif confirmé : montrer la maîtrise technique, sans conserver l’ancienne identité. L’utilisateur a choisi **Galerie d’ingénierie** sur la page de décision, puis autorisé le remplacement de la documentation du système.

- Ocre sur une grande région d’accueil ; sol minéral clair ou charbon végétal sombre.
- Nouvelles fontes locales Onest et Public Sans.
- Navigation latérale avec portrait et CV sur desktop ; barre sticky et menu sur mobile.
- Cinq réalisations sélectionnables dès l’accueil, au clavier ou au pointeur, avec lien vers leur dossier.
- Projets présentés par leurs visuels ; capture Candidatures agrandissable et grande mise en page dédiée.
- Schémas Cloud/NAS recomposés sur téléphone pour garder des libellés lisibles.
- Compétences, parcours et contact harmonisés, sans faux terminal ni télémétrie inventée.
- Transitions courtes, pression à `scale(0.96)`, focus visible et réduction des mouvements.

`PRODUCT.md` contient les faits et contraintes, `DESIGN.md` les tokens et règles réellement livrés, `.impeccable/design.json` leurs extensions et exemples de composants. Le contrat de la route est dans `.impeccable/surfaces/portfolio.md`. Les outils et rapports de design ne sont pas chargés dans l’application publique.

## Fonctionnalités

- Thèmes clair/sombre persistants ; sombre initial en l’absence de préférence enregistrée.
- Galerie accessible : flèches gauche/droite, Home, End et sélection par boutons nommés.
- Filtres technologiques ; ouvrir un dossier depuis l’accueil réinitialise les filtres.
- Anciennes routes React redirigées vers les sections correspondantes.
- Menu mobile, fermeture par Échap, retour du focus au bouton et lien d’évitement.
- Formulaire avec validation, conservation des valeurs et correction des erreurs pendant la saisie.
- Le formulaire prépare un `mailto:` : **aucun backend d’envoi et aucun envoi simulé**.
- CV PDF et coordonnées réels conservés.

## Réalisations et visuels

| Projet | Aperçu | Code public |
| --- | --- | --- |
| Job board d’équipe | Vue illustrative « tanière », annonces du jeu de démonstration | [projet-jobboard](https://github.com/Teikinui/projet-jobboard) |
| Sites et applications sécurisés | Schéma Cloudflare Zero Trust, Docker et Arcane | Non renseigné |
| NAS et accès distant | Schéma du tunnel WireGuard dans Docker sur le NAS | Non renseigné |
| TripTrap | Composition pixel art avec les sprites originaux de Tahiti | [projet-jeu-java](https://github.com/Teikinui/projet-jeu-java) |
| Candidatures | Vraie capture du Kanban ; six candidatures fictives en SQLite mémoire | [suivi-alternance](https://github.com/Teikinui/suivi-alternance) |

Les aperçus ne sont pas des démos jouables. Les schémas ne prétendent pas montrer un état de production. Aucune candidature privée ni donnée personnelle tierce n’a été capturée.

Provenance :

- `public/projects/candidatures/SOURCE.md` : dépôt, révision, méthode et dimensions des captures.
- `public/projects/triptrap/SOURCE.md` : origine des sept sprites du jeu.
- `public/projects/infrastructure/SOURCE.md` : schémas, interface illustrative et logos Simple Icons.
- `public/fonts/SOURCE.md` et licences OFL : nouvelles fontes auto-hébergées.
- Portrait et CV : ressources utilisateur préexistantes, conservées.

## Vérifications de la refonte

Commandes réellement exécutées :

- `npm run lint` : succès.
- `npm run build` : succès, bundle de production sous `/portfolio/`.
- `npm run test:e2e` : **7 tests Edge réussis**.

Périmètre navigateur :

- 320, 390, 768, 1 024 et 1 440 px, dans les deux thèmes ; fontes chargées et absence de débordement horizontal global.
- Galerie au clavier, toutes les pièces sur téléphone, filtres, réinitialisation et accès au bon dossier.
- Capture agrandissable et CV servis ; identifiants SVG uniques même lorsque TripTrap apparaît deux fois.
- Menu, focus, Échap, persistance du thème, ancienne route Contact et mouvement réduit.
- Erreurs du formulaire corrigées pendant la saisie, préparation honnête du message et invalidation du brouillon à la modification.
- Focus et pression observés avec transitions CSS ralenties à 10 % par CDP, puis sous mouvement réduit.
- Axe WCAG A/AA à 390 et 1 440 px, dans les deux thèmes : aucune violation détectée dans les états testés. Ce contrôle n’est pas une certification complète d’accessibilité.

Captures et revue dans `.impeccable/review/`, traces dans `test-results/` ; ces sorties sont ignorées par Git. Revue finale et documentation effectuées dans le fil principal, sans sous-agent. Verdict de la revue visuelle : **ship** sur le périmètre inspecté.

Le détecteur Impeccable a été exécuté une seule fois sur les sources avant l’extraction finale du système. Il signalait deux polices absentes de l’ancien DESIGN.md et 90 avis de couleurs/tailles ; les nouvelles polices et la palette approuvée sont désormais documentées. Les couleurs propres aux projets ne sont pas remplacées pour uniformiser artificiellement leurs aperçus. Le scan n’a pas été relancé après documentation.

L’installation npm signale **trois vulnérabilités de sévérité modérée**. Elles n’ont pas été corrigées automatiquement dans cette refonte visuelle. Les gestes tactiles physiques, Safari et Firefox n’ont pas été testés.

## Structure

- `src/Accueil` : introduction, galerie et profil détaillé.
- `src/Menu` : navigation, portrait, thèmes et menu mobile.
- `src/Projets` : filtres, dossiers et composants d’aperçu.
- `src/Competences`, `src/Parcours`, `src/Contact` : sections et CSS Modules.
- `src/data/projects.js` : source commune des cinq projets.
- `src/components` : composants partagés et SVG d’interface.
- `src/index.css`, `src/App.css` : tokens, fontes et styles communs.
- `tests`, `playwright.config.js` : tests navigateur et accessibilité.
- `public` : CV, portrait, captures, sprites, logos et fontes locales.
