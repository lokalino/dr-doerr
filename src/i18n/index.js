import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationDE from './de.json'
import translationEN from './en.json'
import translationPL from './pl.json'

i18n.use(initReactI18next).init({
  resources: {
    de: { translation: translationDE },
    en: { translation: translationEN },
    pl: { translation: translationPL }
  },
  lng: 'de',
  fallbackLng: 'de',
  interpolation: { escapeValue: false }
})

export default i18n
