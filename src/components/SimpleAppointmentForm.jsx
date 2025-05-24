import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const SimpleAppointmentForm = ({ doctorName, onSuccess }) => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [fallbackNotice, setFallbackNotice] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name) newErrors.name = t('form.name')
    if (!formData.email) newErrors.email = t('form.email')
    if (!formData.phone) newErrors.phone = t('form.phone')
    if (!formData.message) newErrors.message = t('form.message')
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setLoading(true)

    const mailBody = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n${doctorName ? `Doctor: ${doctorName}\n` : ''}Message: ${formData.message}`
    const mailto = `mailto:ordination@example.com?subject=Termin Anfrage - ${formData.name}&body=${encodeURIComponent(mailBody)}`
    window.location.href = mailto

    setTimeout(() => {
      setLoading(false)
      setFallbackNotice(true)
      setSuccess(true)
      toast.success(t('form.success') || 'Nachricht gesendet.')
      setFormData({ name: '', email: '', phone: '', message: '' })
      setErrors({})
      if (onSuccess) setTimeout(() => {
        onSuccess()
        const teamSection = document.getElementById('team')
        if (teamSection) {
          teamSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 3000)
    }, 3000)
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="form-fade-in"
        style={{
          maxWidth: 500,
          margin: '0 auto',
          backgroundColor: '#f8f9fa',
          padding: '2rem',
          borderRadius: '10px'
        }}
      >
        <input
          type="text"
          name="name"
          placeholder={t('form.name')}
          value={formData.name}
          onChange={handleChange}
          style={{ width: '100%', marginBottom: 10, padding: 8 }}
        />
        {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}

        <input
          type="email"
          name="email"
          placeholder={t('form.email')}
          value={formData.email}
          onChange={handleChange}
          style={{ width: '100%', marginBottom: 10, padding: 8 }}
        />
        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}

        <input
          type="text"
          name="phone"
          placeholder={t('form.phone')}
          value={formData.phone}
          onChange={handleChange}
          style={{ width: '100%', marginBottom: 10, padding: 8 }}
        />
        {errors.phone && <div style={{ color: 'red' }}>{errors.phone}</div>}

        <textarea
          name="message"
          placeholder={t('form.message')}
          value={formData.message}
          onChange={handleChange}
          rows="5"
          style={{ width: '100%', marginBottom: 10, padding: 8 }}
        />
        {errors.message && <div style={{ color: 'red' }}>{errors.message}</div>}

        {!success && (
          <button
            type="submit"
            disabled={loading}
            style={{
              backgroundColor: '#007bff',
              color: '#fff',
              padding: '12px 24px',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}
          >
            {loading ? 'Senden...' : t('form.submit')}
          </button>
        )}

        {fallbackNotice && (
          <p style={{ color: 'red', marginTop: 12 }}>
            {t('form.noEmailClient') || 'If your email did not open, please send manually to ordination@example.com.'}
          </p>
        )}
      </form>

      <ToastContainer position="bottom-center" autoClose={3000} />
    </>
  )
}

export default SimpleAppointmentForm