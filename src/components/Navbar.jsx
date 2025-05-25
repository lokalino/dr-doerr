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
        <button onClick={() => switchLanguage('de')} className={i18n.language === 'de' ? 'active' : ''}>DE</button>
        <button onClick={() => switchLanguage('en')} className={i18n.language === 'en' ? 'active' : ''}>EN</button>
        <button onClick={() => switchLanguage('pl')} className={i18n.language === 'pl' ? 'active' : ''}>PL</button>
      </div>
    </nav>
  )
}

export default Navbar
