import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const Testimonials = () => {
  const { t } = useTranslation()
  const [testimonials, setTestimonials] = useState([])
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    const demoTestimonials = [
      { name: 'Anna M.', comment: 'Sehr freundlich und kompetent!', stars: 5, lang: 'de' },
      { name: 'John D.', comment: 'Very professional and understanding.', stars: 4, lang: 'en' },
      { name: 'Magda K.', comment: 'Wspaniali lekarze, bardzo pomocni.', stars: 5, lang: 'pl' },
      { name: 'Lucas S.', comment: 'Tolle Betreuung!', stars: 4, lang: 'de' },
      { name: 'Emily R.', comment: 'Kind and patient doctors.', stars: 5, lang: 'en' },
      { name: 'Tomasz W.', comment: 'Wszystko idealnie!', stars: 5, lang: 'pl' },
      { name: 'Isabelle L.', comment: 'Empathisch und engagiert.', stars: 5, lang: 'de' },
      { name: 'Martin F.', comment: 'Zuverlässig und freundlich.', stars: 4, lang: 'de' },
      { name: 'Natalie H.', comment: 'Highly recommend this practice.', stars: 5, lang: 'en' },
      { name: 'Ewa Z.', comment: 'Lekarze godni polecenia.', stars: 4, lang: 'pl' },
      { name: 'Ben K.', comment: 'Easy appointment and great care.', stars: 5, lang: 'en' },
      { name: 'Katarzyna D.', comment: 'Świetna atmosfera i opieka.', stars: 5, lang: 'pl' },
      { name: 'Paul H.', comment: 'Sehr gutes Team!', stars: 4, lang: 'de' },
      { name: 'Sophia M.', comment: 'Lovely people.', stars: 5, lang: 'en' },
      { name: 'Aleksander J.', comment: 'Bardzo polecam.', stars: 4, lang: 'pl' },
      { name: 'Julia S.', comment: 'Fühle mich gut betreut.', stars: 5, lang: 'de' },
      { name: 'Robert T.', comment: 'Quick and easy service.', stars: 5, lang: 'en' },
      { name: 'Aneta B.', comment: 'Wspaniała opieka medyczna.', stars: 5, lang: 'pl' },
      { name: 'Helena D.', comment: 'Kompetent und nett.', stars: 4, lang: 'de' },
      { name: 'Grace N.', comment: 'Exceptional treatment.', stars: 5, lang: 'en' }
    ]
    setTestimonials(demoTestimonials)
  }, [])

  const displayed = showAll ? testimonials : testimonials.slice(0, 4)

  return (
    <section id="testimonials" data-aos="fade-up">
      <h2>{t('nav.testimonials')}</h2>
      <div className="testimonial-list">
        {displayed.map((item, idx) => (
          <blockquote key={idx} data-aos="fade-in">
            <p>{item.comment}</p>
            <footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{item.name}</span>
              <div>{'★'.repeat(item.stars)}{'☆'.repeat(5 - item.stars)}</div>
            </footer>
          </blockquote>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
        <button
          onClick={() => setShowAll(!showAll)}
          className="btn-outline"
          aria-label={showAll ? t('showLess') : t('showMore')}
        >
          {showAll ? t('showLess') : t('showMore')}
        </button>
      </div>
    </section>
  )
}

export default Testimonials
