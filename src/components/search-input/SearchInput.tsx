'use client'

import type { FC } from 'react'

import React from 'react'
import { useTranslation } from 'react-i18next'

import { cn } from '@/libs/utils'

import Icon from '../icon/Icon'
import { Input } from '../ui/input'

import type { SearchInputProps } from './search-input.types'

const SearchInput: FC<SearchInputProps> = (props) => {
  const { t } = useTranslation('common')

  const { placeholder = t('search'), className, ...rest } = props

  return (
    <div className='relative'>
      <Icon
        icon='icon-search'
        className='absolute top-1/2 left-3 z-1 -translate-y-1/2 text-black'
      />
      <Input
        placeholder={placeholder}
        className={cn(
          'placeholder:text-grey-darkest text-xsAlt bg-grey-lightest pl-8 font-medium placeholder:opacity-50',
          className
        )}
        {...rest}
      />
    </div>
  )
}

export default SearchInput
