export const projects = [
  {
    number: '01', title: 'Job board — projet d’équipe',
    type: 'Projet académique · Fullstack', technologies: ['React', 'JavaScript', 'FastAPI', 'Python'],
    description: 'Développé en équipe pour la recherche d’alternance : j’ai réalisé le frontend avec React. Notre équipe a remporté le prix de la meilleure présentation à EPITECH.',
    nodes: ['Frontend React', 'API FastAPI', 'Présentation primée'], icons: ['code', 'server', 'award'],
    demo: null, github: 'https://github.com/Teikinui/projet-jobboard.git',
  },
  {
    number: '02', title: 'Sites et applications web sécurisés',
    type: 'Cloud & conteneurs', technologies: ['Docker', 'Cloudflare Zero Trust', 'Arcane'],
    description: 'Exposition de services Docker via Cloudflare, sécurisation des accès avec Zero Trust et supervision des conteneurs avec Arcane.',
    nodes: ['Cloudflare', 'Zero Trust', 'Docker · Arcane'], icons: ['cloud', 'shield', 'layers'],
    demo: null, github: null,
  },
  {
    number: '03', title: 'NAS personnel & accès distant',
    type: 'Auto-hébergement', technologies: ['Docker', 'WireGuard'],
    description: 'Services auto-hébergés sur un NAS personnel et accès distant sécurisé via WireGuard exécuté dans un conteneur Docker.',
    nodes: ['Accès distant', 'WireGuard', 'NAS personnel'], icons: ['monitor', 'shield', 'server'],
    demo: null, github: null,
  },
];
