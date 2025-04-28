import type { FC } from 'react'

import React from 'react'
import { useController, useFormContext } from 'react-hook-form'

import { FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import type { ControlledInputProps } from './input.types'

const ControlledInput: FC<ControlledInputProps> = (props) => {
  const { name, label, placeholder, labelClassname, required, testID, ...rest } = props

  const { control } = useFormContext()
  const { field } = useController({
    name,
    control
  })

  return (
    <FormItem {...rest}>
      <FormLabel name={name} id={name} className={labelClassname}>
        {label}
        {required && <span className='text-destructive'>*</span>}
      </FormLabel>
      <Input placeholder={placeholder} {...field} data-test-id={testID} />
      <FormMessage name={name} />
    </FormItem>
  )
}

export default ControlledInput
