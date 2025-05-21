import { ColumnDef } from '@tanstack/react-table'
import { TFunction } from 'next-intl'

import { TableType } from './hardware-requirement-table.types'

export const getColumns = (t: TFunction): ColumnDef<TableType>[] => {
  return [
    {
      accessorKey: 'total_coolnomix_unit',
      header: () => <span>{t('no_of_coolnomix_units')}</span>,
      cell: ({ row }) => {
        return <span className='font-semibold'>{row.original.total_coolnomix_unit}</span>
      }
    },
    {
      accessorKey: 'total_energy_monitors',
      header: () => <span className='table-row-end'>{t('no_of_energy_monitors')}</span>,
      cell: ({ row }) => {
        return (
          <span className='table-row-end font-semibold'>{row.original.total_energy_monitors}</span>
        )
      }
    }
  ]
}
