---
name: Portfolio — Teikinui Decian
description: Dossier de candidature cloud, bleu académique et surfaces papier.
colors:
  brand: "#153e96"
  brand-light: "#1d4db0"
  brand-deep: "#102d64"
  paper-dark: "#0d1728"
  paper-light: "#f4f1e9"
  surface-dark: "#142239"
  surface-light: "#fffdf8"
  ink-dark: "#f1f5fc"
  ink-light: "#142139"
  muted-dark: "#b5c4da"
  muted-light: "#526177"
typography:
  display:
    fontFamily: "Geist, sans-serif"
    fontSize: "clamp(2.4rem, 6.4vw, 6rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Geist, sans-serif"
    fontSize: "clamp(2rem, 4.1vw, 3.5rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.75
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
  section: "clamp(64px, 7vw, 112px)"
components:
  button-primary:
    rounded: "{rounded.sm}"
    padding: "12px 20px"
    height: "48px"
---

# Design System: Teikinui Decian

## Overview

**Creative North Star: "Le dossier de candidature technique"**

Refonte globale guidée par Impeccable 4.8.2. Le bleu prend en charge les grandes régions ; les contenus deviennent des dossiers lisibles plutôt qu’une suite de petites cartes. Le portrait, les projets et le parcours réels sont les seuls éléments de preuve. Aucune imitation de logo officiel EPITECH.

## Colors

Le thème initial est sombre ; le thème clair conserve la tonalité papier beige du portfolio. Les couvertures du hero, du parcours et du footer gardent leur rôle bleu dans les deux thèmes. Les nuances du premier plan sont adaptées au fond, jamais inversées aveuglément. Les sources exécutables sont les variables de src/index.css et les surcharges de section dans src/App.css.

## Typography

Geist locale, graisse 500, pour tous les h1–h4. DM Sans locale pour le corps et les contrôles. Le titre du hero est plafonné à 6rem ; les tailles diminuent sans couper les mots. Les libellés secondaires font au moins 13px. Ne pas recréer d’exceptions typographiques par ID.

## Layout

Conteneur partagé, maximum 1248px ; marges latérales 48px sur grand écran, puis 32, 24 et 20px. Les seuils principaux sont 1000, 800, 700 et 600px selon la composition. Le hero est une couverture à titre pleine largeur, suivie du texte et du portrait, puis d’un index de projets. Les listes de projets et expériences alternent avec les colonnes de compétences ; aucune hauteur d’écran fixe n’est imposée.

## Elevation & Depth

Système plat, sans ombres décoratives. Les régions sont différenciées par leurs fonds et leurs séparateurs d’un pixel. La navigation reste sticky et opaque pour assurer la lecture pendant le défilement.

## Shapes

Petits rayons fonctionnels : contrôles et portrait, puis champs et panneaux. Aucun masque géométrique sur la photo, aucun halo ou dégradé de texte.

## Components

Boutons de 48px minimum, contrôles de 44px minimum, focus visible de 3px. Iconographie SVG partagée dans Icon.jsx, même trait et même poids. L’index du hero réinitialise les filtres avant d’atteindre le projet sélectionné. Le formulaire conserve les valeurs en erreur et confirme uniquement la préparation d’un e-mail. Le mouvement d’entrée du hero part d’un contenu visible ; la réduction des mouvements est respectée.

### Visuels des projets web et infrastructure

Les trois premiers projets ont chacun une composition propre dans `ProjectPreview.jsx`, sans animation répétitive. Le job board montre une vue HTML/CSS illustrative, pas une capture : nom « tanière », palette crème/terracotta du dépôt source (`#fbf5ee`, `#fffdf9`, `#f1e3d1`, `#a4501f`, `#1e140e`, `#6b3e22`, séparateur `#dcc9b6`), deux annonces du seed explicitement marquées comme démonstration, lien vers le code et non une candidature fictive. Les schémas SVG 480×320 présentent l’accès Zero Trust et le tunnel WireGuard à l’intérieur de Docker sur le NAS. Ils emploient des fonds stables bleu `#112236` et vert `#102c30`, des traits fins, une typographie partagée, et les logos réels Cloudflare/Docker/WireGuard, sans statut actif, métrique ou matériel inventé. Couleurs secondaires locales limitées au rendu du diagramme ; ces palettes ne changent pas les thèmes du site. Sources dans `public/projects/infrastructure/SOURCE.md`.

### Capture Candidatures

Le cinquième projet utilise la vraie interface de son dépôt React/Express, capturée sur une instance locale isolée avec six candidatures fictives en SQLite mémoire. Dossier pleine largeur : résumé en deux colonnes sur desktop, puis capture Kanban 1440×900 sans recadrage CSS. Le lien « Agrandir » ouvre la capture complète 1440×3137 dans un nouvel onglet. La barre de la vignette annonce « Capture réelle · Données fictives » ; elle possède une cible de 44px minimum, un focus visible et une réponse de couleur au survol/clavier. Pas de zoom sur l’image pour préserver la netteté du texte, pas d’animation d’entrée supplémentaire. Dimensions explicites, chargement différé et contour neutre intérieur de 1px adapté au thème. L’index d’accueil passe à cinq colonnes, puis deux avec une dernière entrée pleine largeur sous 1000px, puis une sous 600px. Sources dans `public/projects/candidatures/SOURCE.md`.

### Aperçu TripTrap

Vignette 8:5 illustrant le niveau Tahiti à partir de sept sprites originaux du dépôt Java : décor, personnage en saut, plateformes, objectif et pièges. Composition SVG statique, explicitement décrite comme une illustration et non une capture ou une démo. Les couleurs locales `#0e3b3c` et `#8fdcdd` viennent du thème Tahiti du jeu ; elles ne remplacent pas les couleurs du portfolio. La vignette entière ouvre le dépôt GitHub, avec focus visible, zoom au survol limité à 1.02 et suppression du zoom en mouvement réduit. Provenance dans `public/projects/triptrap/SOURCE.md`.

## Do's and Don'ts

- Do conserver les contenus, intitulés et liens réels ; les données projets sont partagées dans src/data/projects.js.
- Do tester le badge sans retour à la ligne à 320px et les deux thèmes.
- Do utiliser le bleu pour la structure, pas pour fabriquer une affiliation officielle à EPITECH.
- Don't remettre d’eyebrows au-dessus des titres, de numéros décoratifs de sections ou d’emoji en guise d’icônes.
- Don't présenter le formulaire mailto comme un envoi réalisé par un serveur.
