import Section from '../components/Section';
import Icon from '../components/Icon';
import { projects } from '../data/projects';
import styles from './Projets.module.css';

const filters = ['Tous', ...new Set(projects.flatMap((project) => project.technologies))];

function ProjectCard({ project }) {
  return (
    <article id={`projet-${project.number}`} className={styles.project} aria-labelledby={`projet-${project.number}-title`}>
      <div className={styles.content}>
        <h3 id={`projet-${project.number}-title`}>{project.title}</h3>
        <p className={styles.type}>{project.type}</p>
        <p className={styles.description}>{project.description}</p>
        <ul className="badges" aria-label="Technologies">{project.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul>
        <div className={styles.links}>
          {project.demo ? <a className="text-link" href={project.demo} target="_blank" rel="noopener noreferrer">Voir la démo <Icon size={16} /></a> : <span>Démo non publique</span>}
          {project.github ? <a className="text-link" href={project.github} target="_blank" rel="noopener noreferrer">GitHub <Icon size={16} /></a> : <span>Dépôt non renseigné</span>}
        </div>
      </div>
      <div className={styles.preview}>
        <div className={styles.diagram} role="img" aria-label={`Schéma de principe : ${project.nodes.join(' vers ')}`}>
          {project.nodes.map((node, index) => <div className={styles.node} key={node}><Icon name={project.icons[index]} size={28} /><span>{node}</span></div>)}
        </div>
      </div>
    </article>
  );
}

export default function Projets({ filter, onFilterChange }) {
  const visible = projects.filter((project) => filter === 'Tous' || project.technologies.includes(filter));
  return (
    <Section id="projets" eyebrow="01 / Expérimenter & construire" title="Projets" intro="Projets personnels et académiques autour du cloud, du développement et des infrastructures.">
      <div className={styles.filters} role="group" aria-label="Filtrer les projets par technologie">
        {filters.map((tech) => <button key={tech} type="button" aria-pressed={filter === tech} onClick={() => onFilterChange(tech)}>{tech}</button>)}
      </div>
      <p className="sr-only" role="status">{visible.length} projet{visible.length > 1 ? 's' : ''} affiché{visible.length > 1 ? 's' : ''}</p>
      <div className={styles.projects}>{visible.map((project) => <ProjectCard key={project.number} project={project} />)}</div>
    </Section>
  );
}
