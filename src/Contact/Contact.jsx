import { useRef, useState } from 'react';
import Section from '../components/Section';
import Icon from '../components/Icon';
import styles from './Contact.module.css';

export default function Contact() {
  const [errors, setErrors] = useState({});
  const [draft, setDraft] = useState(null);
  const formRef = useRef(null);

  function prepareMessage(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const nextErrors = {};
    if (data.name.trim().length < 2) nextErrors.name = 'Indiquez votre nom (2 caractères minimum).';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) nextErrors.email = 'Indiquez une adresse e-mail valide.';
    if (data.message.trim().length < 20) nextErrors.message = 'Votre message doit contenir au moins 20 caractères.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setDraft(null);
      formRef.current.elements[Object.keys(nextErrors)[0]].focus();
      return;
    }
    const subject = encodeURIComponent(`Contact portfolio — ${data.name.trim()}`);
    const body = encodeURIComponent(`${data.message.trim()}\n\n${data.name.trim()}\n${data.email.trim()}`);
    setDraft(`mailto:teikinui.decian@gmail.com?subject=${subject}&body=${body}`);
  }

  return (
    <Section id="contact" eyebrow="04 / Échangeons" title="Un projet, une opportunité ?" intro="Je suis ouvert aux échanges autour du cloud, des infrastructures et des systèmes.">
      <div className={styles.layout}>
        <div className={styles.profile}>
          <p className={styles.note}>À la recherche d’une alternance en infrastructure cloud à partir de <strong>janvier 2027</strong> (2 à 3 ans), avec un objectif d’évolution vers l’architecture cloud.</p>
          <div className={styles.links}>
            <a href="mailto:teikinui.decian@gmail.com">teikinui.decian@gmail.com <Icon /></a>
            <a href="https://www.linkedin.com/in/teikinui-decian" target="_blank" rel="noopener noreferrer">Mon profil LinkedIn <Icon /><span className="sr-only"> (nouvel onglet)</span></a>
            <a href={`${import.meta.env.BASE_URL}CV/CV_Teikinui_DECIAN_Cloud.pdf`} download="CV_Teikinui_DECIAN_Cloud.pdf">Télécharger mon CV <Icon name="download" /></a>
          </div>
          <p className={styles.privacy}>Ce formulaire ne transmet et ne stocke aucune donnée. Il prépare un e-mail à envoyer depuis votre messagerie.</p>
        </div>
        <form className={styles.form} ref={formRef} onSubmit={prepareMessage} onChange={() => setDraft(null)} noValidate aria-label="Préparer un e-mail de contact" aria-describedby="form-help">
          <div className={styles.field}>
            <label htmlFor="contact-name">Votre nom <span>(obligatoire)</span></label>
            <input id="contact-name" name="name" autoComplete="name" required minLength={2} maxLength={100} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} placeholder="Votre nom" />
            {errors.name && <p className={styles.error} id="name-error">{errors.name}</p>}
          </div>
          <div className={styles.field}>
            <label htmlFor="contact-email">Votre e-mail <span>(obligatoire)</span></label>
            <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} placeholder="vous@exemple.fr" />
            {errors.email && <p className={styles.error} id="email-error">{errors.email}</p>}
          </div>
          <div className={styles.field}>
            <label htmlFor="contact-message">Votre message <span>(obligatoire)</span></label>
            <textarea id="contact-message" name="message" required minLength={20} maxLength={3000} rows={5} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-help message-error' : 'message-help'} placeholder="Parlons de votre projet ou de votre opportunité…" />
            <p className={styles.help} id="message-help">Entre 20 et 3 000 caractères.</p>
            {errors.message && <p className={styles.error} id="message-error">{errors.message}</p>}
          </div>
          <p className={styles.help} id="form-help">Aucun envoi automatique : vous confirmerez l’envoi dans votre application e-mail.</p>
          <button className="button" type="submit">Préparer le message <Icon /></button>
          <div aria-live="polite" aria-atomic="true">
            {Object.keys(errors).length > 0 && <p className={styles.error}>Veuillez corriger les champs indiqués.</p>}
            {draft && <div className={styles.confirmation}>
              <p><strong>Votre message est prêt.</strong> Aucun e-mail n’a encore été envoyé. Ouvrez votre messagerie, puis confirmez l’envoi depuis celle-ci.</p>
              <a className="button button-secondary" href={draft}>Ouvrir ma messagerie <Icon /></a>
              <p className={styles.help}>Si aucune application ne s’ouvre, écrivez directement à l’adresse ci-contre.</p>
            </div>}
          </div>
        </form>
      </div>
    </Section>
  );
}
