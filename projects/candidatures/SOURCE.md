# Capture de Candidatures — suivi d’alternance

Dépôt fourni par Teikinui : https://github.com/Teikinui/suivi-alternance
Révision capturée : `aecccef1e9dff31d5b083053a2f7d05fc6232690`.

## Prise de vue

Application React/Express réellement construite avec `npm ci` puis `npm run build` dans une copie locale du dépôt. Lancement avec le script existant `npm run design:preview` sur `127.0.0.1:3102`.

Le script `tests/design-preview.mjs` utilise SQLite en mémoire et six candidatures fictives : Studio Horizon, Maison Nova, Atelier Pixel, Bloom Tech, Collectif Alto et Lumen. Il n’accède pas au dossier `data` ni à des candidatures personnelles. Les statistiques et dates visibles sont calculées par la vraie application sur ces seules données de démonstration.

Capture par Chromium/Edge via `shoot.mjs`, largeur 1440 px, viewport 900 px, thème sombre :

- `interface-kanban.jpg` : viewport réel du suivi Kanban, 1440×900, sans retouche de l’interface.
- `interface-complete.png` : capture complète, 1440×3137, ouverte par le lien « Agrandir ».

Aucun écran redessiné, aucune image générée, aucune offre réelle et aucune donnée privée. La vignette indique « Capture réelle · Données fictives ». Le code source reste accessible séparément ; aucune démo publique n’est annoncée.
