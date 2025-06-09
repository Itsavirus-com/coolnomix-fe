'use client'

import { useTranslations } from 'next-intl'
import React, { FC, useMemo } from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/libs/utils'

import { generatePageSizeOptions } from './table.helper'
import { PaginationProps } from './table.types'
import UncontrolledSelect from '../forms/select/UncontrolledSelect'
import Icon from '../icon/Icon'
import Text from '../text/Text'

const Pagination: FC<PaginationProps> = (props) => {
  const { pagination, setPagination, pageCount, className } = props

  const t = useTranslations('common')

  const { pageIndex, pageSize } = pagination

  const canPreviousPage = pageIndex > 0
  const canNextPage = pageIndex < pageCount - 1
  const pageSizeOptions = useMemo(() => generatePageSizeOptions(), [])

  const goToPage = (page: number) => {
    setPagination((old) => ({
      ...old,
      pageIndex: page
    }))
  }

  const previousPage = () => {
    if (canPreviousPage) {
      goToPage(pageIndex - 1)
    }
  }

  const nextPage = () => {
    if (canNextPage) {
      goToPage(pageIndex + 1)
    }
  }

  const firstPage = () => {
    goToPage(0)
  }

  const lastPage = () => {
    goToPage(pageCount - 1)
  }

  const setPageSize = (size: number) => {
    setPagination((old) => ({
      ...old,
      pageSize: size,
      pageIndex: 0
    }))
  }

  return (
    <div className={cn('flex items-center justify-between gap-8', className)}>
      <div className='flex items-center gap-2'>
        <Text tag='span' variant='body1'>
          {t('rows_per_page')}
        </Text>
        <UncontrolledSelect
          items={pageSizeOptions}
          value={pageSize.toString()}
          onValueChange={(value) => setPageSize(Number(value))}
          placeholder={pageSize.toString()}
        />
      </div>
      <div className='flex items-center gap-8'>
        <Text tag='span' variant='body1'>
          {t('page')} {pageIndex + 1} {t('of')} {pageCount}
        </Text>
        <div className='flex items-center gap-2'>
          <Button
            variant='outline'
            className='hidden h-6 w-6 rounded p-0 lg:flex'
            onClick={firstPage}
            disabled={!canPreviousPage}
          >
            <span className='sr-only'>{t('go_to_first_page')}</span>
            <Icon icon='icon-chevrons-left' size={16} className='text-grey-darkest' />
          </Button>
          <Button
            variant='outline'
            className='h-6 w-6 rounded p-0'
            onClick={previousPage}
            disabled={!canPreviousPage}
          >
            <span className='sr-only'>{t('go_to_previous_page')}</span>
            <Icon icon='icon-chevron-left' size={16} className='text-grey-darkest' />
          </Button>
          <Button
            variant='outline'
            className='h-6 w-6 rounded p-0'
            onClick={nextPage}
            disabled={!canNextPage}
          >
            <span className='sr-only'>{t('go_to_next_page')}</span>
            <Icon icon='icon-chevron-right' size={16} className='text-grey-darkest' />
          </Button>
          <Button
            variant='outline'
            className='border-color-20 hidden h-6 w-6 rounded p-0 lg:flex'
            onClick={lastPage}
            disabled={!canNextPage}
          >
            <span className='sr-only'>{t('go_to_last_page')}</span>
            <Icon icon='icon-chevrons-right' size={16} className='text-grey-darkest' />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Pagination
