import { ColumnDef } from '@tanstack/react-table'
import { TFunction } from 'next-intl'

import { UsageTableType } from './usage-table.types'

export const getColumns = (t: TFunction): ColumnDef<UsageTableType>[] => {
  return [
    {
      accessorKey: 'name',
      header: () => <span></span>,
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
      accessorKey: 'perMonth',
      header: () => t('per_month'),
      cell: ({ row }) => {
        return <span className='font-semibold'>{row.original.perMonth}</span>
      }
    },
    {
      accessorKey: 'perYear',
      header: () => <span className='table-row-end'>{t('per_year')}</span>,
      cell: ({ row }) => {
        return <span className='table-row-end font-semibold'>{row.original.perYear}</span>
      }
    }
  ]
}
