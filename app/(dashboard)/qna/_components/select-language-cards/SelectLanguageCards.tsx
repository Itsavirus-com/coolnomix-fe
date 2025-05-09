'use client'

import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import React from 'react'

import Button from '@/components/button/Button'
import { qnaSelectEquipmentPath } from '@/config/paths'

import { useSelectLanguage } from './select-language-cards.hook'
import SelectLanguageCard from './SelectLanguageCard'

const SelectLanguageCards = () => {
  const t = useTranslations('qna')

  const router = useRouter()

  const { languages, selectedLanguage, handleSelectLanguage } = useSelectLanguage()

  return (
    <>
      <div className='flex w-full gap-5'>
        {languages?.map((lang) => (
          <SelectLanguageCard
            key={lang.value}
            {...lang}
            selectedLanguage={selectedLanguage}
            onSelectLanguage={handleSelectLanguage}
          />
        ))}
      </div>
      <Button
        className='m-auto mt-6'
        label={t('start_qna')}
        onClick={() => router.push(qnaSelectEquipmentPath())}
        disabled={!selectedLanguage}
      />
    </>
  )
}

export default SelectLanguageCards
