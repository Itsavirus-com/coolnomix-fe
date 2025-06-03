import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

import { DUMMY_REPORT_DETAIL_ID } from '@/config/constant'
import { useReportDetail } from '@/services/swr/hooks/use-report-detail'

import { getKwhSummaryColumns, getUnitSummaryColumns } from './input-data-summary-table.helpers'

export const useInputDataSummaryTable = () => {
  const t = useTranslations('report')

  const { report } = useReportDetail(DUMMY_REPORT_DETAIL_ID)

  const data = report?.report_analysis?.report_summary_input_datum

  const unitSummaryColumns = useMemo(() => getUnitSummaryColumns(t), [])
  const kwhSummaryColumns = useMemo(() => getKwhSummaryColumns(t), [])

  return {
    data: [data],
    unitSummaryColumns,
    kwhSummaryColumns
  }
}
