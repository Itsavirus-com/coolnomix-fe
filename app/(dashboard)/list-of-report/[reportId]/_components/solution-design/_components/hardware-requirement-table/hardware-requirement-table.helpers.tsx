import { TFunction } from 'next-intl'

import { ExtendedColumnDef } from '@/components/table/table.types'

import { TableType } from './hardware-requirement-table.types'

export const getColumns = (t: TFunction): ExtendedColumnDef<TableType>[] => {
  return [
    {
      accessorKey: 'total_coolnomix_unit',
      header: () => t('no_of_coolnomix_units'),
      cellClassName: 'font-semibold'
    },
    {
      accessorKey: 'total_energy_monitors',
      header: () => t('no_of_energy_monitors'),
      headerClassName: 'table-row-end',
      cellClassName: 'table-row-end font-semibold'
    }
  ]
}
