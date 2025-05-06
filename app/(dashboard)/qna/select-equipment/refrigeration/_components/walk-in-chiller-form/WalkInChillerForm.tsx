import React, { FC } from 'react'

import ButtonGroup from '@/components/button-group/ButtonGroup'
import { FormProvider } from '@/components/ui/form'

import { useWalkInChillerForm } from './walk-in-chiller-form.hook'
import { RefrigerationDetailsFormProps } from '../../refrigeration.types'
import RefrigerationForm from '../refrigeration-form/RefrigerationForm'

const WalkInChillerForm: FC<RefrigerationDetailsFormProps> = (props) => {
  const { inPreview, handleContinue } = props

  const { methods, buttons, onSubmit } = useWalkInChillerForm()

  return (
    <FormProvider
      methods={methods}
      onSubmit={(values) => {
        onSubmit(values)
        handleContinue?.()
      }}
    >
      <RefrigerationForm disabled={inPreview} />
      <ButtonGroup className='mt-14 justify-end' buttons={buttons} />
    </FormProvider>
  )
}

export default WalkInChillerForm
