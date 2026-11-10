import styles from './Card.module.css';

export default function Card({ title, text, image }) {
  return (
    <article className={styles.card}>
      {image && <img className={styles.image} src={image} alt="" />}
      <div className={styles.content}>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </article>
  );
}
