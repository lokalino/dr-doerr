import { useEffect, useState } from 'react'
import claudiusImg from '../assets/claudius.jpg'
import katharinaImg from '../assets/katharina.jpg'
import DoctorModal from './DoctorModal'
import SimpleAppointmentForm from './SimpleAppointmentForm'
import claudiusBio from '../data/claudiusBio'
import katharinaBio from '../data/katharinaBio'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n'

const About = () => {
  const [openModal, setOpenModal] = useState(null)
  const [formDoctorId, setFormDoctorId] = useState(null)
  const { t } = useTranslation()

  const doctors = [
    {
      id: 'katharina',
      name: 'Priv.-Doz. DDr. Katharina Dörr MBA',
      short: t('doctors.katharina') + ': Fachärztin für Innere Medizin, Kardiologie & Nephrologie.',
      img: katharinaImg,
      bio: katharinaBio
    },
    {
      id: 'claudius',
      name: 'DDr. Claudius Dörr MBA',
      short: t('doctors.claudius') + ': Facharzt für Anästhesiologie, Intensivmedizin & Schmerztherapie.',
      img: claudiusImg,
      bio: claudiusBio
    }
  ]

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        setFormDoctorId(null)
      }
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
              className="doctor-photo"
              tabIndex="0"
            />
            <h3>{doc.name}</h3>
            <p>{doc.short}</p>
            <div className="doctor-buttons">
              <button onClick={() => setOpenModal(doc.id)} className="btn-outline">
                {t('showMore')}
              </button>
              <button
                onClick={() => setFormDoctorId(doc.id)}
                className="btn-primary"
              >
                {t('form.book')}
              </button>
            </div>
          </div>
        ))}
      </div>

      {doctors.map((doc) => (
        <DoctorModal
          key={doc.id}
          open={openModal === doc.id}
          onClose={() => setOpenModal(null)}
          title={doc.name}
          content={doc.bio[i18n.language] || doc.bio.de}
        />
      ))}

      {formDoctorId && (
        <DoctorModal
          open={true}
          onClose={() => setFormDoctorId(null)}
          title={t('appointmentForm.title') + ' – ' + doctors.find(d => d.id === formDoctorId).name}
          content={<SimpleAppointmentForm doctorName={doctors.find(d => d.id === formDoctorId).name} onSuccess={() => setFormDoctorId(null)} />}
        />
      )}
    </section>
  )
}

export default About
