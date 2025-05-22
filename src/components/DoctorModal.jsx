const DoctorModal = ({ open, onClose, title, content }) => {
  if (!open) return null

  const firstLine = content.split('\n')[0]
  const rest = content.split('\n').slice(1).join('\n')

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content bio-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>✖</button>
        <h3>{title}</h3>
        <h4 className="bio-heading">{firstLine}</h4>
        <div className="bio-content">{rest}</div>
        <div style={{ marginTop: '1rem', textAlign: 'right' }}>
          <button onClick={onClose} className="modal-close-btn">Schließen</button>
        </div>
      </div>
    </div>
  )
}

export default DoctorModal
