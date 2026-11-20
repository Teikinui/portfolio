import { useId } from 'react';
import Icon from '../components/Icon';
import styles from './TripTrapPreview.module.css';

const asset = (name) => `${import.meta.env.BASE_URL}projects/triptrap/${name}.png`;

export default function TripTrapPreview({ href }) {
  const id = useId();
  return (
    <a className={styles.preview} href={href} target="_blank" rel="noopener noreferrer">
      {/* Composition illustrative à partir des sprites réels, pas une capture de partie. */}
      <div className={styles.artwork} aria-hidden="true">
        <svg className={styles.scene} viewBox="0 0 480 300" fill="none" focusable="false">
          <defs>
            <pattern id={`triptrap-sand-${id}`} width="32" height="32" patternUnits="userSpaceOnUse">
              <image href={asset('floor_tahiti')} width="32" height="32" />
            </pattern>
            <pattern id={`triptrap-earth-${id}`} width="32" height="32" patternUnits="userSpaceOnUse">
              <image href={asset('wall_tahiti')} width="32" height="32" />
            </pattern>
          </defs>
          <image href={asset('bg_tahiti')} x="-27" width="534" height="300" />
          <path d="M0 268H128V300H0ZM320 268H480V300H320Z" fill={`url(#triptrap-earth-${id})`} />
          <path d="M0 252H128V268H0ZM320 252H480V268H320Z" fill={`url(#triptrap-sand-${id})`} />
          <path d="M112 208H208V224H112ZM280 164H376V180H280Z" fill={`url(#triptrap-sand-${id})`} />
          <image href={asset('player_jump_3')} x="176" y="100" width="112" height="112" />
          <image href={asset('goal_tahiti')} x="302" y="112" width="64" height="64" />
          <image href={asset('coconut')} x="140" y="112" width="40" height="40" />
          <image href={asset('starfish')} x="390" y="210" width="48" height="48" />
        </svg>
      </div>
      <div className={styles.heading}>
        <span className={styles.title}>TripTrap<span className={styles.location}>Tahiti</span></span>
        <span className={styles.arrow}><Icon size={20} /></span>
        <span className="sr-only">Découvrir le jeu sur GitHub (nouvel onglet). Illustration avec les sprites du niveau Tahiti.</span>
      </div>
    </a>
  );
}
