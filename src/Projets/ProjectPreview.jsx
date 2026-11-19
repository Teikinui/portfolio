import Icon from '../components/Icon';
import TripTrapPreview from './TripTrapPreview';
import styles from './ProjectPreview.module.css';

const logo = (name) => `${import.meta.env.BASE_URL}projects/infrastructure/${name}.svg`;

function JobBoardPreview({ href }) {
  return (
    <a className={`${styles.frame} ${styles.jobboard}`} href={href} target="_blank" rel="noopener noreferrer"
      aria-label="Voir le job board sur GitHub (nouvel onglet). Vue illustrative avec deux annonces du jeu de démonstration du dépôt.">
      <div aria-hidden="true">
        <div className={styles.browserBar}><span className={styles.brand}>tanière</span><span>Vue illustrative <Icon size={16} /></span></div>
        <div className={styles.board}>
          <div className={styles.boardTitle}>La recherche d’emploi,<br />au même endroit.</div>
          <div className={styles.search}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="10" cy="10" r="6" /><path d="m15 15 6 6" /></svg> Mot-clé, lieu, contrat</div>
          <div className={styles.offer}><span className={styles.initial}>A</span><div><strong>Développeur Full-Stack</strong><span>Acme Tech · Paris · CDI</span></div><Icon size={18} /></div>
          <div className={styles.offer}><span className={styles.initial}>A</span><div><strong>Stage Développeur Backend</strong><span>Acme Tech · Paris · Stage</span></div><Icon size={18} /></div>
          <div className={styles.boardFooter}><span>Données de démonstration</span><span className={styles.application}>Voir le code <Icon size={14} /></span></div>
        </div>
      </div>
    </a>
  );
}

function CloudPreview() {
  return (
    <div className={`${styles.frame} ${styles.cloud}`} role="img" aria-label="Schéma de principe : un navigateur accède aux sites et applications Docker via Cloudflare Zero Trust. Arcane supervise les conteneurs.">
      <svg className={styles.schema} viewBox="0 0 480 320" fill="none" aria-hidden="true" focusable="false">
        <text x="28" y="38" className={styles.diagramTitle}>Un accès, une vérification.</text>
        <path d="M100 155H158M272 155H324" className={styles.route} />
        <path d="m150 150 8 5-8 5m166-10 8 5-8 5" className={styles.route} />
        <rect x="26" y="127" width="74" height="48" rx="5" className={styles.device} />
        <path d="M63 175v12m-16 0h32M38 140h50m-50 10h30" className={styles.detail} />
        <text x="63" y="218" textAnchor="middle" className={styles.label}>Navigateur</text>
        <rect x="158" y="86" width="114" height="138" rx="12" className={styles.gateway} />
        <image href={logo('cloudflare')} x="191" y="103" width="48" height="36" />
        <path d="m215 150 15 6v11c0 12-15 19-15 19s-15-7-15-19v-11l15-6Z" className={styles.shield} />
        <path d="m208 168 5 5 9-11" className={styles.shield} />
        <text x="215" y="207" textAnchor="middle" className={styles.label}>Zero Trust</text>
        <text x="215" y="251" textAnchor="middle" className={styles.secondary}>Cloudflare</text>
        <rect x="324" y="86" width="130" height="138" rx="8" className={styles.serviceHost} />
        <image href={logo('docker')} x="338" y="99" width="28" height="28" />
        <text x="375" y="120" className={styles.label}>Docker</text>
        <rect x="338" y="141" width="102" height="29" rx="4" className={styles.service} />
        <rect x="338" y="180" width="102" height="29" rx="4" className={styles.service} />
        <text x="389" y="162" textAnchor="middle" className={styles.secondary}>Sites web</text>
        <text x="389" y="201" textAnchor="middle" className={styles.secondary}>Applications</text>
        <path d="M389 224v34H303" className={styles.supervision} />
        <text x="452" y="289" textAnchor="end" className={styles.secondary}>Arcane · supervision</text>
      </svg>
    </div>
  );
}

function NasPreview() {
  return (
    <div className={`${styles.frame} ${styles.nas}`} role="img" aria-label="Schéma de principe : un ordinateur distant rejoint le NAS personnel par un tunnel WireGuard. WireGuard est exécuté dans Docker sur le NAS, qui héberge les services.">
      <svg className={styles.schema} viewBox="0 0 480 320" fill="none" aria-hidden="true" focusable="false">
        <text x="28" y="38" className={styles.diagramTitle}>Chez soi, même à distance.</text>
        <rect x="30" y="123" width="82" height="59" rx="5" className={styles.device} />
        <path d="M38 174h66M20 191h102l-7 8H27l-7-8Z" className={styles.detail} />
        <path d="m60 143-8 8 8 8m21-16 8 8-8 8" className={styles.detail} />
        <text x="71" y="233" textAnchor="middle" className={styles.label}>À distance</text>
        <path d="M124 154H254" className={styles.tunnelOuter} />
        <path d="M124 154H254" className={styles.tunnelInner} />
        <rect x="165" y="141" width="22" height="24" rx="4" className={styles.lock} />
        <path d="M170 141v-5a6 6 0 0 1 12 0v5m-6 10v5" className={styles.lockDetail} />
        <text x="182" y="110" textAnchor="middle" className={styles.secondary}>Tunnel</text>
        <text x="182" y="127" textAnchor="middle" className={styles.secondary}>chiffré</text>
        <rect x="254" y="78" width="198" height="214" rx="12" className={styles.nasHost} />
        <text x="276" y="110" className={styles.label}>NAS personnel</text>
        <path d="M276 128h154" className={styles.hostDivider} />
        <rect x="274" y="146" width="158" height="90" rx="6" className={styles.container} />
        <image href={logo('docker')} x="286" y="157" width="25" height="25" />
        <text x="320" y="177" className={styles.secondary}>Docker</text>
        <rect x="285" y="193" width="136" height="32" rx="4" className={styles.wireguard} />
        <image href={logo('wireguard')} x="294" y="198" width="22" height="22" />
        <text x="323" y="215" className={styles.wireguardLabel}>WireGuard</text>
        <text x="353" y="257" textAnchor="middle" className={styles.secondary}>Services<tspan x="353" dy="22">auto-hébergés</tspan></text>
      </svg>
    </div>
  );
}

function CandidaturesPreview() {
  const base = `${import.meta.env.BASE_URL}projects/candidatures/`;
  return (
    <a className={`${styles.frame} ${styles.screenshot}`} href={`${base}interface-complete.png`}
      target="_blank" rel="noopener noreferrer"
      aria-label="Agrandir la capture réelle de Candidatures (nouvel onglet), avec des données fictives">
      <span className={styles.captureToolbar}>
        <span>Capture réelle · Données fictives</span>
        <span className={styles.enlarge}>Agrandir <Icon size={18} /></span>
      </span>
      <img className={styles.captureImage} src={`${base}interface-kanban.jpg`}
        alt="Interface Kanban de Candidatures : recherche, filtres et cinq colonnes de suivi, de À postuler à Refusé."
        width="1440" height="900" loading="lazy" decoding="async" />
    </a>
  );
}

export default function ProjectPreview({ project }) {
  switch (project.preview) {
    case 'jobboard': return <JobBoardPreview href={project.github} />;
    case 'cloud': return <CloudPreview />;
    case 'nas': return <NasPreview />;
    case 'triptrap': return <TripTrapPreview href={project.github} />;
    case 'candidatures': return <CandidaturesPreview />;
    default: return null;
  }
}
