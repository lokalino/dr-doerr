import services from '../data/services'
import { useTranslation } from 'react-i18next'

const Services = () => {
  const { t } = useTranslation()

  return (
    <section id="services" data-aos="fade-up">
      <h2>{t('nav.services')}</h2>
      <div className="services">
        {services.map((item, index) => (
          <div
            className="service-card"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 150}
            data-aos-offset="100"
          >
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
