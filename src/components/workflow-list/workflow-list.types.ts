import type { ReportListStatus, ReportListsType } from '../report-lists/report-lists.types'

export type WorkflowListType = {
  id: string
  name: string
  status: ReportListStatus
  lists: ReportListsType[]
}

export type WorkflowListProps = {
  isLoading?: boolean
  workflowData: WorkflowListType[]
}
