import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

import { toCurrencyString } from '@/utils/to-currency-string'

import { getColumns } from './saving-share-table.helpers'
import { TableType } from './saving-share-table.types'

export const useSavingShareTable = () => {
  const t = useTranslations('report')

  const data: TableType[] = [
    {
      id: 1,
      label: 'Year 1',
      fee: 696847732,
      actual_savings: 7742748
    },
    {
      id: 2,
      label: 'Year 2',
      fee: 54199236,
      actual_savings: 23228244
    },
    {
      id: 3,
      label: 'Year 3',
      fee: 38713740,
      actual_savings: 38713740
    },
    {
      id: 4,
      label: 'Year 4',
      fee: 23228244,
      actual_savings: 54199236
    },
    {
      id: 5,
      label: 'Year 5',
      fee: 15485496,
      actual_savings: 61941984
    }
  ]
  const columns = useMemo(() => getColumns(t), [])

  const totalRealisedSavings = toCurrencyString(185825952)

  return {
    data,
    columns,
    totalRealisedSavings
  }
}
