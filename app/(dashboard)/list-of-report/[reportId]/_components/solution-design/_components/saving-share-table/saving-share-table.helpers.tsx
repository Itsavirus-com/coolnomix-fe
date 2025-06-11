import { truncate } from 'lodash'
import { TFunction } from 'next-intl'

import { ExtendedColumnDef } from '@/components/table/table.types'
import Text from '@/components/text/Text'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { toCurrencyString } from '@/utils/to-currency-string'

import { TableType } from './saving-share-table.types'

export const getColumns = (t: TFunction): ExtendedColumnDef<TableType>[] => {
  return [
    {
      accessorKey: 'label',
      header: () => t('year')
    },
    {
      accessorKey: 'fee',
      header: () => `${t('fee')}(IDR)`,
      headerClassName: 'table-row-end',
      cell: ({ row }) => {
        const formatted = toCurrencyString(row.original.fee)

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
      header: () => t('actual_savings'),
      headerClassName: 'table-row-end',
      cell: ({ row }) => {
        const formatted = toCurrencyString(row.original.actual_savings)

        if (formatted.length < 10) {
          return <span className='table-row-end text-blue-dark font-semibold'>{formatted}</span>
        }

        return (
          <Tooltip>
            <TooltipTrigger className='w-full'>
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
