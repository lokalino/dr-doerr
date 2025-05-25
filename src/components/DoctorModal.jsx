import SimpleAppointmentForm from './SimpleAppointmentForm'

const DoctorModal = ({ open, onClose, title, content }) => {
  if (!open) return null

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        zIndex: 1000,
        overflowY: 'auto',
        padding: '4rem 1rem'
      }}
    >
      <div
        className="modal-content bio-modal"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#fff',
          padding: '2rem',
          maxWidth: '800px',
          width: '100%',
          borderRadius: '10px',
          position: 'relative',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
          maxHeight: '90vh',
          overflowY: 'auto'
        }}
      >
        <button
          className="close-button"
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'transparent',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer'
          }}
        >
          ✖
        </button>

        <h3 style={{ color: '#2b3990', marginBottom: '1.5rem' }}>{title}</h3>

        <div style={{ whiteSpace: 'pre-line', lineHeight: 1.6 }}>{content}</div>

        {/* Kontakt formular */}
        <div style={{ borderTop: '1px solid #ccc', paddingTop: '2rem', marginTop: '2rem' }}>
          <h4 style={{ marginBottom: '1rem', color: '#2b3990' }}>Kontaktformular</h4>
          <SimpleAppointmentForm doctorName={title} />
        </div>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <button
            onClick={onClose}
            className="modal-close-btn"
            style={{
              backgroundColor: '#2b3990',
              color: '#fff',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  )
}

export default DoctorModal
