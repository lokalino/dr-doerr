import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-scroll'
import logo from '../assets/logo1.png'

const Navbar = () => {
  const { i18n, t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  const switchLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>

      <button
        className={`menu-toggle ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menü öffnen"
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="team" smooth spy activeClass="active">{t('nav.team')}</Link></li>
        <li><Link to="services" smooth spy activeClass="active">{t('nav.services')}</Link></li>
        <li><Link to="appointment" smooth spy activeClass="active">{t('nav.appointment')}</Link></li>
        <li><Link to="testimonials" smooth spy activeClass="active">{t('nav.testimonials')}</Link></li>
        <li><Link to="contact" smooth spy activeClass="active">{t('nav.contact')}</Link></li>
      </ul>

      <div className="lang-switch">
        <button
          onClick={() => switchLanguage('de')}
          className={i18n.language === 'de' ? 'active' : ''}
          aria-label="Sprache Deutsch"
        >
          <img src="/flags/de.svg" alt="Deutsch" width="30" />
        </button>
        <button
          onClick={() => switchLanguage('en')}
          className={i18n.language === 'en' ? 'active' : ''}
          aria-label="Language English"
        >
          <img src="/flags/gb.svg" alt="English" width="30" />
        </button>
        <button
          onClick={() => switchLanguage('pl')}
          className={i18n.language === 'pl' ? 'active' : ''}
          aria-label="Język polski"
        >
          <img src="/flags/pl.svg" alt="Polski" width="30" />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
