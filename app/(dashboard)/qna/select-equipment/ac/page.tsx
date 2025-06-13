import { getTranslations } from 'next-intl/server'
import React from 'react'

import Description from '@/components/description/Description'

import SelectAcRequestCards from './_components/select-ac-request-cards/SelectAcRequestCards'

const Page = async () => {
  const t = await getTranslations('qna')

  return (
    <main>
      <section className='content-placement-center'>
        <div className='flex w-[624px] flex-col'>
          <Description label={t('air_conditioning_request_process')} className='mb-6' titleTag='h1'>
            {t('choose_an_option_below_to_proceed_with_your_air_conditioning_request')}
          </Description>
          <SelectAcRequestCards />
        </div>
      </section>
    </main>
  )
}

export default Page
