import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import SuccessModal from './SuccessModal'

const SimpleAppointmentForm = ({ doctorName, onSuccess }) => {
  const { t } = useTranslation()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const emailMap = {
    'DDr. Claudius Dörr MBA': 'https://formsubmit.co/dr.claudiusdoerr@gmail.com',
    'Priv.-Doz. DDr. Katharina Dörr MBA': 'https://formsubmit.co/dr.katharinadoerr@gmail.com'
  }

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const isValidPhone = (phone) =>
    /^\+?[0-9\s\-()]{6,20}$/.test(phone)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name) newErrors.name = t('form.name')
    if (!formData.email || !isValidEmail(formData.email)) {
      newErrors.email = t('form.email')
    }
    if (!formData.phone || !isValidPhone(formData.phone)) {
      newErrors.phone = t('form.phone')
    }
    if (!formData.message) newErrors.message = t('form.message')
    return newErrors
  }

  const handleSubmit = (e) => {
    const newErrors = validate()

    if (Object.keys(newErrors).length > 0) {
      e.preventDefault()
      setErrors(newErrors)
      return
    }

    // Dozvoli slanje ako je sve OK
    setSuccess(true)
    setShowModal(true)
    setFormData({ name: '', email: '', phone: '', message: '' })

    if (onSuccess) {
      setTimeout(() => {
        onSuccess()
      }, 3000)
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        action={emailMap[doctorName] || 'https://formsubmit.co/default@example.com'}
        method="POST"
        className="form-fade-in"
        style={{
          maxWidth: 500,
          margin: '0 auto',
          backgroundColor: '#f8f9fa',
          padding: '2rem',
          borderRadius: '10px'
        }}
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://klaudiusandkathi.netlify.app/thank-you" />
        <input type="hidden" name="Doktor" value={doctorName} />
        <input type="text" name="_honey" style={{ display: 'none' }} />

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
            style={{
              backgroundColor: '#007bff',
              color: '#fff',
              padding: '12px 24px',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}
          >
            📧 {t('form.submit')}
          </button>
        )}
      </form>

      <SuccessModal open={showModal} onClose={() => setShowModal(false)} />
      <ToastContainer position="bottom-center" autoClose={3000} />
    </>
  )
}

export default SimpleAppointmentForm
