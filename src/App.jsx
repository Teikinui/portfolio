import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { domAnimation, LazyMotion, MotionConfig } from 'framer-motion';
import Accueil from './Accueil/Accueil';
import Competences from './Competences/Competences';
import Contact from './Contact/Contact';
import Parcours from './Parcours/Parcours';
import Projets from './Projets/Projets';
import Menu from './Menu/Menu';
import './App.css';

function Portfolio() {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const section = document.getElementById(hash.slice(1));
    section?.scrollIntoView({ behavior: 'instant' });
    section?.focus({ preventScroll: true });
  }, [hash]);

  return (
    <>
      <a className="skip-link" href="#contenu">Aller au contenu</a>
      <Menu />
      <main id="contenu" tabIndex={-1}>
        <Accueil />
        <Projets />
        <Competences />
        <Parcours />
        <Contact />
      </main>
      <footer className="site-footer container">
        <a href="#accueil" aria-label="Retour à l’accueil">TD<span>.</span></a>
        <p>© {new Date().getFullYear()} Teikinui Decian · Construit avec React.</p>
        <a href="#accueil">Retour en haut ↑</a>
      </footer>
    </>
  );
}

const legacyRoutes = { accueil: 'accueil', projets: 'projets', competences: 'competences', parcours: 'experience', contact: 'contact' };

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Routes>
            <Route path="/" element={<Portfolio />} />
            {Object.entries(legacyRoutes).map(([path, section]) => (
              <Route key={path} path={`/${path}`} element={<Navigate to={`/#${section}`} replace />} />
            ))}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </LazyMotion>
    </MotionConfig>
  );
}
