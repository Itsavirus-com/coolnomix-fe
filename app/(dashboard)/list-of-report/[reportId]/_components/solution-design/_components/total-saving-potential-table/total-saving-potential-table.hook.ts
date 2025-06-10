import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

import { DUMMY_REPORT_DETAIL_ID } from '@/config/constant'
import { useReportDetail } from '@/services/swr/hooks/use-report-detail'

import { getColumns } from './total-saving-potential-table.helpers'

export const useTotalSavingPotentialTable = () => {
  const t = useTranslations('report')

  const { report } = useReportDetail(DUMMY_REPORT_DETAIL_ID)

  const data = report.report_solution_design.report_total_saving_potential

  const columns = useMemo(() => getColumns(t), [])

  return {
    data: [data],
    columns
  }
}
