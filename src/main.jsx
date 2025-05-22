import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './i18n'

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
    <App />
  </React.StrictMode>
)
