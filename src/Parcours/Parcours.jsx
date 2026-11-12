import Section from '../components/Section';
import styles from './Parcours.module.css';

const experiences = [
  {
    period: 'Nov. 2024 — Août 2026',
    role: 'Technicien en sécurité opérationnelle',
    organization: 'Gouvernement de la Polynésie française',
    details: [
      'Gestion des accès Cloudflare Zero Trust et participation à la migration d’applications locales pour plus de 3 000 utilisateurs.',
      'Développement, adaptation et déploiement de scripts PowerShell via Microsoft Intune.',
      'Sécurisation des accès distants, traitement des tickets GLPI et analyse des alertes HarfangLab EDR et SOC.',
      'Sensibilisation des utilisateurs à la cybersécurité par des campagnes de phishing.',
    ],
  },
  {
    period: 'Janv. — Fév. 2024',
    role: 'Technicien support N1 / N2',
    organization: 'Chang Sang Consulting',
    details: [
      'Diagnostic et résolution d’incidents N1/N2 dans GLPI, dépannage et installations sur site.',
      'Préparation d’un serveur VMware avec NAS Synology et commutateur Cisco.',
    ],
  },
  {
    period: 'Mai — Juin 2023',
    role: 'Technicien administrateur réseau',
    organization: 'Électricité de Tahiti',
    details: [
      'Mise en place d’un serveur Rundeck sous Red Hat et adaptation de scripts d’administration pour leur automatisation.',
    ],
  },
];

export default function Parcours() {
  return (
    <Section id="experience" eyebrow="03 / Expériences & formation" title="Mon parcours" intro="Du support aux infrastructures sécurisées, apprendre en faisant.">
          <div className={styles.timeline}>
            {experiences.map((experience) => (
              <article className={styles.item} key={experience.role}>
                <p className={styles.period}>{experience.period}</p>
                <div>
                  <h3>{experience.role}</h3>
                  <p className={styles.organization}>{experience.organization}</p>
                  <ul>{experience.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
          <section className={styles.education} aria-labelledby="education-title">
            <h3 id="education-title">Apprendre et progresser</h3>
            <p>Formation</p>
            <p><strong>EPITECH Paris</strong> · Master of Science Cloud · sept. 2026 — en cours · fin prévisionnelle en 2029</p>
            <p><strong>BTS SIO, option SISR</strong> · Collège Lycée La Mennais, Tahiti · 2022 — 2024</p>
          </section>
    </Section>
  );
}
