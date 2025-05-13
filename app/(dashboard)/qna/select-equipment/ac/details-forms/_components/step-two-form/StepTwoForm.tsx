import { useTranslations } from 'next-intl'
import React, { FC } from 'react'

import Accordion from '@/components/accordion/Accordion'
import ButtonGroup from '@/components/button-group/ButtonGroup'
import { FormProvider } from '@/components/ui/form'

import { useStepTwoForm } from './step-two-form.hook'
import { DetailsFormProps } from '../../details-forms.types'
import AcForm from '../ac-form/AcForm'
import PeakLoadTarifForm from '../peak-load-tarif-form/PeakLoadTarifForm'

const StepTwoForm: FC<DetailsFormProps> = (props) => {
  const { handleContinue } = props

  const t = useTranslations('qna')

  const { methods, detailsAcFields, peakLoadTarifFields, buttons, onSubmit } = useStepTwoForm()

  return (
    <FormProvider
      methods={methods}
      onSubmit={(values) => {
        onSubmit(values)
        handleContinue?.()
      }}
    >
      <Accordion
        type='multiple'
        defaultValue={['0', '1']}
        items={detailsAcFields.map((_, index) => ({
          key: index.toString(),
          title: t('air_conditioning_title', { index: index + 1 }),
          content: <AcForm index={index} formName='detailsAc' />
        }))}
      />
      <Accordion
        type='multiple'
        defaultValue={['0']}
        items={peakLoadTarifFields.map((_, index) => ({
          key: index.toString(),
          title: t('peak_load_tarif'),
          content: <PeakLoadTarifForm index={index} formName='peakLoadTarif' />
        }))}
      />
      <ButtonGroup className='mt-14 justify-end' buttons={buttons} />
    </FormProvider>
  )
}

export default StepTwoForm
