---
name: Portfolio — Galerie d’ingénierie
description: Réalisations réelles, surfaces minérales et encre végétale.
colors:
  ochre: "#e8bd53"
  forest: "#203b35"
  ink: "#20352c"
  mineral: "#f5f7f4"
  white: "#ffffff"
  light-band: "#e7ede5"
  light-muted: "#56665b"
  light-accent: "#365b42"
  light-line: "#becbbf"
  dark-ground: "#17211e"
  dark-surface: "#202d27"
  dark-band: "#2b3a31"
  dark-ink: "#f0f4ed"
  dark-muted: "#b7c4b8"
  dark-accent: "#ead28c"
  dark-line: "#46564b"
  dark-button-ink: "#222c24"
  error-dark: "#ffb6a6"
  error-light: "#a42d22"
  image-outline-dark: "oklch(1 0 0 / 0.1)"
  image-outline-light: "oklch(0 0 0 / 0.1)"
typography:
  display:
    fontFamily: "Onest, sans-serif"
    fontSize: "clamp(2.5rem, 4.6vw, 4.5rem)"
    fontWeight: 550
    lineHeight: 1.04
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Onest, sans-serif"
    fontSize: "clamp(2.2rem, 4vw, 3.5rem)"
    fontWeight: 550
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Onest, sans-serif"
    fontSize: "clamp(1.4rem, 2vw, 1.9rem)"
    fontWeight: 550
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Public Sans, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.8
  intro:
    fontFamily: "Public Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Public Sans, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: "5px"
  md: "10px"
  lg: "18px"
spacing:
  xs: "4px"
  sm: "8px"
  control: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  group: "48px"
  section: "64px"
components:
  button-primary-dark:
    backgroundColor: "{colors.ochre}"
    textColor: "{colors.dark-button-ink}"
    rounded: "{rounded.sm}"
    padding: "12px 18px"
    height: "48px"
  button-primary-light:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.mineral}"
    rounded: "{rounded.sm}"
    padding: "12px 18px"
    height: "48px"
  gallery-tab-active:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.mineral}"
    rounded: "{rounded.md}"
    padding: "10px 12px"
    height: "44px"
---

# Design System: Galerie d’ingénierie

## Overview

**Creative North Star: "Galerie d’ingénierie"**

Les réalisations sont les pièces principales ; les informations techniques en rendent la lecture précise. La maîtrise se montre par des captures, schémas et faits existants, pas par un décor de terminal ou des indicateurs fictifs. L’identité précédente bleu/beige est remplacée avec l’accord de l’utilisateur.

Le système est minéral et végétal, avec une présence ocre franche. La composition accueille aussi bien un grand visuel qu’un passage dense de parcours ou de compétences. La précision vient de la hiérarchie, de l’alignement et du rythme, sans animation répétitive.

**Key Characteristics:**
- Réalisations visibles avant les longs textes.
- Palette ocre, encre végétale et surfaces minérales.
- Typographie locale, lisible et sans-serif.
- Deux thèmes, même identité et mêmes repères d’interaction.

## Colors

### Primary

L’ocre porte les grandes régions identitaires et les actions du thème sombre. La forêt structure les actions claires et les régions de fermeture. Leur rôle ne se limite pas à de petits accents.

### Neutral

Le thème clair utilise mineral, white et light-band ; le sombre dark-ground, dark-surface et dark-band. Les encres, séparateurs et états d’erreur ont chacun une variante de thème. Les sources exécutables sont les variables de `src/index.css`.

**The Evidence Rule.** Les couleurs d’un projet appartiennent à son interface ou à son schéma, pas au thème du portfolio. Le pixel art de TripTrap, la capture Candidatures et les schémas d’infrastructure gardent leur palette propre.

## Typography

Onest porte les titres, avec une graisse variable de 550 et des approches resserrées. Public Sans porte les paragraphes, labels et contrôles. Les fontes sont locales ; provenance et licences sous `public/fonts`.

