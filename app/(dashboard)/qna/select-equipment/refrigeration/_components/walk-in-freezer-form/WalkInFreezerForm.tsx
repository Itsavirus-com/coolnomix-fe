import React, { FC } from 'react'

import ButtonGroup from '@/components/button-group/ButtonGroup'
import { FormProvider } from '@/components/ui/form'

import { useWalkInFreezerForm } from './walk-in-freezer-form.hook'
import { RefrigerationProps } from '../../refrigeration.types'
import RefrigerationForm from '../refrigeration-form/RefrigerationForm'

const WalkInFreezerForm: FC<RefrigerationProps> = (props) => {
  const { inPreview, handleContinue, handleSubmit } = props

  const { methods, buttons, onSubmit } = useWalkInFreezerForm(inPreview)

  return (
    <FormProvider
      methods={methods}
      onSubmit={async (values) => {
        onSubmit(values)
        handleContinue?.()
        await handleSubmit?.(values)
      }}
    >
      <RefrigerationForm disabled={inPreview} />
      <ButtonGroup className='mt-14 justify-end' buttons={buttons} />
    </FormProvider>
  )
}

export default WalkInFreezerForm
