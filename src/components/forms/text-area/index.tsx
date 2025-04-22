import type { FC } from 'react'

import React from 'react'
import { useController, useFormContext } from 'react-hook-form'

import { FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'

import type { ControlledTextAreaProps } from './types'

const ControlledTextArea: FC<ControlledTextAreaProps> = (props) => {
  const { name, label, placeholder, labelClassname, className, required } = props

  const { control } = useFormContext()
  const { field } = useController({
    name,
    control
  })

  return (
    <FormItem>
      <FormLabel name={name} id={name} className={labelClassname}>
        {label}
        {required && <span className='text-destructive'>*</span>}
      </FormLabel>
      <Textarea placeholder={placeholder} className={className} {...field} />
      <FormMessage name={name} />
    </FormItem>
  )
}

export default ControlledTextArea
