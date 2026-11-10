import { m, useReducedMotion } from 'framer-motion';

export default function Section({ id, eyebrow, title, intro, children }) {
  const reduceMotion = useReducedMotion();
  return (
    <section id={id} className="section container" aria-labelledby={`${id}-title`} tabIndex={-1}>
      <m.div initial={reduceMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4 }}>
        <div className="section-heading">
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={`${id}-title`}>{title}</h2>
          {intro && <p className="intro">{intro}</p>}
        </div>
        {children}
      </m.div>
    </section>
  );
}
