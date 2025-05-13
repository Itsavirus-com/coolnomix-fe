import { ComponentProps } from 'react'

type QnaSubmissionListStatus = 'pending' | 'in-review' | 'approved' | 'declined' | 'done' | string

type QnaSubmissionListType = 'details-forms' | 'asset-list' | 'technician' | string

type QnaSubmissionListsType = {
  name: string
  date: string
  type?: QnaSubmissionListType
  equipmentType: string
}

export type QnaSubmissionListsProps = ComponentProps<'div'> & {
  lists: QnaSubmissionListsType[]
  status: QnaSubmissionListStatus
}

export type QnaSubmissionListProps = ComponentProps<'div'> &
  QnaSubmissionListsType & {
    status: QnaSubmissionListStatus
  }
