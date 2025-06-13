import { getTranslations } from 'next-intl/server'
import React from 'react'

import Description from '@/components/description/Description'

import SelectLanguageCards from './_components/select-language-cards/SelectLanguageCards'

const Page = async () => {
  const t = await getTranslations('qna')

  return (
    <main>
      <section className='content-placement-center'>
        <div className='flex w-[516px] flex-col items-center'>
          <Description label={t('select_language')} className='mb-6 text-center' titleTag='h1'>
            {t('pick_your_preferred_language_to_continue')}
          </Description>
          <SelectLanguageCards />
        </div>
      </section>
    </main>
  )
}

export default Page
