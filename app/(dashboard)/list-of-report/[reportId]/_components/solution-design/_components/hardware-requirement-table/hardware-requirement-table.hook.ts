import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

import { useReportDetail } from '@/services/swr/hooks/use-report-detail'

import { getColumns } from './hardware-requirement-table.helpers'

export const useHardwareRequirementTable = () => {
  const t = useTranslations('report')

  const { reportId } = useParams()
  const { report } = useReportDetail(reportId as string)

  const data = report.report_solution_design.report_hardware_requirement

  const columns = useMemo(() => getColumns(t), [])

  return {
    data: [data],
    columns
  }
}
