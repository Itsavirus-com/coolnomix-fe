import { ColumnDef } from '@tanstack/react-table'
import { TFunction } from 'next-intl'

import { OfferTableType } from '../offer-table/offer-table.types'

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
