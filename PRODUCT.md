# Portfolio — Teikinui Decian

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruteurs et équipes techniques évaluant une candidature en alternance infrastructure cloud. Audience déduite de la demande utilisateur et de la description existante du hero ; pas de nouveau positionnement commercial.

## Product Purpose

Présenter les projets, compétences, expériences et formations de Teikinui, donner accès au CV et permettre une prise de contact.

## Capabilities and Constraints

- React 19, Vite, React Router, CSS Modules, Framer Motion existants ; pas de remplacement de stack.
- Publication GitHub Pages sur `/portfolio/`, anciennes routes redirigées vers les sections.
- Navigation sticky, menu mobile, filtres technologiques, thèmes clair/sombre persistants (sombre initial), réduction des animations et navigation clavier à conserver.
- Le formulaire valide les champs puis prépare un lien `mailto:`. Aucun backend d’envoi ; ne pas présenter un message prêt comme envoyé.
- Textes, liens existants et trois projets à conserver. Aucune expérience, qualification, entreprise ou performance à inventer.
- Après vérification : commit ciblé sur main, push origin/main, publication avec npm run deploy, contrôle des branches et assets servis.

## Brand Commitments

Teikinui Decian, étudiant en Master of Science Cloud à EPITECH Paris. Conserver le nom de l’établissement et le parcours exacts ; ne pas fabriquer de logo officiel, d’agrément ou de partenariat. Voix française, concrète et professionnelle. L’utilisateur remplace la précédente référence de design par Impeccable exclusivement et demande une refonte de tout le site.

La préférence beige antérieure reste un repère d’identité personnel ; elle peut vivre dans le thème clair et les surfaces secondaires, sans empêcher une nouvelle composition et un rôle plus affirmé du bleu académique.

## Evidence on Hand

- Textes dans src/Accueil, src/Projets, src/Competences, src/Parcours et src/Contact.
- Portrait public/photo_profil.webp et photo originale conservée.
- CV public/CV/CV_Teikinui_DECIAN_Cloud.pdf.
- Dépôt public du job board ; deux projets d’infrastructure sans démonstration ou dépôt public renseigné.
- Coordonnées GitHub, LinkedIn et e-mail existantes.

## Product Principles

1. Les réalisations et les faits passent avant les promesses.
2. Le CV et le contact restent accessibles sans animation ou interaction complexe.
3. Les thèmes, filtres et états du formulaire fonctionnent sur mobile comme sur desktop.
4. Le design ne doit pas laisser croire que le portfolio est un site officiel d’EPITECH.

## Accessibility & Inclusion

Préserver les labels, les liens d’évitement, le focus visible, les contrastes AA, les annonces d’état et prefers-reduced-motion. Vérifier à partir de 320 px sans couper le contenu.