Titres équilibrés, paragraphes en `text-wrap: pretty`, lissage sur la racine, chiffres tabulaires pour les périodes. Les introductions font 16px, les descriptions 15px, les labels généralement 13–14px. Les champs restent à 16px pour éviter le zoom mobile. Les grands titres diminuent jusqu’à 34px dans l’accueil mobile.

**The Reading Rule.** Les descriptions restent autour de 65ch ; les détails de parcours ne dépassent pas 75ch. Sur téléphone, les schémas sont recomposés en HTML avec des textes de 13–20px plutôt que simplement rétrécis.

## Layout

Rail de 224px sur desktop, puis barre sticky de 72px sous 1000px. Le contenu utilise la largeur restante, un maximum de 1160px et des marges égales de 48px, puis 32px et 20px. Les sections ont un rythme de 64 à 104px, sans hauteur d’écran imposée.

Les projets utilisent deux colonnes quand l’espace le permet ; sous 700px, une seule. La tranche desktop 1001–1200px utilise aussi une colonne, car le rail reste présent. La réalisation avec capture longue conserve une mise en page pleine largeur. Les compétences et le parcours sont des groupes de lecture, pas une collection de cartes identiques.

## Elevation & Depth

Système plat, sans ombre décorative. Les changements de fond créent la profondeur ; les traits d’un pixel séparent les éléments structurels. Le contour des images est neutre, intérieur et adapté au thème. Le focus de 3px est un état, pas un effet d’éclairage.

## Shapes

Trois rayons fonctionnels : contrôles petits, visuels intermédiaires et grandes surfaces. Une galerie avec 8px de padding et des onglets à 10px emploie un rayon extérieur de 18px. Le portrait reste rectangulaire, sans masque décoratif.

## Components

### Buttons

Hauteur minimale de 48px, labels à 14px, icône SVG partagée. Transitions explicites de 150ms, pression à `scale(0.96)`, désactivée en mouvement réduit. Les liens de texte et contrôles compacts ont une cible d’au moins 44px.

### Navigation

Portrait, nom et établissement dans le rail, repère actif par fond et point, liens CV/contact toujours visibles sur desktop. En mobile : bouton Menu, focus sur le premier lien à l’ouverture, fermeture par Échap avec retour au bouton. Les thèmes sont persistants et le sombre reste initial en l’absence de préférence sauvegardée.

### Gallery

Onglets nommés et panneau associé, navigation par flèches, Home et End. Le changement de pièce est immédiat : pas de carrousel, défilement automatique ou entrée rejouée. Le lien du dossier réinitialise les filtres. Le contenu existe sans mouvement.

### Cards / Containers

Les aperçus de projets ouvrent les dossiers visuellement, suivis de textes et de technologies. Les cadres demeurent simples ; aucune ombre ne simule un équipement réel. Les visuels agrandissables annoncent leur action et les liens externes leur nouvel onglet.

### Inputs / Fields

Formulaire dans une surface tonale, champs sur une surface distincte, bordure structurelle, labels visibles et erreurs associées. Les valeurs sont conservées et les erreurs des champs corrigés disparaissent pendant la saisie. Confirmation de préparation d’un `mailto:`, jamais d’envoi automatique.

### Motion

Une seule entrée discrète du titre. Changements fréquents limités aux couleurs et opacités. Les icônes contextuelles utilisent Framer Motion : échelle .25 à 1, opacité 0 à 1, flou 4px à 0, spring .3s et bounce 0 ; pas d’animation initiale des icônes. Les mouvements non essentiels disparaissent sous `prefers-reduced-motion`.

## Do's and Don'ts

- Do montrer les vraies réalisations et conserver la provenance des images et polices.
- Do garder l’action CV et le contact accessibles au clavier.
- Do séparer illustration, données fictives et capture réelle.
- Do tester les deux thèmes dès 320px et les états du formulaire.
- Don't ajouter de fausse télémétrie, de faux terminal ou de démonstration annoncée comme publique sans URL réelle.
- Don't animer à chaque sélection de projet, ajouter des halos ou employer `transition: all`.
- Don't réduire un schéma jusqu’à rendre ses libellés illisibles.
