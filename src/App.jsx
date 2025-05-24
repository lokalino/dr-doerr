import { useEffect } from 'react'
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

function App() {
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

        <div data-aos="zoom-in" style={{ maxWidth: 700, margin: '0 auto', padding: '2rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Kontaktieren Sie uns</h2>
          <SimpleAppointmentForm />
        </div>

        <div data-aos="fade-up">
          <Contact />
        </div>
      </main>

      <Footer />
      <ScrollToTop />
      
      <CookieConsent
        location="bottom"
        buttonText="OK"
        cookieName="drdoerrCookie"
        style={{ background: "#2b3990" }}
        buttonStyle={{ color: "#fff", backgroundColor: "#4e5ee4", borderRadius: "5px" }}
      >
        Diese Webseite verwendet Cookies, um Ihnen ein optimales Erlebnis zu bieten.
      </CookieConsent>
    </>
  )
}

export default App
