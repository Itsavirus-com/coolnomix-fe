import type { FC } from 'react'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import SearchInput from '@/components/search-input/SearchInput'
import { FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectGroup,
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
    disabled,
    hasSearch = false
  } = props

  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const searchInputRef = useRef<HTMLInputElement>(null)
  const { control } = useFormContext()

  const filteredItems = useMemo(() => {
    if (!searchQuery) return items
    return items.filter((item) => item.label.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [items, searchQuery])

  useEffect(() => {
    if (isOpen && hasSearch && searchInputRef.current) {
      const timer = setTimeout(() => searchInputRef.current?.focus(), 0)
      return () => clearTimeout(timer)
    }

    return () => {}
  }, [isOpen, hasSearch, searchQuery])

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
          <Select
            onValueChange={(value) => {
              onChange(value)
              setSearchQuery('')
            }}
            value={value || ''}
            disabled={disabled}
            onOpenChange={setIsOpen}
          >
            <SelectTrigger style={{ width }} className='cursor-pointer'>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {hasSearch && (
                <SearchInput
                  ref={searchInputRef}
                  name='search'
                  className='mb-2 h-8 !border-none bg-transparent px-3 py-1 focus-visible:border-none focus-visible:ring-0'
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              )}
              <SelectGroup>
                {filteredItems?.map((item) => (
                  <SelectItem key={item.value} value={item.value} className='cursor-pointer'>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <FormMessage name={name} index={index} />
        </FormItem>
      )}
    />
  )
}

export default ControlledSelect
