import { useState, useRef, useEffect } from 'react'
import services from '../data/services'

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null)
  const cardRefs = useRef([])

  const toggleExpand = (index) => {
    setExpandedIndex(prev => (prev === index ? null : index))
  }

  useEffect(() => {
    if (expandedIndex !== null && cardRefs.current[expandedIndex]) {
      cardRefs.current[expandedIndex].scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [expandedIndex])

  return (
    <section id="services">
      <h2>Leistungen</h2>
      <div className="services">
        {services.map((item, index) => (
          <div
            className={`service-card${expandedIndex === index ? ' expanded' : ''}`}
            key={index}
            onClick={() => toggleExpand(index)}
            ref={el => cardRefs.current[index] = el}
            data-aos="fade-up"
          >
            <h3>
              {item.title}
              <svg
                className="arrow-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </h3>
            <div className="service-description">
              <p style={{ whiteSpace: 'pre-line' }}>
                {expandedIndex === index
                  ? (item.details || item.description)
                  : item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
