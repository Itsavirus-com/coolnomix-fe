'use client'

import { useTranslations } from 'next-intl'
import React from 'react'

import Description from '@/components/description/Description'

import { usePhaseTwo } from './phase-two.hook'
import PhaseTwoForm from '../_components/phase-two-form/PhaseTwoForm'

const Page = () => {
  const t = useTranslations('qna')

  const { handleContinue } = usePhaseTwo()

  return (
    <main>
      <section className='content-placement-center content-placement-center--start gap-16'>
        <div className='w-[578px]'>
          <Description label={t('review_your_information')} className='mb-8' titleTag='h1'>
            {t('please_check_all_the_details_you_have_entered_before_submitting')}
          </Description>
          <PhaseTwoForm inPreview handleContinue={handleContinue} />
        </div>
      </section>
    </main>
  )
}

export default Page
