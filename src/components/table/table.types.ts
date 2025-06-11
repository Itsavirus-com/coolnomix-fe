import { ColumnDef, PaginationState, Row, SortingState, Table } from '@tanstack/react-table'
import { VariantProps } from 'class-variance-authority'
import { ReactNode } from 'react'

import { buttonVariants } from '../ui/button'

// Extend ColumnDef to include custom properties using intersection types
export type ExtendedColumnDef<TData, TValue = unknown> = ColumnDef<TData, TValue> & {
  headerClassName?: string
  cellClassName?: string
}

export type FilterState = Record<string, any>

export type Action = 'view' | 'edit' | 'delete' | 'deactivate' | 'activate' | 'resend'

type BaseTableProps<TData> = {
  table: Table<TData>
  className?: string
}

type TableColumnsType<TData> = ExtendedColumnDef<TData, any>[]

type TableFeatureFlags = {
  enablePagination?: boolean
  enableSorting?: boolean
  manualPagination?: boolean
  manualSorting?: boolean
}

export type TableClassNames = {
  container?: string
  table?: string
  header?: string
  body?: string
}

export type TableHeaderProps<TData> = BaseTableProps<TData> & {
  enableSorting?: boolean
}

export type TableBodyProps<TData> = BaseTableProps<TData> & {
  columns: TableColumnsType<TData>
  isLoading?: boolean
  isError?: boolean
  emptyContent?: ReactNode
  onRetry?: () => void
  errorMessage?: string
}

export type TableErrorProps<TData> = Pick<BaseTableProps<TData>, 'table'> & {
  onRetry?: () => void
  errorMessage?: string
}

export type PaginationProps = {
  pagination: PaginationState
  setPagination: (updater: (old: PaginationState) => PaginationState) => void
  pageCount: number
  className?: string
}

export type TableProps<TData> = TableFeatureFlags &
  Omit<TableBodyProps<TData>, 'table'> &
  Omit<TableErrorProps<TData>, 'table'> & {
    name?: string
    data: TData[]
    pageSize?: number
    classNames?: TableClassNames
    footer?: ReactNode
    enableSelection?: boolean
    pageCount?: number
  }

export type TableSearchParams = {
  defaultFilters?: Record<string, any>
  defaultSorting?: SortingState
  defaultPagination?: PaginationState
}

export type UseTableParams = TableFeatureFlags & {
  data: any[]
  columns: TableColumnsType<any>
  pageSize?: number
  pageCount?: number
  searchParams?: TableSearchParams
}

export interface TableActionsProps<TData> extends Pick<BaseTableProps<TData>, 'table'> {
  selectedRows?: Row<TData>[]
  onAction?: (action: Action, data: TData | TData[]) => void
  className?: string
  actions?: Action[]
}

export type TableAction<T extends Action = Action> = {
  label: T
  variant?: VariantProps<typeof buttonVariants>['variant']
  action: () => void
}

export interface TableRowActionsProps<TData> {
  row?: Row<TData>
  actions?: TableAction[]
}

export interface FilterToggleProps {
  filterKey: string
  filterValue: string
  label: string
  isActive?: boolean
  className?: string
  variant?: VariantProps<typeof buttonVariants>['variant']
}

export interface FilterGroupProps {
  title?: string
  filters: Omit<FilterToggleProps, 'isActive'>[]
  className?: string
}
