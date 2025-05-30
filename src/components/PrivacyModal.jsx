// src/components/PrivacyModal.jsx
import { useTranslation } from 'react-i18next'

const PrivacyModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation()

  if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-title"
      className="privacy-modal-overlay"
      onClick={onClose}
    >
      <div
        className="privacy-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="modal-close-btn" aria-label="Close">
          ✕
        </button>
        <h2 id="privacy-title">{t('privacyTitle')}</h2>
        <p>{t('privacyIntro')}</p>

        <h3>{t('privacyContactTitle')}</h3>
        <p>{t('privacyContact')}</p>

        <h3>{t('privacyCookiesTitle')}</h3>
        <p>{t('privacyCookies')}</p>

        <h3>{t('privacyRightsTitle')}</h3>
        <p>{t('privacyRights')}</p>

        <p>
          {t('privacyEmail')}: <strong>ordination@example.com</strong>
        </p>
      </div>
    </div>
  )
}

export default PrivacyModal
