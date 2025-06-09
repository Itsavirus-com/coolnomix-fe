'use client'

import {
  OnChangeFn,
  PaginationState,
  SortingState,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table'
import { useTranslations } from 'next-intl'
import React, { useMemo } from 'react'

import { Table as ShadcnTable } from '@/components/ui/table'
import { cn } from '@/libs/utils'

import Pagination from './pagination'
import TableBody from './table-body'
import TableHeader from './table-header'
import { useTableParams } from './table-params.hook'
import { TableProps } from './table.types'
import Text from '../text/Text'

const Table = <TData,>(props: TableProps<TData>) => {
  const t = useTranslations('common')

  const {
    columns,
    data = [],
    pageSize = 10,
    isLoading = false,
    isError = false,
    classNames,
    footer,
    enablePagination = true,
    enableSorting = true,
    enableSelection = false,
    manualPagination = false,
    manualSorting = false,
    pageCount: manualPageCount,
    emptyContent,
    onRetry,
    errorMessage
  } = props

  const { pagination, setPagination, sorting, setSorting, pageCount, paginatedData } =
    useTableParams({
      data,
      columns,
      pageSize,
      enablePagination,
      enableSorting,
      manualPagination,
      manualSorting,
      pageCount: manualPageCount
    })

  const handlePaginationChange: OnChangeFn<PaginationState> = (updaterOrValue) => {
    setPagination(updaterOrValue)
  }

  const handleSortingChange: OnChangeFn<SortingState> = (updaterOrValue) => {
    setSorting(updaterOrValue)
  }

  const table = useReactTable({
    data: manualPagination ? data : paginatedData,
    columns,
    state: {
      pagination: enablePagination ? pagination : undefined,
      sorting: enableSorting ? sorting : undefined
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: enableSorting && !manualSorting ? getSortedRowModel() : undefined,
    getPaginationRowModel:
      enablePagination && !manualPagination ? getPaginationRowModel() : undefined,
    onPaginationChange: enablePagination ? handlePaginationChange : undefined,
    onSortingChange: enableSorting ? handleSortingChange : undefined,
    manualPagination,
    manualSorting,
    pageCount: enablePagination ? pageCount : undefined,
    enableRowSelection: enableSelection
  })

  // Memoize table metrics for better performance
  const tableMetrics = useMemo(
    () => ({
      totalRows: table.getFilteredRowModel().rows.length,
      selectedRows: table.getFilteredSelectedRowModel().rows.length,
      currentPage: pagination.pageIndex + 1,
      totalPages: pageCount,
      pageSize: pagination.pageSize
    }),
    [
      pagination.pageIndex,
      pagination.pageSize,
      pageCount,
      table.getFilteredRowModel().rows.length,
      table.getFilteredSelectedRowModel().rows.length
    ]
  )

  return (
    <div className={cn('rounded-md border', classNames?.container)}>
      <ShadcnTable className={classNames?.table}>
        <TableHeader table={table} className={classNames?.header} enableSorting={enableSorting} />
        <TableBody
          table={table}
          columns={columns}
          isLoading={isLoading}
          isError={isError}
          className={classNames?.body}
          emptyContent={emptyContent}
          onRetry={onRetry}
          errorMessage={errorMessage}
        />
        {footer && footer}
      </ShadcnTable>

      {enablePagination && (
        <div className='mt-6 flex items-center justify-between'>
          <div className='text-muted-foreground flex-1 text-sm'>
            {enableSelection && tableMetrics.selectedRows > 0 && (
              <Text tag='span' variant='body2'>
                {t('rows_selected', {
                  count: tableMetrics.selectedRows,
                  total: tableMetrics.totalRows
                })}
              </Text>
            )}
          </div>
          <Pagination pagination={pagination} setPagination={setPagination} pageCount={pageCount} />
        </div>
      )}
    </div>
  )
}

export default Table
