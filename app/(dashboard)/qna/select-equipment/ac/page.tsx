import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import React from 'react'

import SelectAcRequestCards from '@/_components/select-ac-request-cards/SelectAcRequestCards'
import Description from '@/components/description/Description'
import { ENV } from '@/libs/env'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Select Air Conditioning Type - ${ENV.NEXT_PUBLIC_PROJECT_NAME}`
  }
}

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
