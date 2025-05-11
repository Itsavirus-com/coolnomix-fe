'use client'

import { useTranslations } from 'next-intl'
import React from 'react'

import Button from '@/components/button/Button'

import { useSelectLanguage } from './select-language-cards.hook'
import SelectLanguageCard from './SelectLanguageCard'

const SelectLanguageCards = () => {
  const t = useTranslations('qna')

  const { languages, selectedLanguage, handleSelectLanguage, handleContinue } = useSelectLanguage()

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
        onClick={handleContinue}
        disabled={!selectedLanguage}
      />
    </>
  )
}

export default SelectLanguageCards
