import { ColumnDef } from '@tanstack/react-table'
import { TFunction } from 'next-intl'

import { toCurrencyString } from '@/utils/to-currency-string'

import { TableType } from './total-saving-potential-table.types'

export const getColumns = (t: TFunction): ColumnDef<TableType>[] => {
  return [
    {
      accessorKey: 'kw',
      header: () => <span>{t('kw')}</span>
    },
    {
      accessorKey: 'idr',
      header: () => <span className='table-row-end'>{t('idr')}</span>,
      cell: ({ row }) => {
        const formatted = toCurrencyString(row.getValue('idr'))
        return <span className='table-row-end font-semibold'>{formatted}</span>
      }
    }
  ]
}
