import { capitalize } from 'lodash'
import { TFunction } from 'next-intl'

import { ExtendedColumnDef } from '@/components/table/table.types'
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

export const getColumns = (t: TFunction): ExtendedColumnDef<OfferTableType>[] => {
  return [
    {
      accessorKey: 'category',
      header: () => t('category'),
      cellClassName: 'font-semibold'
    },
    {
      accessorKey: 'description',
      header: () => t('description')
    }
  ]
}
