export const projects = [
  {
    number: '01', title: 'Sites et applications web sécurisés',
    type: 'Cloud & conteneurs', technologies: ['Docker', 'Cloudflare Zero Trust', 'Arcane'],
    description: 'Exposition de services Docker via Cloudflare, sécurisation des accès avec Zero Trust et supervision des conteneurs avec Arcane.',
    nodes: ['Cloudflare', 'Zero Trust', 'Docker · Arcane'], icons: ['cloud', 'shield', 'layers'],
    demo: null, github: null,
  },
  {
    number: '02', title: 'NAS personnel & accès distant',
    type: 'Auto-hébergement', technologies: ['Docker', 'WireGuard'],
    description: 'Services auto-hébergés sur un NAS personnel et accès distant sécurisé via WireGuard exécuté dans un conteneur Docker.',
    nodes: ['Accès distant', 'WireGuard', 'NAS personnel'], icons: ['monitor', 'shield', 'server'],
    demo: null, github: null,
  },
  {
    number: '03', title: 'Job board — projet d’équipe',
    type: 'Projet académique · Fullstack', technologies: ['React', 'JavaScript', 'FastAPI', 'Python'],
    description: 'Conception d’un job board de A à Z en équipe : j’ai développé le frontend avec React et le projet utilisait une API FastAPI. Notre équipe a remporté le prix de la meilleure présentation.',
    nodes: ['Frontend React', 'API FastAPI', 'Présentation primée'], icons: ['code', 'server', 'award'],
    demo: null, github: 'https://github.com/Teikinui/projet-jobboard.git',
  },
];
