import { ColumnDef } from '@tanstack/react-table'
import { ReactNode } from 'react'

export type ReportTableProps<TData, TValue> = {
  title: string
  description?: string | ReactNode
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  hasBorder?: boolean
  hasContainer?: boolean
  footer?: ReactNode
  classNames?: {
    container?: string
    title?: string
    description?: string
    table?: string
  }
}
