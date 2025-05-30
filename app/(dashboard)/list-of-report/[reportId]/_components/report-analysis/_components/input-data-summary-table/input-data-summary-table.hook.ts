import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

import { getKwhSummaryColumns, getUnitSummaryColumns } from './input-data-summary-table.helpers'

export const useInputDataSummaryTable = () => {
  const t = useTranslations('report')

  const summaryData = [
    {
      id: '1',
      external_units: 5,
      internal_units: 12,
      total_kw: 38.0
    }
  ]

  const kwhSummaryData = [
    {
      id: '2',
      kwh_tarif: 1300,
      kwh_tarif_glwb: 1600,
      avg_operating_hours: 16.4
    }
  ]

  const unitSummaryColumns = useMemo(() => getUnitSummaryColumns(t), [])
  const kwhSummaryColumns = useMemo(() => getKwhSummaryColumns(t), [])

  return {
    summaryData,
    kwhSummaryData,
    unitSummaryColumns,
    kwhSummaryColumns
  }
}
