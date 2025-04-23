import { ColumnDef, PaginationState, Table } from '@tanstack/react-table'

export type FilterState = Record<string, any>

export type Action = 'view' | 'edit' | 'delete'

export type LoadingState = 'loading' | 'sorting' | 'loadingMore' | 'error' | 'idle' | 'filtering'

export type TableHeaderProps = {
  table: Table<any>
}

export type TableBodyProps = {
  table: Table<any>
  loadingState: LoadingState
  isError?: boolean
}

export type TableErrorProps = {
  table: Table<any>
}

export type PaginationProps = {
  pagination: PaginationState
  setPagination: any
  pages: number
}

export type TableProps<TableValues> = {
  name?: string
  columns: ColumnDef<TableValues, any>[]
  data: TableValues[]
  pageSize?: number
  isLoading?: boolean
} & Omit<TableBodyProps, 'table' | 'loadingState'>

export type TableSearchParams = {
  defaultFilters?: Record<string, any>
}

export type UseTableSearchParams = (defaultParams?: TableSearchParams) => string
