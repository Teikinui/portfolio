import Card from '../components/Card/Card';
import Section from '../components/Section';
import styles from './Competences.module.css';

const categories = [
  { title: 'Développement', number: '01', skills: [
    { title: 'Web & programmation', text: 'HTML, CSS, JavaScript, React, Python, Java.' },
    { title: 'Automatisation', text: 'PowerShell, Bash, Rundeck, n8n. Déploiement de scripts et d’applications via Intune.' },
    { title: 'Outils de développement', text: 'Git, Forgejo.' },
  ] },
  { title: 'Cloud, systèmes & sécurité', number: '02', skills: [
    { title: 'Cloudflare & accès', text: 'Exposition de sites et d’applications web, gestion des accès avec Cloudflare Zero Trust.' },
    { title: 'Conteneurs & virtualisation', text: 'Docker (Arcane, projets personnels), VMware, Proxmox, Hyper-V.' },
    { title: 'Systèmes, réseaux & sécurité', text: 'Linux (Ubuntu, Debian), Microsoft Entra ID, Intune, Fortinet, OPNsense, HarfangLab, GLPI, WireGuard.' },
  ] },
  { title: 'Exploitation & outils', number: '03', skills: [
    { title: 'Support & opérations', text: 'Support N1/N2, GLPI, analyse des alertes EDR/SOC et maintien en condition opérationnelle.' },
    { title: 'Projets assistés par IA', text: 'Claude Code, Codex et Pi Agent, utilisés pour concevoir des solutions déployées sous Docker.' },
    { title: 'Certifications en cours', text: 'Google Cloud Computing Foundations et AWS Cloud Foundations.' },
  ] },
];

export default function Competences() {
  return (
    <Section id="competences" eyebrow="02 / Savoir-faire" title="Mes compétences" intro="Des bases techniques acquises en formation et sur le terrain, que je continue à approfondir.">
      <div className={styles.categories}>
        {categories.map((category) => <div className={styles.category} key={category.title}>
          <div className={styles.title}><span>{category.number}</span><h3>{category.title}</h3></div>
          <div className={styles.cards}>{category.skills.map((skill) => <Card key={skill.title} {...skill} />)}</div>
        </div>)}
      </div>
    </Section>
  );
}
