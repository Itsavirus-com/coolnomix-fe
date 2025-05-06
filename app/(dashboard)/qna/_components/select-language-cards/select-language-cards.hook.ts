import { useCallback, useState } from 'react'

import { load, updateStoredObject } from '@/utils/storage'

import { SelectLanguageValue } from './select-language-cards.types'

export const useSelectLanguage = () => {
  const currentLanguage = load('QNA_FORM')?.lang as SelectLanguageValue

  const [selectedLanguage, setSelectedLanguage] = useState<SelectLanguageValue>(currentLanguage)

  const handleSelectLanguage = useCallback((value: SelectLanguageValue) => {
    setSelectedLanguage(value)
    updateStoredObject('QNA_FORM', { lang: value })
  }, [])

  return { selectedLanguage, handleSelectLanguage }
}
