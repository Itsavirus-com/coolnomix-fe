'use client'

import React from 'react'
import { useTranslation } from 'react-i18next'

import FormSidebar from '@/(dashboard)/qna/_components/form-sidebar/FormSidebar'
import Description from '@/components/description/Description'
import { Tabs, TabsContent } from '@/components/ui/tabs'

import { useReviewForm } from './review.hook'
import PhaseOneForm from '../_components/phase-one-form/PhaseOneForm'
import PhaseTwoForm from '../_components/phase-two-form/PhaseTwoForm'

const Page = () => {
  const { t } = useTranslation('qna')

  const { phases, currentPhase, isApproved, handleChangePhase, handleContinue } = useReviewForm()

  return (
    <section className='content-placement-center content-placement-center--start'>
      <Tabs value={currentPhase} defaultValue='phase-1'>
        <div className='flex gap-16'>
          {isApproved && (
            <FormSidebar
              title={t('air_conditioning')}
              description={t('please_check_all_the_details_you_have_entered_before_submitting')}
              tabs={phases}
              onChangeTab={handleChangePhase}
            />
          )}
          <div className='w-[578px]'>
            <TabsContent value='phase-1'>
              <PhaseOneForm />
            </TabsContent>
            <TabsContent value='phase-2'>
              <Description label={t('air_conditioning_details')} className='mb-8' titleTag='h1'>
                {t('fill_in_the_necessary_details_about_your_air_conditioning_system')}
              </Description>
              <PhaseTwoForm handleContinue={handleContinue} />
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </section>
  )
}

export default Page
