import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation()

  return (
    <section id="contact" data-aos="fade-up">
      <h2>{t('nav.contact')}</h2>
      <div className="contact-info">
        <p><strong>DDr. Claudius Dörr MBA</strong></p>
        <p>FA für Anästhesiologie, Intensivmedizin, Schmerztherapie, Akupunktur</p>
        <p>Alser Straße 20/7, 1090 Wien</p>
        <p>Tel: +43 (0)1 336 13 36</p>
        <p>Fax: DW 14</p>
        <p>Email: Dr.ClaudiusDoerr@gmail.com</p>

        <a
          href="mailto:Dr.ClaudiusDoerr@gmail.com"
          className="btn-primary"
          style={{ marginTop: '1rem', display: 'inline-block' }}
        >
          {t('form.contactEmail') || 'E-Mail schreiben'}
        </a>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <iframe
          title="Ordination Dr. Dörr - Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2653.048499936543!2d16.3559086!3d48.2197104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d077383ba4b8f%3A0x8cbb3f3a20747bd7!2sAlser%20Str.%2020%2F7%2C%201090%20Wien%2C%20Austria!5e0!3m2!1sen!2srs!4v1716475958690!5m2!1sen!2srs"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  )
}

export default Contact
