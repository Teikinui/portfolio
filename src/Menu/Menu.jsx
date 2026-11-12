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
        <a className={styles.logo} href="#accueil" aria-label="Teikinui Decian, accueil" onClick={() => setOpen(false)}><span className={styles.monogram}>TD<span>.</span></span><span className={styles.wordmark}>Teikinui Decian</span></a>
        <nav id="main-navigation" className={`${styles.nav} ${open ? styles.open : ''}`} aria-label="Navigation principale">
          {links.map(([id, label]) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined} onClick={() => setOpen(false)}>{label}</a>)}
        </nav>
        <div className={styles.controls}>
          <button className={styles.theme} type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={theme === 'dark' ? 'Activer le thème clair' : 'Activer le thème sombre'} title={theme === 'dark' ? 'Thème clair' : 'Thème sombre'}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {theme === 'dark' ? <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4m11.2 11.2L19 19M5 19l1.4-1.4M17.6 6.4 19 5" /></> : <path d="M20.5 13.1A8.5 8.5 0 0 1 10.9 3.5a8.5 8.5 0 1 0 9.6 9.6Z" />}
            </svg>
          </button>
          <button id="menu-toggle" className={styles.menuButton} type="button" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? 'Fermer' : 'Menu'} <span aria-hidden="true">{open ? '×' : '☰'}</span></button>
        </div>
      </div>
    </header>
  );
}
