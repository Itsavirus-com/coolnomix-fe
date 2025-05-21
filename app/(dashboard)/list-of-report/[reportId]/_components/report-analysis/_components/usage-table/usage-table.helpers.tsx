import { ColumnDef } from '@tanstack/react-table'
import { TFunction } from 'next-intl'

import { toCurrencyString } from '@/utils/to-currency-string'

import { UsageTableType } from './usage-table.types'

export const getColumns = (t: TFunction): ColumnDef<UsageTableType>[] => {
  return [
    {
      accessorKey: 'name',
      header: () => <div></div>,
      cell: ({ row }) => {
        return (
          <div className='text-grey-darkest flex flex-col'>
            <span className='font-medium'>{row.original.name}</span>
            <span className='font-medium italic'>{row.original.description}</span>
          </div>
        )
      }
    },
    {
      accessorKey: 'energy_usage_kw',
      header: () => <div>{t('per_month')}</div>,
      cell: ({ row }) => {
        const formatted = toCurrencyString(row.getValue('energy_usage_kw'))
        return <span className='font-semibold'>{formatted}</span>
      }
    },
    {
      accessorKey: 'running_cost_idr',
      header: () => <div className='table-row-end'>{t('per_year')}</div>,
      cell: ({ row }) => {
        const formatted = toCurrencyString(row.getValue('running_cost_idr'))
        return <span className='table-row-end font-semibold'>{formatted}</span>
      }
    }
  ]
}
