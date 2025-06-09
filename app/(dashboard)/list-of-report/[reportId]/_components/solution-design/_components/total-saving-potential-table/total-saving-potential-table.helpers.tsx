import { TFunction } from 'next-intl'

import { ExtendedColumnDef } from '@/components/table/table.types'
import { toCurrencyString } from '@/utils/to-currency-string'

import { TableType } from './total-saving-potential-table.types'

export const getColumns = (t: TFunction): ExtendedColumnDef<TableType>[] => {
  return [
    {
      accessorKey: 'kw',
      header: () => t('kw')
    },
    {
      accessorKey: 'idr',
      header: () => t('idr'),
      headerClassName: 'table-row-end',
      cell: ({ row }) => {
        const formatted = toCurrencyString(row.original.idr)
        return <span className='table-row-end font-semibold'>{formatted}</span>
      }
    }
  ]
}
