import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useTranslation } from 'react-i18next'

const Appointment = () => {
  const { t } = useTranslation()
  const [selectedDoctor, setSelectedDoctor] = useState('')
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState('')
  const [formData, setFormData] = useState({ name: '', email: '', insurance: '', phone: '' })
  const [errors, setErrors] = useState({})
  const [fallbackNotice, setFallbackNotice] = useState(false)

  const availableTimes = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00']

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const isValidPhone = (phone) =>
    /^\+?[0-9\s\-()]{6,20}$/.test(phone)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const validate = () => {
    const newErrors = {}
    if (!selectedDoctor) newErrors.doctor = t('form.chooseDoctor') || 'Choose a doctor'
    if (!selectedDate) newErrors.date = t('form.chooseDate') || 'Choose a date'
    if (!selectedTime) newErrors.time = t('form.chooseTime') || 'Choose a time'
    if (!formData.name) newErrors.name = t('form.name') || 'Name is required'
    if (!formData.email || !isValidEmail(formData.email)) newErrors.email = t('form.email') || 'Invalid email'
    if (!formData.phone || !isValidPhone(formData.phone)) newErrors.phone = t('form.phone') || 'Invalid phone'
    if (!formData.insurance) newErrors.insurance = t('form.insurance') || 'Insurance is required'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    const mailto = `mailto:ordination@example.com?subject=Termin Wunsch - ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Insurance: ${formData.insurance}
Doctor: ${selectedDoctor}
Date: ${selectedDate.toLocaleDateString()}
Time: ${selectedTime}`
    )}`

    window.location.href = mailto

    setTimeout(() => {
      setFallbackNotice(true)
    }, 3000)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{t('nav.appointment')}</h2>

      <select value={selectedDoctor} onChange={(e) => setSelectedDoctor(e.target.value)}>
        <option value="">{t('form.chooseDoctor')}</option>
        <option value={t('doctors.katharina')}>{t('doctors.katharina')}</option>
        <option value={t('doctors.claudius')}>{t('doctors.claudius')}</option>
      </select>
      {errors.doctor && <div style={{ color: 'red' }}>{errors.doctor}</div>}

      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        placeholderText={t('form.chooseDate')}
        dateFormat="dd.MM.yyyy"
        minDate={new Date()}
      />
      {errors.date && <div style={{ color: 'red' }}>{errors.date}</div>}

      {selectedDate && (
        <>
          <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
            <option value="">{t('form.chooseTime')}</option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
          {errors.time && <div style={{ color: 'red' }}>{errors.time}</div>}
        </>
      )}

      <input type="text" name="name" placeholder={t('form.name')} value={formData.name} onChange={handleChange} />
      {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}

      <input type="email" name="email" placeholder={t('form.email')} value={formData.email} onChange={handleChange} />
      {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}

      <input type="text" name="phone" placeholder={t('form.phone')} value={formData.phone} onChange={handleChange} />
      {errors.phone && <div style={{ color: 'red' }}>{errors.phone}</div>}

      <input type="text" name="insurance" placeholder={t('form.insurance')} value={formData.insurance} onChange={handleChange} />
      {errors.insurance && <div style={{ color: 'red' }}>{errors.insurance}</div>}

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
          marginTop: '16px'
        }}
      >
        {t('form.submit')}
      </button>

      {fallbackNotice && (
        <p style={{ color: 'red', marginTop: '1rem' }}>
          {t('form.noEmailClient')}
        </p>
      )}
    </form>
  )
}

export default Appointment
