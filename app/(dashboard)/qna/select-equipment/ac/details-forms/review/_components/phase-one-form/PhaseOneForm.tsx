'use client'

import { useTranslations } from 'next-intl'
import React from 'react'

import Accordion from '@/components/accordion/Accordion'
import ButtonGroup from '@/components/button-group/ButtonGroup'
import Description from '@/components/description/Description'
import { FormProvider } from '@/components/ui/form'

import { usePhaseOneForm } from './phase-one-form.hook'
import AcForm from '../../../_components/ac-form/AcForm'
import BrandForm from '../../../_components/brand-form/BrandForm'
import PeakLoadTarifForm from '../../../_components/peak-load-tarif-form/PeakLoadTarifForm'

const PhaseOneForm = () => {
  const t = useTranslations('qna')

  const { methods, phaseOneFormFields, peakLoadTarifFields, buttons, onSubmit } = usePhaseOneForm()

  return (
    <>
      <Description label={t('review_your_information')} className='mb-8' titleTag='h1'>
        {t('please_check_all_the_details_you_have_entered_before_submitting')}
      </Description>
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Accordion
          type='multiple'
          defaultValue={['0', '1']}
          items={phaseOneFormFields.map((_, index) => ({
            key: index.toString(),
            title: t('air_conditioning_title', { index: index + 1 }),
            content: (
              <div>
                <BrandForm index={index} formName='phaseOne' disabled />
                <AcForm index={index} formName='phaseOne' disabled />
              </div>
            )
          }))}
        />
        <Accordion
          type='multiple'
          defaultValue={['0']}
          items={peakLoadTarifFields.map((_, index) => ({
            key: index.toString(),
            title: t('peak_load_tarif'),
            content: <PeakLoadTarifForm index={index} formName='peakLoadTarif' disabled />
          }))}
        />
        <ButtonGroup className='mt-14 justify-end' buttons={buttons} />
      </FormProvider>
    </>
  )
}

export default PhaseOneForm
