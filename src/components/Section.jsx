export default function Section({ id, eyebrow, title, intro, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`} tabIndex={-1}>
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={`${id}-title`}>{title}</h2>
          {intro && <p className="intro">{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
