import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import Accordion from '@/components/accordion/Accordion'
import ButtonGroup from '@/components/button-group/ButtonGroup'
import { FormProvider } from '@/components/ui/form'

import { usePhaseTwoForm } from './phase-two-form.hook'
import { DetailsFormProps } from '../../details-forms.types'
import TechnicalForm from '../technical-form/TechnicalForm'

const PhaseTwoForm: FC<DetailsFormProps> = (props) => {
  const { inPreview, handleContinue } = props

  const { t } = useTranslation('qna')

  const { methods, detailsFormFields, buttons, onSubmit } = usePhaseTwoForm(inPreview)

  return (
    <FormProvider
      methods={methods}
      onSubmit={async (values) => {
        await onSubmit(values)
        handleContinue?.()
      }}
    >
      <Accordion
        type='multiple'
        defaultValue={['0', '1']}
        items={detailsFormFields.map((_, index) => ({
          key: index.toString(),
          title: t('air_conditioning_title', { index: index + 1 }),
          content: <TechnicalForm index={index} formName='detailsForm' disabled={inPreview} />
        }))}
      />
      <ButtonGroup className='mt-14 justify-end' buttons={buttons} />
    </FormProvider>
  )
}

export default PhaseTwoForm
