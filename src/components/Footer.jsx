// src/components/Footer.jsx
import { useTranslation } from 'react-i18next'

const Footer = ({ openPrivacy }) => {
  const { t } = useTranslation()

  return (
    <footer>
      <p>© {new Date().getFullYear()} Ordination Dr. Dörr</p>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault()
          openPrivacy()
        }}
        style={{ cursor: 'pointer', textDecoration: 'underline' }}
      >
        {t('footer.dataProtection')}
      </a>
    </footer>
  )
}

export default Footer
