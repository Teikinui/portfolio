import { useEffect, useState } from 'react';
import { AnimatePresence, m, useReducedMotion } from 'framer-motion';
import styles from './Menu.module.css';
import Icon from '../components/Icon';

const links = [['accueil', 'Accueil'], ['projets', 'Projets'], ['competences', 'Compétences'], ['experience', 'Expérience'], ['contact', 'Contact']];

function StateIcon({ name, size = 20 }) {
  const reduceMotion = useReducedMotion();
  const hidden = reduceMotion
    ? { opacity: 0 }
    : { opacity: 0, scale: 0.25, filter: 'blur(4px)' };
  return (
    <span className={styles.stateIcon} style={{ width: size, height: size }} aria-hidden="true">
      <AnimatePresence initial={false}>
        <m.span key={name} className={styles.iconLayer} initial={hidden}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }} exit={hidden}
          transition={reduceMotion ? { duration: 0 } : { type: 'spring', duration: 0.3, bounce: 0 }}>
          <Icon name={name} size={size} />
        </m.span>
      </AnimatePresence>
    </span>
  );
}

export default function Menu() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('accueil');
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', getComputedStyle(document.documentElement).getPropertyValue('--color-paper').trim());
    try { localStorage.setItem('portfolio-theme', theme); } catch { /* Storage may be blocked. */ }
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-15% 0px -60% 0px' });
    links.forEach(([id]) => { const section = document.getElementById(id); if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const dismiss = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        document.getElementById('menu-toggle')?.focus();
      }
    };
    document.addEventListener('keydown', dismiss);
    return () => document.removeEventListener('keydown', dismiss);
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={`${styles.bar} container`}>
        <a className={styles.logo} href="#accueil" onClick={() => setOpen(false)}><span className={styles.monogram}>TD<span>.</span></span><span className={styles.wordmark}>Teikinui Decian<small>EPITECH Paris</small></span></a>
        <nav id="main-navigation" className={`${styles.nav} ${open ? styles.open : ''}`} aria-label="Navigation principale">
          {links.map(([id, label]) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined} onClick={() => setOpen(false)}>{label}</a>)}
        </nav>
        <div className={styles.controls}>
          <a className={styles.cv} href={`${import.meta.env.BASE_URL}CV/CV_Teikinui_DECIAN_Cloud.pdf`} download="CV_Teikinui_DECIAN_Cloud.pdf">Mon CV <Icon name="download" size={16} /></a>
          <button className={styles.theme} type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={theme === 'dark' ? 'Activer le thème clair' : 'Activer le thème sombre'} title={theme === 'dark' ? 'Thème clair' : 'Thème sombre'}>
            <StateIcon name={theme === 'dark' ? 'sun' : 'moon'} />
          </button>
          <button id="menu-toggle" className={styles.menuButton} type="button" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? 'Fermer' : 'Menu'} <StateIcon name={open ? 'close' : 'menu'} size={18} /></button>
        </div>
      </div>
    </header>
  );
}
