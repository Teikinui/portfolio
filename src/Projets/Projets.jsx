import { useState } from 'react';
import Section from '../components/Section';
import styles from './Projets.module.css';

const projects = [
  {
    number: '01', title: 'Sites et applications web sécurisés',
    type: 'Cloud & conteneurs', technologies: ['Docker', 'Cloudflare Zero Trust', 'Arcane'],
    description: 'Exposition de services Docker via Cloudflare, sécurisation des accès avec Zero Trust et supervision des conteneurs avec Arcane.',
    nodes: ['Cloudflare', 'Zero Trust', 'Docker · Arcane'],
    demo: null, github: null,
  },
  {
    number: '02', title: 'NAS personnel & accès distant',
    type: 'Auto-hébergement', technologies: ['Docker', 'WireGuard'],
    description: 'Services auto-hébergés sur un NAS personnel et accès distant sécurisé via WireGuard exécuté dans un conteneur Docker.',
    nodes: ['Accès distant', 'WireGuard', 'NAS personnel'],
    demo: null, github: null,
  },
  {
    number: '03', title: 'Job board — projet d’équipe',
    type: 'Projet académique · Fullstack', technologies: ['React', 'JavaScript', 'FastAPI', 'Python'],
    description: 'Conception d’un job board de A à Z en équipe : j’ai développé le frontend avec React et le projet utilisait une API FastAPI. Notre équipe a remporté le prix de la meilleure présentation.',
    nodes: ['Frontend React', 'API FastAPI', 'Présentation primée'],
    demo: null, github: 'https://github.com/Teikinui/projet-jobboard.git',
  },
];
const filters = ['Tous', ...new Set(projects.flatMap((project) => project.technologies))];

function ProjectCard({ project }) {
  return (
    <article className={styles.project}>
      <div className={styles.preview}>
        <div className={styles.previewHeading}><span>{project.type}</span><span aria-hidden="true">/{project.number}</span></div>
        <div className={styles.diagram} role="img" aria-label={`Schéma de principe : ${project.nodes.join(' vers ')}`}>
          {project.nodes.map((node, index) => <div className={styles.node} key={node}><span aria-hidden="true">{['↗', '◇', '▤'][index]}</span>{node}</div>)}
        </div>
        <span className={styles.previewNote}>Schéma de principe · Infrastructure personnelle</span>
      </div>
      <div className={styles.content}>
        <ul className="badges" aria-label="Technologies">{project.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className={styles.links}>
          {project.demo ? <a href={project.demo} target="_blank" rel="noopener noreferrer">Voir la démo ↗</a> : <span>Démo non publique</span>}
          {project.github ? <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a> : <span>Dépôt non renseigné</span>}
        </div>
      </div>
    </article>
  );
}

export default function Projets() {
  const [filter, setFilter] = useState('Tous');
  const visible = projects.filter((project) => filter === 'Tous' || project.technologies.includes(filter));
  return (
    <Section id="projets" eyebrow="01 / Expérimenter & construire" title="Projets personnels" intro="Quelques projets autour de l’infrastructure, de l’auto-hébergement et de l’accès sécurisé.">
      <div className={styles.filters} role="group" aria-label="Filtrer les projets par technologie">
        {filters.map((tech) => <button key={tech} type="button" aria-pressed={filter === tech} onClick={() => setFilter(tech)}>{tech}</button>)}
      </div>
      <p className="sr-only" role="status">{visible.length} projet{visible.length > 1 ? 's' : ''} affiché{visible.length > 1 ? 's' : ''}</p>
      <div className={styles.projects}>{visible.map((project) => <ProjectCard key={project.number} project={project} />)}</div>
    </Section>
  );
}
