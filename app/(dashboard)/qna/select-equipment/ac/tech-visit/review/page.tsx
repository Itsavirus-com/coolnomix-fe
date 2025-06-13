import { getTranslations } from 'next-intl/server'
import React from 'react'

import Description from '@/components/description/Description'

import TechVisitForm from '../_components/tech-visit-form/TechVisitForm'

const Page = async () => {
  const t = await getTranslations('qna')

  return (
    <main>
      <section className='content-placement-center'>
        <div className='w-[578px]'>
          <Description label={t('need_help_hit_the_panic_button')} className='mb-8' titleTag='h1'>
            {t('fill_in_the_necessary_details_about_your_air_conditioning_system')}
          </Description>
          <TechVisitForm inPreview />
        </div>
      </section>
    </main>
  )
}

export default Page
