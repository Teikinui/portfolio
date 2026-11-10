import { useEffect, useState } from 'react';
import styles from './Menu.module.css';

const links = [['accueil', 'Accueil'], ['projets', 'Projets'], ['competences', 'Compétences'], ['experience', 'Expérience'], ['contact', 'Contact']];

export default function Menu() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('accueil');
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#191815' : '#f7f3eb');
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
        <a className={styles.logo} href="#accueil" aria-label="Teikinui Decian, accueil" onClick={() => setOpen(false)}>TD<span>.</span></a>
        <nav id="main-navigation" className={`${styles.nav} ${open ? styles.open : ''}`} aria-label="Navigation principale">
          {links.map(([id, label]) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined} onClick={() => setOpen(false)}>{label}</a>)}
        </nav>
        <div className={styles.controls}>
          <button className={styles.theme} type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={theme === 'dark' ? 'Activer le thème clair' : 'Activer le thème sombre'} title={theme === 'dark' ? 'Thème clair' : 'Thème sombre'}>
            <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
          </button>
          <button id="menu-toggle" className={styles.menuButton} type="button" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? 'Fermer' : 'Menu'} <span aria-hidden="true">{open ? '×' : '☰'}</span></button>
        </div>
      </div>
    </header>
  );
}
