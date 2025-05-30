// src/components/SuccessModal.jsx
const SuccessModal = ({ open, onClose }) => {
  if (!open) return null

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Termin erfolgreich übermittelt"
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999
      }}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#fff',
          padding: '2rem',
          borderRadius: '10px',
          maxWidth: '400px',
          textAlign: 'center',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
        }}
      >
        <h2 style={{ color: '#2b3990', marginBottom: '1rem' }}>Vielen Dank!</h2>
        <p style={{ marginBottom: '1.5rem' }}>
          Ihre Terminanfrage wurde erfolgreich übermittelt.
        </p>
        <button
          onClick={onClose}
          aria-label="Modal schließen"
          style={{
            backgroundColor: '#2b3990',
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Schließen
        </button>
      </div>
    </div>
  )
}

export default SuccessModal
