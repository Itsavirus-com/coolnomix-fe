'use client'

import React from 'react'
import { useTranslation } from 'react-i18next'

import Description from '@/components/description/Description'
import Progress from '@/components/progress/Progress'
import { Tabs, TabsContent } from '@/components/ui/tabs'

import StepOneForm from './_components/step-one-form/StepOneForm'
import StepTwoForm from './_components/step-two-form/StepTwoForm'
import UploadForm from './_components/upload-form/UploadForm'
import { useDetailsForms } from './details-forms.hook'

const Page = () => {
  const { t } = useTranslation('qna')

  const { steps, currentStep, handleContinue, handleReview } = useDetailsForms()

  return (
    <section className='content-placement-center content-placement-center--start'>
      <div className='w-[578px]'>
        <Tabs value={currentStep} defaultValue={currentStep}>
          <Progress currentStepName={currentStep} steps={steps} />
          <Description
            label={t('air_conditioning_details')}
            className='mt-16 mb-8'
            icon='icon-support'
            titleTag='h1'
          >
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
        </Tabs>
      </div>
    </section>
  )
}

export default Page
