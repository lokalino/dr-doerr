import { useEffect, useState } from 'react'
import claudiusImg from '../assets/claudius.jpg'
import katharinaImg from '../assets/katharina.jpg'
import DoctorModal from './DoctorModal'
import claudiusBio from '../data/claudiusBio'
import katharinaBio from '../data/katharinaBio'
import SimpleAppointmentForm from './SimpleAppointmentForm'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n'

const About = () => {
  const [openModal, setOpenModal] = useState(null)
  const [formDoctorId, setFormDoctorId] = useState(null)
  const [enlargedImg, setEnlargedImg] = useState(null)
  const { t } = useTranslation()

  const doctors = [
    {
      id: 'katharina',
      name: 'Priv.-Doz. DDr. Katharina Dörr MBA',
      short: 'Fachärztin für Innere Medizin, Kardiologie & Nephrologie.',
      img: katharinaImg,
      bio: katharinaBio
    },
    {
      id: 'claudius',
      name: 'DDr. Claudius Dörr MBA',
      short: 'Facharzt für Anästhesiologie, Intensivmedizin & Schmerztherapie.',
      img: claudiusImg,
      bio: claudiusBio
    }
  ]

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setEnlargedImg(null)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <section id="team" data-aos="fade-up">
      <h2>{t('nav.team')}</h2>
      <div className="about-grid">
        {doctors.map((doc, index) => (
          <div
            className="doctor-card"
            key={doc.id}
            data-aos="zoom-in"
            data-aos-delay={index * 150}
            data-aos-offset="100"
          >
            <img
              src={doc.img}
              alt={doc.name}
              onClick={() => setEnlargedImg({ src: doc.img, name: doc.name })}
              style={{ cursor: 'zoom-in' }}
            />
            <h3>{doc.name}</h3>
            <p>{doc.short}</p>

            <div className="doctor-buttons">
              <button onClick={() => setOpenModal(doc.id)} className="btn-outline">
                ℹ️ {t('showMore')}
              </button>
              <button
                onClick={() => {
                  setFormDoctorId(prev => prev === doc.id ? null : doc.id)
                  setTimeout(() => {
                    const el = document.getElementById(`form-${doc.id}`)
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
                  }, 100)
                }}
                className="btn-primary"
              >
                📅 {formDoctorId === doc.id ? 'Verstecken' : t('form.book')}
              </button>
            </div>

            {formDoctorId === doc.id && (
              <div id={`form-${doc.id}`} style={{ marginTop: '1rem' }}>
                <SimpleAppointmentForm doctorName={doc.name} onSuccess={() => setFormDoctorId(null)} />
              </div>
            )}
          </div>
        ))}
      </div>

      {doctors.map(doc => (
        <DoctorModal
          key={doc.id}
          open={openModal === doc.id}
          onClose={() => setOpenModal(null)}
          title={doc.name}
          content={doc.bio[i18n.language] || doc.bio.de}
        />
      ))}

      {enlargedImg && (
        <div className="image-modal-overlay" onClick={() => setEnlargedImg(null)}>
          <button className="image-modal-close" onClick={() => setEnlargedImg(null)}>✕</button>
          <img src={enlargedImg.src} alt="doctor large" className="image-modal-content" />
          <p className="image-modal-caption">{enlargedImg.name}</p>
        </div>
      )}
    </section>
  )
}

export default About
