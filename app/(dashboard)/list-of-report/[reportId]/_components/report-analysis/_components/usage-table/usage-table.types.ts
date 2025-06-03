import { ReportEstimatedUsageData } from '@/services/swr/models/report.types'

import { ReportTableProps } from '../../../report-table/report-table.types'

export type UsageTableType = {
  id: string
  name: string
  description: string
} & Pick<ReportEstimatedUsageData, 'energy_usage_kw' | 'running_cost_idr' | 'period'>

export type UsageTableProps = {
  data: UsageTableType[]
} & Pick<ReportTableProps<unknown, unknown>, 'description' | 'title'>
