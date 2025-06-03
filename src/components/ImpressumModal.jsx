// src/components/ImpressumModal.jsx
const ImpressumModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null
  
    return (
      <div className="privacy-modal-overlay" onClick={onClose}>
        <div className="privacy-modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close-btn" onClick={onClose} aria-label="Schließen">×</button>
          <h2>Impressum</h2>
          <p>Angaben gemäß § 5 ECG</p>
          <p><strong>Ordination Dr. Dörr</strong><br />
          Alser Straße 23<br />
          1080 Wien, Österreich</p>
  
          <p><strong>Telefon:</strong> +43 123 456 789<br />
          <strong>E-Mail:</strong> ordination@example.com</p>
  
          <p><strong>Berufsbezeichnung:</strong> Fachärzte für Innere Medizin, Kardiologie, Schmerztherapie</p>
          <p><strong>Aufsichtsbehörde:</strong> Ärztekammer für Wien</p>
  
          <p style={{ fontSize: '0.85rem', marginTop: '2rem', color: '#888' }}>
            Coding & Design by Ivan J.
          </p>
        </div>
      </div>
    )
  }
  
  export default ImpressumModal
  