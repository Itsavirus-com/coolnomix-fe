import type { FC } from 'react'

import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'

import { FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

import type { SelectProps } from './types'

const ControlledSelect: FC<SelectProps> = (props) => {
  const { name, label, placeholder, items, width, required } = props

  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <FormItem>
          <FormLabel name={name} id={name}>
            {label}
            {required && <span className='text-destructive'>*</span>}
          </FormLabel>
          <Select onValueChange={onChange} defaultValue={value}>
            <SelectTrigger style={{ width }}>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {items?.map((item) => (
                <SelectItem key={uuidv4()} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage name={name} />
        </FormItem>
      )}
    />
  )
}

export default ControlledSelect
