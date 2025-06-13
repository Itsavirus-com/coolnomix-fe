import { ReportTableProps } from '../../../report-table/report-table.types'

export type UsageDataConfig = {
  name: string
  description: string
  energyValue: number
  runningCostValue: number
}

export type UsageTableType = {
  id: string
  name: string
  description: string
  perMonth: string
  perYear: string
}

export type UsageTableProps = {
  data: UsageTableType[]
} & Pick<ReportTableProps<unknown, unknown>, 'description' | 'title'>
