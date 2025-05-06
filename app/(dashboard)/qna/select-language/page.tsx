'use client'

import React from 'react'
import { useTranslation } from 'react-i18next'

import { SelectLanguageCardType } from '@/_components/select-language-cards/select-language-cards.types'
import SelectLanguageCards from '@/_components/select-language-cards/SelectLanguageCards'
import { idnFlag, ukFlag } from '@/assets/images'
import Description from '@/components/description/Description'

const items: SelectLanguageCardType[] = [
  {
    image: idnFlag,
    title: 'Bahasa Indonesia',
    description: 'Pakai Bahasa Indonesia',
    value: 'idn'
  },
  {
    image: ukFlag,
    title: 'English',
    description: 'Let’s keep it in English',
    value: 'en'
  }
]

const Page = () => {
  const { t } = useTranslation('qna')

  return (
    <main>
      <section className='content-placement-center'>
        <div className='flex w-[516px] flex-col items-center'>
          <Description label={t('select_language')} className='mb-6 text-center' titleTag='h1'>
            {t('pick_your_preferred_language_to_continue')}
          </Description>
          <SelectLanguageCards items={items} />
        </div>
      </section>
    </main>
  )
}

export default Page
