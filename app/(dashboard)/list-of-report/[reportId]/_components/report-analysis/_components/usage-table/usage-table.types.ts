import { ReportTableProps } from '../../../report-table/report-table.types'

export type UsageTableType = {
  id: string
  name: string
  description: string
  energy_usage_kw: number
  running_cost_idr: number
}

export type UsageTableProps = {
  data: UsageTableType[]
} & Pick<ReportTableProps<unknown, unknown>, 'description' | 'title'>
