'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import React from 'react'

import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'

import { TableErrorProps } from './table.types'
import Text from '../text/Text'

const TableError = <TData,>(props: TableErrorProps<TData>) => {
  const { table, onRetry, errorMessage } = props

  const t = useTranslations('common')

  const searchParams = useSearchParams()
  const pathname = usePathname()

  const handleRetry = () => {
    if (onRetry) onRetry()
    else {
      const newParams = new URLSearchParams(searchParams)
      window.history.pushState({}, '', `${pathname}?${newParams.toString()}`)
      window.location.reload()
    }
  }

  return (
    <TableRow>
      <TableCell colSpan={table.getAllColumns().length}>
        <div className='flex min-h-[150px] flex-col items-center justify-center gap-1'>
          <Text tag='h4' variant='body1' weight='medium' className='text-grey-darkest'>
            {t('unexpected_error')}
          </Text>
          <Text tag='p' variant='body1' weight='medium' className='text-grey-darkest'>
            {errorMessage || t('an_error_occurred_while_fetching_data')}
          </Text>
          <Button onClick={handleRetry} variant='outline' size='sm' className='mt-4'>
            {t('try_again')}
          </Button>
        </div>
      </TableCell>
    </TableRow>
  )
}

const TableEmpty = () => {
  const t = useTranslations('common')

  return (
    <div className='flex min-h-[150px] flex-col items-center justify-center gap-1'>
      <Text tag='h4' variant='body1' weight='medium' className='text-grey-darkest'>
        {t('no_data_found')}
      </Text>
      <Text tag='p' variant='body1' weight='medium' className='text-grey-darkest'>
        {t('we_couldnt_find_any_data_to_display_at_the_moment')}
      </Text>
    </div>
  )
}

export { TableError, TableEmpty }
