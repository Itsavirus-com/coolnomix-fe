import { ColumnDef } from '@tanstack/react-table'
import { capitalize } from 'lodash'
import { TFunction } from 'next-intl'

import { toCurrencyString } from '@/utils/to-currency-string'

import { OfferTableType } from '../offer-table/offer-table.types'

// Format value based on key type
export const formatValue = (key: string, value: any): string => {
  switch (key) {
    case 'term':
      return `${value} months`
    case 'payments':
      return capitalize(value)
    case 'guarantee':
      return `${value} years`
    case 'roi':
      return `${value}%`
    case 'total_investments':
    case 'total_savings':
      return toCurrencyString(value)
    default:
      return String(value)
  }
}

export const getColumns = (t: TFunction): ColumnDef<OfferTableType>[] => {
  return [
    {
      accessorKey: 'category',
      header: () => <span>{t('category')}</span>,
      cell: ({ row }) => {
        return <span className='font-semibold'>{row.original.category}</span>
      }
    },
    {
      accessorKey: 'description',
      header: () => <span className='table-row-end'>{t('description')}</span>,
      cell: ({ row }) => {
        return <span className='table-row-end'>{row.original.description}</span>
      }
    }
  ]
}
