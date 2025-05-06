import { Loader2 } from 'lucide-react'
import React from 'react'
import { useFormContext } from 'react-hook-form'

import Button from './Button'

import type { ControlledButtonProps } from './button.types'

const ControlledButton = (props: ControlledButtonProps) => {
  const { formState, handleSubmit } = useFormContext()

  return (
    <Button
      type='submit'
      isLoading={formState.isSubmitting}
      onSubmit={props.onSubmit && handleSubmit(props.onSubmit)}
      {...props}
    >
      {formState.isSubmitting && <Loader2 className='animate-spin' />}
    </Button>
  )
}

export default ControlledButton
