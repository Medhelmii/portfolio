import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import de from './locales/de.json'
import en from './locales/en.json'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            de: { translation: de },
            en: { translation: en },
        },
        supportedLngs: ['de', 'en'],
        fallbackLng: 'de',
        load: 'languageOnly',
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },
        interpolation: {
            escapeValue: false,
        },
    })

// <html lang="..."> immer aktuell halten (wichtig für SEO und Screenreader)
document.documentElement.lang = i18n.resolvedLanguage
i18n.on('languageChanged', (lng) => {
    document.documentElement.lang = lng
})

export default i18n