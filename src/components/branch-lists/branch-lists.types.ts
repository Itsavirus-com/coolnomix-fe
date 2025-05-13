import { ComponentProps } from 'react'

export type BranchListType = {
  id: string
  name: string
  date: string
  email: string
  avatar: string
  approvedCount: number
  pendingCount: number
}

export type BranchListProps = ComponentProps<'div'> & BranchListType
