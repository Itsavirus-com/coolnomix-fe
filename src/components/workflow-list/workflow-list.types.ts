import { ReportListStatus, ReportListsType } from '../report-lists/report-lists.types'

export type WorkflowListProps = {
  workflowData: {
    id: number
    name: string
    status: ReportListStatus
    lists: ReportListsType[]
  }[]
}
