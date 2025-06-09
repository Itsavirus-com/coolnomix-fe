import { TFunction } from 'next-intl'

import { ExtendedColumnDef } from '@/components/table/table.types'
import { toCurrencyString } from '@/utils/to-currency-string'

import { InputDataSummaryTableType } from './input-data-summary-table.types'

export const getUnitSummaryColumns = (
  t: TFunction
): ExtendedColumnDef<InputDataSummaryTableType>[] => {
  return [
    {
      accessorKey: 'external_units',
      header: () => t('external_units')
    },
    {
      accessorKey: 'internal_units',
      header: () => t('internal_units')
    },
    {
      accessorKey: 'total_kw',
      header: () => t('total_kw')
    }
  ]
}

export const getKwhSummaryColumns = (
  t: TFunction
): ExtendedColumnDef<InputDataSummaryTableType>[] => {
  return [
    {
      accessorKey: 'tariff_lwb',
      header: () => t('kwh_tarif_lwb'),
      cell: ({ row }) => {
        const formatted = toCurrencyString(row.original.tariff_lwb)
        return <span>{formatted}</span>
      }
    },
    {
      accessorKey: 'tariff_glwb',
      header: () => t('kwh_tarif_glwb'),
      cell: ({ row }) => {
        const formatted = toCurrencyString(row.original.tariff_glwb)
        return <span>{formatted}</span>
      }
    },
    {
      accessorKey: 'average_operating_hours',
      header: () => t('avg_operating_hours')
    }
  ]
}
