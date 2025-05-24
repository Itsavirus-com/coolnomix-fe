import { ComponentProps } from 'react'

import type { AcEquipmentType } from '@/types/general'

export type ReportListStatus = 'pending' | 'in-review' | 'approved' | 'declined' | 'done'

export type ReportListType = 'details-forms' | 'asset-list' | 'technician' | 'report'

export type ReportListsType = {
  id: string
  branchName?: string
  name: string
  date: string
  type: ReportListType
  equipmentType: AcEquipmentType
}

export type ReportListsProps = ComponentProps<'div'> & {
  isLoading?: boolean
  lists: ReportListsType[]
  status: ReportListStatus
}

export type ReportListProps = Omit<ComponentProps<'div'>, 'id'> &
  ReportListsType & {
    status: ReportListStatus
  }
