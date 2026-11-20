import { useState } from 'react';
import { m, useReducedMotion } from 'framer-motion';
import Icon from '../components/Icon';
import ProjectPreview from '../Projets/ProjectPreview';
import { projects } from '../data/projects';
import styles from './Accueil.module.css';

const names = { '01': 'Job board', '02': 'Cloud sécurisé', '03': 'NAS personnel', '04': 'TripTrap', '05': 'Candidatures' };

export default function Accueil({ onProjectSelect }) {
  const [selected, setSelected] = useState('05');
  const reduceMotion = useReducedMotion();
  const current = projects.find(project => project.number === selected);

  function navigateTabs(event, index) {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % projects.length;
    else if (event.key === 'ArrowLeft') next = (index + projects.length - 1) % projects.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = projects.length - 1;
    else return;
    event.preventDefault();
    setSelected(projects[next].number);
    event.currentTarget.parentElement.querySelectorAll('[role="tab"]')[next].focus();
  }

  return (
    <section id="accueil" className={styles.hero} aria-labelledby="home-title" tabIndex={-1}>
      <div className={`${styles.cover} container`}>
        <div className={styles.introduction}>
          <p className={styles.availability}><span aria-hidden="true" /> Alternance · Janvier 2027 · 2 à 3 ans</p>
          <m.h1 id="home-title" initial={false} animate={reduceMotion ? {} : { y: [8, 0] }} transition={{ duration: .5, ease: [.2, 0, 0, 1] }}>Construire des infrastructures <span>fiables et utiles.</span></m.h1>
        </div>
        <div className={styles.gallery}>
          <div className={styles.tabs} role="tablist" aria-label="Choisir une réalisation à découvrir">
            {projects.map((project, index) => <button type="button" role="tab" id={`showcase-tab-${project.number}`} key={project.number}
              aria-selected={selected === project.number} aria-controls="showcase-panel" tabIndex={selected === project.number ? 0 : -1}
              onClick={() => setSelected(project.number)} onKeyDown={event => navigateTabs(event, index)}>{names[project.number]}</button>)}
          </div>
          <div id="showcase-panel" className={styles.exhibit} role="tabpanel" aria-labelledby={`showcase-tab-${selected}`}>
            <div className={styles.exhibitHeading}>
              <div><h2>{current.title}</h2><p>{current.type}</p></div>
              <a className={styles.openProject} href={`#projet-${selected}`} onClick={onProjectSelect}>Voir le projet <Icon size={18} /></a>
            </div>
            <div className={styles.visual}><ProjectPreview key={selected} project={current} priority /></div>
          </div>
        </div>
        <div className={styles.bio}>
          <p className={styles.description}>Étudiant en Master of Science Cloud à EPITECH Paris, je recherche une alternance dès janvier 2027. Fort de près de deux ans d’expérience en cybersécurité, j’ai contribué à une migration Cloudflare Zero Trust pour plus de 3 000 utilisateurs. Mes projets Docker et de virtualisation reflètent mon envie de construire des infrastructures fiables et sécurisées : une approche concrète que je souhaite mettre au service de votre équipe.</p>
          <div className={styles.copy}>
            <div className="actions">
              <a className="button" href="#projets">Voir mes projets <Icon /></a>
              <a className="button button-secondary" href={`${import.meta.env.BASE_URL}CV/CV_Teikinui_DECIAN_Cloud.pdf`} download="CV_Teikinui_DECIAN_Cloud.pdf">Télécharger mon CV <Icon name="download" /></a>
            </div>
            <div className={styles.socials} aria-label="Me retrouver">
              <a className="text-link" href="https://github.com/teikinui" target="_blank" rel="noopener noreferrer">GitHub <Icon size={16} /><span className="sr-only"> (nouvel onglet)</span></a>
              <a className="text-link" href="https://www.linkedin.com/in/teikinui-decian" target="_blank" rel="noopener noreferrer">LinkedIn <Icon size={16} /><span className="sr-only"> (nouvel onglet)</span></a>
              <a className="text-link" href="mailto:teikinui.decian@gmail.com">E-mail <Icon size={16} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
