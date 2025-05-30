'use client'

import { useTranslations } from 'next-intl'
import React from 'react'

import Description from '@/components/description/Description'
import FormSidebar from '@/components/form-sidebar/FormSidebar'
import LoadingWithText from '@/components/loading-with-text/LoadingWithText'
import { Tabs, TabsContent } from '@/components/ui/tabs'

import { useReviewTabs } from './review-tabs.hook'
import PhaseOneForm from '../phase-one-form/PhaseOneForm'
import PhaseTwoForm from '../phase-two-form/PhaseTwoForm'

const ReviewTabs = () => {
  const t = useTranslations('qna')

  const { phases, hasApprovedAircons, isLoading, currentPhase, handleChangePhase, handleContinue } =
    useReviewTabs()

  if (isLoading) return <LoadingWithText className='mt-[25%]' />

  return (
    <Tabs value={currentPhase} defaultValue='phase-1'>
      <div className='flex gap-16'>
        {hasApprovedAircons && (
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
  )
}

export default ReviewTabs
