import { ComponentProps } from 'react'

export type ReportListStatus = 'pending' | 'in-review' | 'approved' | 'declined' | 'done'

export type ReportListType = 'details-forms' | 'asset-list' | 'technician' | 'report'

export type ReportListsType = {
  id: number
  branchName?: string
  name: string
  date: string
  type: ReportListType
  equipmentType: string
}

export type ReportListsProps = ComponentProps<'div'> & {
  lists: ReportListsType[]
  status: ReportListStatus
}

export type ReportListProps = Omit<ComponentProps<'div'>, 'id'> &
  ReportListsType & {
    status: ReportListStatus
  }
