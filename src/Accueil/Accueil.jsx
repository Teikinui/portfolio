import { m, useReducedMotion } from 'framer-motion';
import styles from './Accueil.module.css';

export default function Accueil() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="accueil" className={`${styles.hero} container`} aria-labelledby="home-title" tabIndex={-1}>
      <m.div className={styles.copy} initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .52, ease: [.22, 1, .36, 1] }}>
        <p className={styles.availability}><span aria-hidden="true" /> Alternance · Janvier 2027 · 2 à 3 ans</p>
        <p className="eyebrow">Bonjour, moi c’est Teikinui.</p>
        <h1 id="home-title">Construire des infrastructures <span>fiables et utiles.</span></h1>
        <p className={styles.description}>Étudiant en Master of Science Cloud à EPITECH Paris, je recherche une alternance en infrastructure cloud, avec pour objectif de devenir architecte cloud. Je m’intéresse aux systèmes, à la sécurité et à l’automatisation.</p>
        <div className="actions">
          <a className="button" href="#projets">Voir mes projets <span aria-hidden="true">↗</span></a>
          <a className="button button-secondary" href={`${import.meta.env.BASE_URL}CV/CV_Teikinui_DECIAN_Cloud.pdf`} download="CV_Teikinui_DECIAN_Cloud.pdf">Télécharger mon CV <span aria-hidden="true">↓</span></a>
        </div>
        <div className={styles.socials} aria-label="Me retrouver">
          <a className="text-link" href="https://github.com/teikinui" target="_blank" rel="noopener noreferrer">GitHub ↗<span className="sr-only"> (nouvel onglet)</span></a>
          <a className="text-link" href="https://www.linkedin.com/in/teikinui-decian" target="_blank" rel="noopener noreferrer">LinkedIn ↗<span className="sr-only"> (nouvel onglet)</span></a>
          <a className="text-link" href="mailto:teikinui.decian@gmail.com">E-mail ↗</a>
        </div>
      </m.div>
      <div className={styles.visual}>
        <figure className={styles.portrait}>
          <img src={`${import.meta.env.BASE_URL}photo_profil.webp`} alt="Portrait de Teikinui Decian" width="640" height="794" fetchPriority="high" />
          <figcaption className="sr-only">Teikinui Decian · Cloud · Infrastructure · Sécurité</figcaption>
        </figure>
      </div>
      <div className={styles.highlights} aria-label="Domaines d’intérêt">
        <span><small>01 /</small> Cloud & infrastructure</span>
        <span><small>02 /</small> Systèmes & réseaux</span>
        <span><small>03 /</small> Sécurité</span>
      </div>
    </section>
  );
}
