import { ColumnDef } from '@tanstack/react-table'
import { TFunction } from 'next-intl'

import { toCurrencyString } from '@/utils/to-currency-string'

import { KwhSummaryType, UnitSummaryType } from './input-data-summary-table.types'

export const getUnitSummaryColumns = (t: TFunction): ColumnDef<UnitSummaryType>[] => {
  return [
    {
      accessorKey: 'external_units',
      header: () => <span>{t('external_units')}</span>,
      cell: ({ row }) => {
        return <span className='font-semibold'>{row.original.external_units}</span>
      }
    },
    {
      accessorKey: 'internal_units',
      header: () => <span>{t('internal_units')}</span>,
      cell: ({ row }) => {
        return <span className='font-semibold'>{row.original.internal_units}</span>
      }
    },
    {
      accessorKey: 'total_kw',
      header: () => <span>{t('total_kw')}</span>,
      cell: ({ row }) => {
        return <span className='font-semibold'>{row.original.total_kw}</span>
      }
    }
  ]
}

export const getKwhSummaryColumns = (t: TFunction): ColumnDef<KwhSummaryType>[] => {
  return [
    {
      accessorKey: 'kwh_tarif',
      header: () => <span>{t('kwh_tarif_lwb')}</span>,
      cell: ({ row }) => {
        const formatted = toCurrencyString(row.getValue('kwh_tarif'))
        return <span className='font-semibold'>{formatted}</span>
      }
    },
    {
      accessorKey: 'kwh_tarif_glwb',
      header: () => <span>{t('kwh_tarif_glwb')}</span>,
      cell: ({ row }) => {
        const formatted = toCurrencyString(row.getValue('kwh_tarif_glwb'))
        return <span className='font-semibold'>{formatted}</span>
      }
    },
    {
      accessorKey: 'avg_operating_hours',
      header: () => <span>{t('avg_operating_hours')}</span>,
      cell: ({ row }) => {
        return <span className='font-semibold'>{row.original.avg_operating_hours}</span>
      }
    }
  ]
}
