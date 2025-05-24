import SimpleAppointmentForm from './SimpleAppointmentForm'

const DoctorModal = ({ open, onClose, title, content }) => {
  if (!open) return null

  const firstLine = content.split('\n')[0]
  const rest = content.split('\n').slice(1).join('\n')

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 1000 }}>
      <div
        className="modal-content bio-modal"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#fff',
          padding: '2rem',
          maxWidth: 800,
          width: '90%',
          borderRadius: '10px',
          margin: '2rem auto',
          position: 'relative'
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

        <h3>{title}</h3>
        <h4 className="bio-heading" style={{ fontWeight: 'bold', marginTop: '1rem' }}>{firstLine}</h4>
        <div className="bio-content" style={{ whiteSpace: 'pre-line', marginBottom: '2rem' }}>{rest}</div>

        <div style={{ borderTop: '1px solid #ccc', paddingTop: '1rem' }}>
          <h4 style={{ marginBottom: '1rem' }}>Kontaktformular</h4>
          <SimpleAppointmentForm doctorName={title} />
        </div>

        <div style={{ marginTop: '2rem', textAlign: 'right' }}>
          <button onClick={onClose} className="modal-close-btn" style={{
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '6px',
            cursor: 'pointer'
          }}>
            Schließen
          </button>
        </div>
      </div>
    </div>
  )
}

export default DoctorModal
