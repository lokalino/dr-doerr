import { useEffect, useState } from 'react'
import claudiusImg from '../assets/claudius.jpg'
import katharinaImg from '../assets/katharina.jpg'
import DoctorModal from './DoctorModal'
import claudiusBio from '../data/claudiusBio'
import katharinaBio from '../data/katharinaBio'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const About = () => {
  const [openModal, setOpenModal] = useState(null)
  const [formDoctorId, setFormDoctorId] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [enlargedImg, setEnlargedImg] = useState(null)
  const { t } = useTranslation()

  const doctors = [
    {
      id: 'claudius',
      name: 'DDr. Claudius Dörr MBA',
      short: 'Facharzt für Anästhesiologie, Intensivmedizin & Schmerztherapie.',
      img: claudiusImg,
      bio: claudiusBio
    },
    {
      id: 'katharina',
      name: 'Dr. Katharina Dörr',
      short: 'Fachärztin für Innere Medizin, Kardiologie & Nephrologie.',
      img: katharinaImg,
      bio: katharinaBio
    }
  ]

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        setEnlargedImg(null)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <section id="about" data-aos="fade-up">
      <h2>{t('nav.about')}</h2>
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
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem' }}>
              <button onClick={() => setOpenModal(doc.id)} className="btn-outline">
                {t('showMore')}
              </button>
              <button
                onClick={() => setFormDoctorId(prev => prev === doc.id ? null : doc.id)}
                className="btn-primary"
              >
                {t('termin')}
              </button>
            </div>

            {formDoctorId === doc.id && (
              <form className="appointment-form-inline">
                <input type="text" placeholder={t('form.name')} required />
                <input type="email" placeholder={t('form.email')} required />
                <input type="text" placeholder={t('form.insurance')} required />

                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  placeholderText="Wähle ein Datum"
                  dateFormat="dd.MM.yyyy"
                  required
                />

                {selectedDate && (
                  <select
                    value={selectedTime || ''}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    required
                  >
                    <option value="">Uhrzeit wählen</option>
                    <option>09:00</option>
                    <option>10:00</option>
                    <option>11:30</option>
                    <option>13:00</option>
                    <option>15:00</option>
                  </select>
                )}

                <button type="submit">{t('form.submit')}</button>
              </form>
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
