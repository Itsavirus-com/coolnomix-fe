'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import React, { FC, useMemo } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Badge } from '@/components/ui/badge'
import { cn } from '@/libs/utils'

import {
  clearAllFilters,
  getFiltersFromSearchParams,
  removeFilter,
  updateFiltersParams
} from './table.helper'
import { FilterGroupProps, FilterToggleProps } from './table.types'
import Button from '../button/Button'
import Icon from '../icon/Icon'
import Text from '../text/Text'

const FilterToggle: FC<FilterToggleProps> = (props) => {
  const { filterKey, filterValue, label, isActive, className, variant = 'outline' } = props

  const searchParams = useSearchParams()
  const pathname = usePathname()

  const currentFilters = getFiltersFromSearchParams(searchParams)
  const active = isActive !== undefined ? isActive : currentFilters[filterKey] === filterValue

  const handleToggle = () => {
    const newFilters = { ...currentFilters }

    if (active) {
      delete newFilters[filterKey]
    } else {
      newFilters[filterKey] = filterValue
    }

    const params = updateFiltersParams(searchParams, newFilters)
    params.delete('page')
    window.history.pushState({}, '', pathname + '?' + params.toString())
  }

  return (
    <Button
      variant={active ? 'default' : variant}
      size='xs'
      onClick={handleToggle}
      className={className}
      label={label}
    />
  )
}

const FilterGroup: FC<FilterGroupProps> = (props) => {
  const { title, filters, className } = props

  return (
    <div className={cn('space-y-2', className)}>
      {title && (
        <Text tag='h4' variant='body1' weight='medium'>
          {title}
        </Text>
      )}
      <div className='flex flex-wrap gap-2'>
        {filters.map((filter) => (
          <FilterToggle key={uuidv4()} {...filter} />
        ))}
      </div>
    </div>
  )
}

const ActiveFilters: FC<{ className?: string }> = (props) => {
  const { className } = props

  const t = useTranslations('common')

  const searchParams = useSearchParams()
  const pathname = usePathname()

  const activeFilters = useMemo(() => {
    const filters = getFiltersFromSearchParams(searchParams)

    return Object.entries(filters).map(([key, value]) => ({
      key,
      value: value.toString(),
      label: `${key}: ${value}`
    }))
  }, [searchParams])

  if (activeFilters.length === 0) return null

  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <Text tag='span' variant='body1' weight='medium'>
        {t('active_filters')}
      </Text>
      <div className='flex flex-wrap gap-1'>
        {activeFilters.map(({ value, key, label }) => (
          <Badge key={value} variant='secondary' className='h-6 px-2 text-xs'>
            {label}
            <Button
              variant='ghost'
              size='xs'
              onClick={() => removeFilter(searchParams, pathname, key)}
              label={<Icon icon='icon-close' size={12} />}
            />
          </Badge>
        ))}
        <Button
          variant='ghost'
          size='xs'
          onClick={() => clearAllFilters(searchParams, pathname)}
          label={t('clear_all')}
        />
      </div>
    </div>
  )
}

export { FilterToggle, FilterGroup, ActiveFilters }
