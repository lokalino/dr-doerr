import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from './components/Header'
import Navbar from './components/Navbar'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import CookieConsent from 'react-cookie-consent'
import SimpleAppointmentForm from './components/SimpleAppointmentForm'
import PrivacyModal from './components/PrivacyModal'
import ImpressumModal from './components/ImpressumModal'

function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const [impressumOpen, setImpressumOpen] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <>
      <Header />
      <Navbar />
      <main>
        <div data-aos="fade-up">
          <About />
        </div>

        <div data-aos="flip-up">
          <Services />
        </div>

        <div data-aos="fade-left">
          <Testimonials />
        </div>

        <div id="appointment" data-aos="zoom-in" style={{ maxWidth: 700, margin: '0 auto', padding: '2rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>{t('contact.title')}</h2>
          <SimpleAppointmentForm />
        </div>

        <div data-aos="fade-up">
          <Contact />
        </div>
      </main>

      <button
        className="sticky-appointment-btn"
        onClick={() => document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" })}
        aria-label={t('form.book')}
      >
        {t('form.book')}
      </button>

      <Footer
        openPrivacy={() => setPrivacyOpen(true)}
        openImpressum={() => setImpressumOpen(true)}
      />
      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <ImpressumModal isOpen={impressumOpen} onClose={() => setImpressumOpen(false)} />

      <ScrollToTop />

      <CookieConsent
        location="bottom"
        cookieName="drdoerrCookie"
        style={{
          background: "#2b3990",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
          flexWrap: "wrap",
        }}
        buttonText="Prihvatam"
        buttonStyle={{
          color: "#fff",
          backgroundColor: "#4e5ee4",
          borderRadius: "5px",
          padding: "0.5rem 1rem",
          marginRight: "1rem",
        }}
        enableDeclineButton
        declineButtonText="Odbijam"
        declineButtonStyle={{
          backgroundColor: "#888",
          color: "white",
          borderRadius: "5px",
          padding: "0.5rem 1rem",
        }}
        onAccept={() => {
          if (typeof gtag === 'function') {
            gtag('consent', 'update', {
              ad_storage: 'granted',
              analytics_storage: 'granted',
            })
          }
        }}
        onDecline={() => {
          if (typeof gtag === 'function') {
            gtag('consent', 'update', {
              ad_storage: 'denied',
              analytics_storage: 'denied',
            })
          }
        }}
      >
        {t('cookie')}
      </CookieConsent>
    </>
  )
}

export default App
