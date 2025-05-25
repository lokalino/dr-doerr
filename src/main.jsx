import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './i18n'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import ThankYou from './components/ThankYou'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 800,
  delay: 100,
  easing: 'ease-in-out',
  once: true
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
