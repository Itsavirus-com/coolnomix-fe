'use client'

import * as i18next from 'i18next'
import detector from 'i18next-browser-languagedetector'
import ICU from 'i18next-icu'
import { initReactI18next } from 'react-i18next'

import en from './en'

i18next
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(ICU)
  .init({
    resources: { en },
    defaultNS: 'common',
    fallbackLng: 'en', // use en if detected lng is not available
    keySeparator: '.', // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

export function translate(key: any, options?: any): any {
  return key ? i18next.t(key, options) : null
}

export default i18next
