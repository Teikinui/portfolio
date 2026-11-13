import { m, useReducedMotion } from 'framer-motion';
import Icon from '../components/Icon';
import { projects } from '../data/projects';
import styles from './Accueil.module.css';

export default function Accueil({ onProjectSelect }) {
  const reduceMotion = useReducedMotion();
  return (
    <section id="accueil" className={styles.hero} aria-labelledby="home-title" tabIndex={-1}>
      <div className={`${styles.cover} container`}>
        <h1 id="home-title">Construire des infrastructures <span>fiables et utiles.</span></h1>
        <m.div className={styles.copy} initial={false} animate={reduceMotion ? {} : { y: [10, 0] }} transition={{ duration: .6, ease: [.16, 1, .3, 1] }}>
          <p className={styles.availability}><span aria-hidden="true" /> Alternance · Janvier 2027 · 2 à 3 ans</p>
          <p className={styles.description}>Étudiant en Master of Science Cloud à EPITECH Paris, je recherche une alternance dès janvier 2027. Fort de près de deux ans d’expérience en cybersécurité, j’ai contribué à une migration Cloudflare Zero Trust pour plus de 3 000 utilisateurs. Mes projets Docker et de virtualisation reflètent mon envie de construire des infrastructures fiables et sécurisées : une approche concrète que je souhaite mettre au service de votre équipe.</p>
          <div className="actions">
            <a className="button" href="#projets">Voir mes projets <Icon /></a>
            <a className="button button-secondary" href={`${import.meta.env.BASE_URL}CV/CV_Teikinui_DECIAN_Cloud.pdf`} download="CV_Teikinui_DECIAN_Cloud.pdf">Télécharger mon CV <Icon name="download" /></a>
          </div>
          <div className={styles.socials} aria-label="Me retrouver">
            <a className="text-link" href="https://github.com/teikinui" target="_blank" rel="noopener noreferrer">GitHub <Icon size={16} /><span className="sr-only"> (nouvel onglet)</span></a>
            <a className="text-link" href="https://www.linkedin.com/in/teikinui-decian" target="_blank" rel="noopener noreferrer">LinkedIn <Icon size={16} /><span className="sr-only"> (nouvel onglet)</span></a>
            <a className="text-link" href="mailto:teikinui.decian@gmail.com">E-mail <Icon size={16} /></a>
          </div>
        </m.div>
        <figure className={styles.portrait}>
          <img src={`${import.meta.env.BASE_URL}photo_profil.webp`} alt="Portrait de Teikinui Decian" width="640" height="794" fetchPriority="high" />
          <figcaption><strong>Teikinui Decian</strong><span>Cloud · Infrastructure · Sécurité</span></figcaption>
        </figure>
        <nav className={styles.projectIndex} aria-label="Accès aux projets">
          {projects.map(project => <a key={project.number} href={`#projet-${project.number}`} onClick={onProjectSelect}><span>{project.title}</span><Icon /></a>)}
        </nav>
        <div className={styles.highlights} aria-label="Domaines d’intérêt"><span>Cloud & infrastructure</span><span>Systèmes & réseaux</span><span>Sécurité</span></div>
      </div>
    </section>
  );
}
