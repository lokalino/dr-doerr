import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation()

  return (
    <section id="contact" data-aos="fade-up">
      <h2>{t('nav.contact')}</h2>
      <div className="contact-info">
        <p><strong>Ordination Med Dörr</strong></p>
        <p>
          FA für Innere Medizin, Kardiologie & Nephrologie, Anästhesiologie,
          Intensivmedizin, Schmerztherapie, Akupunktur
        </p>
        <p>Laurenzgasse 9/GL1, 1050 Wien</p>
        <p>Tel: +43 660 611 05 15</p>
        

        <p>
          📧 <strong>Dr. Claudius Dörr:</strong>{' '}
          <a href="mailto:dr.claudiusdoerr@gmail.com">dr.claudiusdoerr@gmail.com</a>
        </p>
        <p>
          📧 <strong>Dr. Katharina Dörr:</strong>{' '}
          <a href="mailto:dr.katharinadoerr@gmail.com">dr.katharinadoerr@gmail.com</a>
        </p>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <a href="mailto:dr.claudiusdoerr@gmail.com" className="btn-outline">
            {t('form.book')} Dr.Claudius
          </a>
          <a href="mailto:dr.katharinadoerr@gmail.com" className="btn-primary">
            {t('form.book')} Dr.Katharina
          </a>
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <iframe
          title="Ordination Dr. Dörr - Location"
          src="https://https://www.google.com/maps/search/Laurenzgasse+9%2FGL1,+1050+Wien/@48.1847356,16.363841,17z?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D"
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
