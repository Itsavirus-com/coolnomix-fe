import { ColumnDef } from '@tanstack/react-table'
import { TFunction } from 'next-intl'

import { formatKw } from '@/utils/formatter'
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
        const formatted = toCurrencyString(row.original.energy_usage_kw)
        const kwFormatted = formatKw(row.original.energy_usage_kw)
        return (
          <span className='font-semibold'>
            {row.original.period === 'yearly' ? formatted : kwFormatted}
          </span>
        )
      }
    },
    {
      accessorKey: 'running_cost_idr',
      header: () => <div className='table-row-end'>{t('per_year')}</div>,
      cell: ({ row }) => {
        const formatted = toCurrencyString(row.original.running_cost_idr)
        const kwFormatted = formatKw(row.original.running_cost_idr)

        return (
          <span className='table-row-end font-semibold'>
            {row.original.period === 'yearly' ? formatted : kwFormatted}
          </span>
        )
      }
    }
  ]
}
