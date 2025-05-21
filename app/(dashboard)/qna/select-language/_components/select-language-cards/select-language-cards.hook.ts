import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useCallback, useMemo, useState } from 'react'

import { idnFlag, ukFlag } from '@/assets/images'
import { QNA_FORM_STORAGE_KEY } from '@/config/constant'
import { qnaSelectEquipmentPath } from '@/config/paths'
import { load, updateStoredObject } from '@/utils/storage'

import { SelectLanguageCardType, SelectLanguageValue } from './select-language-cards.types'

export const useSelectLanguage = () => {
  const t = useTranslations('qna')

  const router = useRouter()

  const currentLanguage = load(QNA_FORM_STORAGE_KEY)?.lang || ''

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

  const handleSelectLanguage = useCallback((lang: SelectLanguageValue) => {
    setSelectedLanguage(lang)
    updateStoredObject(QNA_FORM_STORAGE_KEY, { lang })
  }, [])

  const handleContinue = () => {
    router.push(qnaSelectEquipmentPath())
  }

  return { languages, selectedLanguage, handleSelectLanguage, handleContinue }
}
