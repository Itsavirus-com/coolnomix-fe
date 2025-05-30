import { ColumnDef } from '@tanstack/react-table'
import { truncate } from 'lodash'
import { TFunction } from 'next-intl'

import Text from '@/components/text/Text'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { toCurrencyString } from '@/utils/to-currency-string'

import { TableType } from './saving-share-table.types'

export const getColumns = (t: TFunction): ColumnDef<TableType>[] => {
  return [
    {
      accessorKey: 'label',
      header: () => <span>{t('year')}</span>
    },
    {
      accessorKey: 'fee',
      header: () => <span className='table-row-end'>{`${t('fee')}(IDR)`}</span>,
      cell: ({ row }) => {
        const formatted = toCurrencyString(row.getValue('fee'))

        if (formatted.length < 10) {
          return <span className='table-row-end text-blue-dark font-semibold'>{formatted}</span>
        }

        return (
          <Tooltip>
            <TooltipTrigger>
              <span className='table-row-end text-blue-dark font-semibold'>
                {truncate(formatted, { length: 10 })}
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <Text tag='span'>{formatted}</Text>
            </TooltipContent>
          </Tooltip>
        )
      }
    },
    {
      accessorKey: 'actual_savings',
      header: () => <span className='table-row-end'>{t('actual_savings')}</span>,
      cell: ({ row }) => {
        const formatted = toCurrencyString(row.getValue('actual_savings'))

        if (formatted.length < 10) {
          return <span className='table-row-end text-blue-dark font-semibold'>{formatted}</span>
        }

        return (
          <Tooltip>
            <TooltipTrigger>
              <span className='table-row-end text-blue-dark font-semibold'>
                {truncate(formatted, { length: 10 })}
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <Text tag='span'>{formatted}</Text>
            </TooltipContent>
          </Tooltip>
        )
      }
    }
  ]
}
