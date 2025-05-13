'use client'

import { useTranslations } from 'next-intl'
import React, { FC } from 'react'

import Badge from '@/components/badge'
import DateRangeInput from '@/components/forms/date-range-input/DateRangeInput'
import SearchInput from '@/components/search-input/SearchInput'
import { FormProvider } from '@/components/ui/form'

import { useSearchFilter } from './search-filter.hook'
import { SearchFilterProps } from './search-filter.types'

const SearchFilter: FC<SearchFilterProps> = (props) => {
  const { showBadge, children } = props

  const t = useTranslations('common')

  const { methods, onSubmit } = useSearchFilter()

  return (
    <>
      <SearchInput name='search' className='h-8 px-3 py-1' />
      <div className='mt-3 flex items-center justify-between'>
        <div className='flex items-center gap-1.5'>
          <FormProvider methods={methods} onSubmit={onSubmit}>
            <DateRangeInput name='date' size='sm' className='w-fit' />
          </FormProvider>
          {showBadge && (
            <>
              <Badge icon='icon-library' className='cursor-pointer'>
                {t('qna')}
              </Badge>
              <Badge icon='icon-notes' className='cursor-pointer'>
                {t('report')}
              </Badge>
            </>
          )}
        </div>
        {children}
      </div>
    </>
  )
}

export default SearchFilter
