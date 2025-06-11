'use client'

import React, { FC } from 'react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { cn } from '@/libs/utils'

import { UncontrolledSelectProps } from './select.types'

const UncontrolledSelect: FC<UncontrolledSelectProps> = (props) => {
  const { items, placeholder, value, onValueChange, className, disabled } = props

  return (
    <Select value={value} onValueChange={onValueChange} disabled={disabled}>
      <SelectTrigger className={cn('cursor-pointer', className)}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default UncontrolledSelect
