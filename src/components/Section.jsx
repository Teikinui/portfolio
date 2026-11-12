export default function Section({ id, eyebrow, title, intro, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`} tabIndex={-1}>
      <div className="container">
        <div className="section-heading">
          <h2 id={`${id}-title`}>{title}</h2>
          {intro && <p className="intro">{intro}</p>}
        </div>
        {children}
        {eyebrow && <p className="section-note">{eyebrow.replace(/^\d+ \/ /, '')}</p>}
      </div>
    </section>
  );
}
