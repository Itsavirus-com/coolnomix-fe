import type { FC } from 'react'

import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import { FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

import type { SelectProps } from './select.types'

const ControlledSelect: FC<SelectProps> = (props) => {
  const {
    name,
    label,
    placeholder,
    items,
    width = '100%',
    required,
    index,
    className,
    disabled
  } = props

  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <FormItem className={className}>
          <FormLabel name={name} id={name}>
            {label}
            {required && <span className='text-destructive'>*</span>}
          </FormLabel>
          <Select onValueChange={onChange} defaultValue={value} disabled={disabled}>
            <SelectTrigger style={{ width }} className='cursor-pointer'>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {items?.map((item) => (
                <SelectItem key={item.value} value={item.value} className='cursor-pointer'>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage name={name} index={index} />
        </FormItem>
      )}
    />
  )
}

export default ControlledSelect
