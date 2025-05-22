import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
  const [lang, setLang] = useState('de')
  const [menuOpen, setMenuOpen] = useState(false)
  const { i18n, t } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng).then(() => setLang(lng))
  }

  const handleNavClick = () => setMenuOpen(false)

  return (
    <nav className="navbar">
      <div className="logo">Med Dörr</div>

      <button
        className={`menu-toggle ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(prev => !prev)}
        aria-label="Toggle menu"
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#about" onClick={handleNavClick}>{t('nav.about')}</a></li>
        <li><a href="#services" onClick={handleNavClick}>{t('nav.services')}</a></li>
        <li><a href="#appointment" onClick={handleNavClick}>{t('nav.appointment')}</a></li>
        <li><a href="#contact" onClick={handleNavClick}>{t('nav.contact')}</a></li>
      </ul>

      <div className="lang-switch">
        {['de', 'en', 'pl'].map((lng) => (
          <button
            key={lng}
            onClick={() => changeLanguage(lng)}
            className={lang === lng ? 'active' : ''}
          >
            {lng.toUpperCase()}
          </button>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
