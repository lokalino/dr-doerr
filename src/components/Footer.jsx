import { useTranslation } from 'react-i18next'

const Footer = ({ openPrivacy, openImpressum }) => {
  const { t } = useTranslation()

  return (
    <footer>
      <p>© {new Date().getFullYear()} Ordination Dr. Dörr</p>
      <div style={{ marginTop: '0.5rem' }}>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            openPrivacy()
          }}
          style={{ textDecoration: 'underline', marginRight: '1rem' }}
        >
          {t('footer.dataProtection')}
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            openImpressum()
          }}
          style={{ textDecoration: 'underline', marginRight: '1rem' }}
        >
          Impressum
        </a>
       
          
      </div>
    </footer>
  )
}

export default Footer
