import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-scroll'
import logo from '../assets/logo1.png' // ISPRAVNA PUTANJA

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

      <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="team" smooth>{t('nav.team')}</Link></li>
        <li><Link to="services" smooth>{t('nav.services')}</Link></li>
        <li><Link to="appointment" smooth>{t('nav.appointment')}</Link></li>
        <li><Link to="testimonials" smooth>{t('nav.testimonials')}</Link></li>
        <li><Link to="contact" smooth>{t('nav.contact')}</Link></li>
      </ul>

      <div className="lang-switch">
  <button onClick={() => i18n.changeLanguage('de')} className={i18n.language === 'de' ? 'active' : ''}>
    <img src="/flags/de.svg" alt="Deutsch" width="30" />
  </button>
  <button onClick={() => i18n.changeLanguage('en')} className={i18n.language === 'en' ? 'active' : ''}>
    <img src="/flags/gb.svg" alt="English" width="30" />
  </button>
  <button onClick={() => i18n.changeLanguage('pl')} className={i18n.language === 'pl' ? 'active' : ''}>
    <img src="/flags/pl.svg" alt="Polski" width="30" />
  </button>
</div>

    </nav>
  )
}

export default Navbar
