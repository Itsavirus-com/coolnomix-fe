'use client'

import { useTranslations } from 'next-intl'
import React from 'react'

import Description from '@/components/description/Description'
import Progress from '@/components/progress/Progress'
import { Tabs, TabsContent } from '@/components/ui/tabs'

import { useStepFormTabs } from './step-form-tabs.hook'
import StepOneForm from '../step-one-form/StepOneForm'
import StepTwoForm from '../step-two-form/StepTwoForm'
import UploadForm from '../upload-form/UploadForm'

const StepFormTabs = () => {
  const t = useTranslations('qna')

  const { steps, currentStep, handleContinue, handleReview } = useStepFormTabs()

  return (
    <Tabs value={currentStep} defaultValue={currentStep}>
      <div className='w-[578px]'>
        <Progress currentStepName={currentStep} steps={steps} />
        <Description label={t('air_conditioning_details')} className='mt-16 mb-8' titleTag='h1'>
          {t('fill_in_the_necessary_details_about_your_air_conditioning_system')}
        </Description>
        <TabsContent value='upload-form'>
          <UploadForm handleContinue={() => handleContinue('details-form')} />
        </TabsContent>
        <TabsContent value='details-form'>
          <StepOneForm handleContinue={() => handleContinue('details-form-ac')} />
        </TabsContent>
        <TabsContent value='details-form-ac'>
          <StepTwoForm handleContinue={handleReview} />
        </TabsContent>
      </div>
    </Tabs>
  )
}

export default StepFormTabs
