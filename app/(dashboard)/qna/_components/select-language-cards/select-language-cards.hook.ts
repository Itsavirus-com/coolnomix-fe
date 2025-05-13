import { useTranslations } from 'next-intl'
import { useCallback, useMemo, useState } from 'react'

import { idnFlag, ukFlag } from '@/assets/images'
import { load, updateStoredObject } from '@/utils/storage'

import { SelectLanguageCardType, SelectLanguageValue } from './select-language-cards.types'

export const useSelectLanguage = () => {
  const t = useTranslations('qna')

  const currentLanguage = load('QNA_FORM')?.lang as SelectLanguageValue

  const [selectedLanguage, setSelectedLanguage] = useState<SelectLanguageValue>(currentLanguage)

  const languages: SelectLanguageCardType[] = useMemo(
    () => [
      {
        image: idnFlag,
        title: t('bahasa_indonesia'),
        description: t('pakai_bahasa_indonesia'),
        value: 'idn'
      },
      {
        image: ukFlag,
        title: t('english'),
        description: t('lets_keep_it_in_english'),
        value: 'en'
      }
    ],
    []
  )

  const handleSelectLanguage = useCallback((value: SelectLanguageValue) => {
    setSelectedLanguage(value)
    updateStoredObject('QNA_FORM', { lang: value })
  }, [])

  return { languages, selectedLanguage, handleSelectLanguage }
}
