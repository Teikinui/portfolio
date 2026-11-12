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

## Do's and Don'ts

- Do conserver les contenus, intitulés et liens réels ; les données projets sont partagées dans src/data/projects.js.
- Do tester le badge sans retour à la ligne à 320px et les deux thèmes.
- Do utiliser le bleu pour la structure, pas pour fabriquer une affiliation officielle à EPITECH.
- Don't remettre d’eyebrows au-dessus des titres, de numéros décoratifs de sections ou d’emoji en guise d’icônes.
- Don't présenter le formulaire mailto comme un envoi réalisé par un serveur.
