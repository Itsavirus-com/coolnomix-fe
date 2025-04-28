import type { FC } from 'react'

import React from 'react'
import { useController, useFormContext } from 'react-hook-form'

import Icon from '@/components/icon'
import { FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import useToggle from '@/hooks/use-toggle.hook'

import type { ControlledInputProps } from '../input/types'

const ControlledPasswordInput: FC<ControlledInputProps> = (props) => {
  const { name, label, placeholder, labelClassname, className, required } = props

  const { control } = useFormContext()
  const { field } = useController({
    name,
    control
  })

  const [isVisible, toggleVisibility] = useToggle()

  return (
    <FormItem>
      <FormLabel name={name} id={name} className={labelClassname}>
        {label}
        {required && <span className='text-destructive'>*</span>}
      </FormLabel>
      <div className='relative'>
        <Input
          type={isVisible ? 'text' : 'password'}
          placeholder={placeholder}
          className={className}
          {...field}
        />
        <Icon
          icon='eye'
          className='absolute top-1/2 right-4 -translate-y-1/2 text-black'
          onClick={toggleVisibility}
        />
      </div>
      <FormMessage name={name} />
    </FormItem>
  )
}

export default ControlledPasswordInput
