import Section from '../components/Section';
import Icon from '../components/Icon';
import { projects } from '../data/projects';
import styles from './Projets.module.css';
import ProjectPreview from './ProjectPreview';

function ProjectCard({ project }) {
  return (
    <article tabIndex={-1} id={`projet-${project.number}`} className={`${styles.project} ${project.preview === 'candidatures' ? styles.featured : ''}`} aria-labelledby={`projet-${project.number}-title`}>
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
      <ProjectPreview project={project} />
    </article>
  );
}

export default function Projets() {
  return (
    <Section id="projets" eyebrow="01 / Expérimenter & construire" title="Projets">
      <div className={styles.projects}>{projects.map((project) => <ProjectCard key={project.number} project={project} />)}</div>
    </Section>
  );
}
