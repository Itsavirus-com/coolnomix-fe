import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import Accordion from '@/components/accordion/Accordion'
import ButtonGroup from '@/components/button-group/ButtonGroup'
import { FormProvider } from '@/components/ui/form'

import { useStepOneForm } from './step-one-form.hook'
import { DetailsFormProps } from '../../details-forms.types'
import BrandForm from '../brand-form/BrandForm'

const StepOneForm: FC<DetailsFormProps> = (props) => {
  const { handleContinue } = props

  const { t } = useTranslation('qna')

  const { methods, fields, buttons, onSubmit } = useStepOneForm()

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
        items={fields.map((_, index) => ({
          key: index.toString(),
          title: t('air_conditioning_title', { index: index + 1 }),
          content: <BrandForm index={index} formName='detailsBrand' />
        }))}
      />
      <ButtonGroup className='mt-14 justify-end' buttons={buttons} />
    </FormProvider>
  )
}

export default StepOneForm
