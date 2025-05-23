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

  const availableTimes = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00']

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
    if (!formData.email) newErrors.email = t('form.email') || 'Email is required'
    if (!formData.phone) newErrors.phone = t('form.phone') || 'Phone number is required'
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
    alert(t('form.success') || 'Appointment successfully booked!')
    console.log({ ...formData, selectedDoctor, selectedDate, selectedTime })
  }

  return (
    <section id="appointment" data-aos="fade-up">
      <h2>{t('nav.appointment')}</h2>
      <form className="appointment-form" onSubmit={handleSubmit}>
        <select
          value={selectedDoctor}
          onChange={(e) => setSelectedDoctor(e.target.value)}
        >
          <option value="">{t('form.chooseDoctor') || 'Choose a doctor'}</option>
          <option value="claudius">DDr. Claudius Dörr</option>
          <option value="katharina">Dr. Katharina Dörr</option>
        </select>
        {errors.doctor && <small style={{ color: 'red' }}>{errors.doctor}</small>}

        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText={t('form.chooseDate') || 'Choose a date'}
          dateFormat="dd.MM.yyyy"
          minDate={new Date()}
        />
        {errors.date && <small style={{ color: 'red' }}>{errors.date}</small>}

        {selectedDate && (
          <>
            <select
              value={selectedTime || ''}
              onChange={(e) => setSelectedTime(e.target.value)}
            >
              <option value="">{t('form.chooseTime') || 'Choose a time'}</option>
              {availableTimes.map((time) => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
            {errors.time && <small style={{ color: 'red' }}>{errors.time}</small>}
          </>
        )}

        <input
          type="text"
          name="name"
          placeholder={t('form.name') || 'Name'}
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <small style={{ color: 'red' }}>{errors.name}</small>}

        <input
          type="email"
          name="email"
          placeholder={t('form.email') || 'Email'}
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <small style={{ color: 'red' }}>{errors.email}</small>}

        <input
          type="text"
          name="phone"
          placeholder={t('phone') || 'Phone'}
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <small style={{ color: 'red' }}>{errors.phone}</small>}

        <input
          type="text"
          name="insurance"
          placeholder={t('form.insurance') || 'Insurance number'}
          value={formData.insurance}
          onChange={handleChange}
        />
        {errors.insurance && <small style={{ color: 'red' }}>{errors.insurance}</small>}

        <button type="submit">{t('form.submit') || 'Submit'}</button>
      </form>
    </section>
  )
}

export default Appointment
