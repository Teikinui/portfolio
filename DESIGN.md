---
name: Portfolio — Studio technique
description: Papier beige, bleu profond et réalisations techniques concrètes.
colors:
  blue: "#174687"
  navy: "#112f5b"
  beige: "#f3ede2"
  ivory: "#fffaf1"
  band: "#e9e0d1"
  ink: "#17365f"
  muted: "#526078"
  accent: "#204f9d"
  line: "#c9c1b3"
  dark-paper: "#0e1c30"
  dark-surface: "#172941"
  dark-ink: "#f3ede2"
  dark-muted: "#b8c7df"
  dark-accent: "#b2ceff"
  dark-line: "#4b5e79"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(42px, 5.8vw, 84px)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(2rem, 4.1vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.035em"
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.5
rounded:
  sm: "6px"
  md: "10px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  section: "clamp(64px, 7vw, 112px)"
components:
  button-primary:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.sm}"
    padding: "12px 20px"
    height: "48px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "12px 20px"
  input:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.ivory}"
    padding: "12px 16px"
    height: "48px"
---

# Design System: Portfolio — Studio technique

## Overview

**Creative North Star: "Studio technique"**

Un papier beige dominant et une encre marine, avec de grandes régions bleues pour les passages techniques. La typographie porte la structure ; les visuels montrent les réalisations, pas une interface de contrôle fictive. Le thème clair est initial sans préférence enregistrée ; le thème sombre conserve les contrastes et le papier beige de l’accueil.

**Key Characteristics:**
- Beige dominant et bleu profond.
- Grands titres sans-serif, navigation horizontale.
- Réalisations visuelles, espacements généreux et densité variable.
- États explicites et mouvements mesurés.

## Colors

### Primary

Le bleu des actions et le marine des grandes régions techniques structurent la page, au lieu de seulement colorer des icônes. Le bleu plus clair du titre d’accueil est une variation locale, pas un second accent universel.

### Neutral

Le beige constitue le sol, l’ivoire sépare les surfaces, l’encre marine reste lisible sur les deux. Dans le thème sombre, les surfaces deviennent bleutées et les textes ivoire. Les régions bleues conservent leurs couleurs propres dans les deux thèmes.

**The Evidence Rule.** Les captures, sprites et schémas gardent leurs couleurs et leur provenance. Ne pas recolorer artificiellement un projet pour le faire entrer dans la palette.

## Typography

**Display Font:** Manrope, sans-serif, auto-hébergée, graisse 600.

**Body Font:** DM Sans, sans-serif, auto-hébergée, graisse 400 ; contrôles 500.

Titres équilibrés, approche légèrement resserrée ; corps à interligne généreux et paragraphes composés avec `text-wrap: pretty`. Les titres de projet montent de 26 à 36px. Le titre d’accueil descend à 40px sur les écrans les plus étroits. Les libellés restent généralement à 13–14px ; les dates utilisent les chiffres tabulaires.

**The Reading Rule.** Recomposer les schémas sur téléphone plutôt que réduire leurs libellés jusqu’à les rendre illisibles.

## Layout

Conteneur centré de 1248px maximum : marges de 48px, puis 32px sous 1000px, 24px sous 800px et 20px sous 600px. Sections espacées de 64 à 112px. Navigation sticky haute de 80px, puis 72px sous 800px.

Composition asymétrique : grand titre et portrait, puis preuve visuelle et texte de profil. Les dossiers alternent texte et visuel sur desktop ; Candidatures conserve son aperçu pleine largeur. Sous 800px, retour à une colonne ; le texte précède alors le visuel. Les schémas techniques adoptent une lecture verticale sous 700px.

## Elevation & Depth

Surfaces principalement plates, séparées par leur couleur et des filets fins. Une ombre ambiante légère (`0 8px 24px rgb(17 47 91 / .06)`) accompagne les visuels des dossiers, sans halo ni ombre dure. Les boutons n’utilisent pas l’ombre comme signal d’interaction.

## Shapes

Coins légèrement arrondis : 6px pour les actions et le portrait, 10px pour les aperçus. Les éléments préexistants du formulaire et des filtres conservent leurs coins de 4/8px. Contours de 1px pour la structure, anneau de focus de 3px décalé de 5px. Ne pas transformer toutes les sections en cartes.

## Components

### Buttons

Actions principales remplies, secondaires transparentes avec contour. Sur les régions bleues, inverser vers l’ivoire. Taille tactile minimale de 44px, hauteur principale de 48px. Transitions explicites de 150–160ms et pression à `scale(0.96)` ; aucun déplacement sous mouvement réduit. Les liens restent soulignables et le focus visible.

### Chips

Filtres rectangulaires à état `aria-pressed` explicite. Badges technologiques discrets et non interactifs ; ne pas leur donner le même poids que les actions.

### Cards / Containers

Un dossier rassemble titre, contexte, description, technologies et preuves. Pas de boîte décorative autour de toute la fiche. L’aperçu possède ses propres coins ; la formation utilise une surface ivoire ou sombre et un contour fin.

### Inputs / Fields

Champs marine et textes clairs dans la région Contact. Libellés permanents, aide indépendante du placeholder, erreurs textuelles associées aux champs. Le formulaire prépare un `mailto:` et ne prétend jamais avoir envoyé le message.

### Navigation

Navigation horizontale, monogramme bleu, nom, accès aux sections, CV et thème. Sous 800px, menu dépliable avec fermeture par Échap et retour du focus. L’index des cinq réalisations réinitialise les filtres et atteint le bon dossier.

### Project evidence

Capture Candidatures agrandissable ; chargement prioritaire dans l’accueil, différé dans le dossier. Portrait réel conservé. Les schémas de principe et la vue illustrative du job board ne sont pas présentés comme des captures de production.

## Do's and Don'ts

### Do:
- **Do** garder le beige dominant et employer le bleu à l’échelle de régions entières.
- **Do** conserver des visuels réels ou explicitement illustratifs.
- **Do** vérifier les deux thèmes, le clavier et les petits écrans.

### Don't:
- **Don't** reprendre la navigation latérale ou l’identité ocre/verte rejetées.
- **Don't** inventer des chiffres, des résultats ou des interfaces en production.
- **Don't** ajouter des effets de terminal, des néons ou des animations récurrentes aux sections.
