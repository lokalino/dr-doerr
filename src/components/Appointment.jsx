import { useState } from 'react'
import appointments from '../data/appointments'

const Appointment = () => {
  const [date, setDate] = useState('2025-05-23')
  const [time, setTime] = useState('')
  const [formData, setFormData] = useState({ name: '', email: '', insurance: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.insurance && time) {
      setSubmitted(true)
    } else {
      alert('Bitte füllen Sie alle Felder aus.')
    }
  }

  return (
    <section id="appointment">
      <h2>Terminvergabe</h2>
      {submitted ? (
        <p>Danke! Ihr Termin wurde vorgemerkt.</p>
      ) : (
        <form onSubmit={handleSubmit} className="appointment-form">
          <input type="text" placeholder="Name" required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input type="email" placeholder="E-Mail" required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <input type="text" placeholder="Versicherungsnummer" required
            value={formData.insurance}
            onChange={(e) => setFormData({ ...formData, insurance: e.target.value })}
          />
          <select value={date} onChange={(e) => setDate(e.target.value)}>
            {Object.keys(appointments).map(d => (
              <option key={d}>{d}</option>
            ))}
          </select>
          <select value={time} onChange={(e) => setTime(e.target.value)} required>
            <option value="">Uhrzeit wählen</option>
            {appointments[date].map((t, idx) => (
              <option key={idx}>{t}</option>
            ))}
          </select>
          <button type="submit">Termin buchen</button>
        </form>
      )}
    </section>
  )
}

export default Appointment
