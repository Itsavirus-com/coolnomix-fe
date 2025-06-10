'use client'

import { flexRender } from '@tanstack/react-table'
import React from 'react'

import { TableBody as ShadcnTableBody, TableCell, TableRow } from '@/components/ui/table'

import { TableEmpty, TableError } from './table-error'
import { ExtendedColumnDef, TableBodyProps } from './table.types'
import LoadingWithText from '../loading-with-text/LoadingWithText'

const DEFAULT_COLUMN_SIZE = 150

const TableBody = <TData,>({
  table,
  columns,
  isLoading,
  isError,
  className,
  emptyContent,
  onRetry,
  errorMessage
}: TableBodyProps<TData>) => {
  if (isError) {
    return (
      <ShadcnTableBody className={className}>
        <TableError table={table} onRetry={onRetry} errorMessage={errorMessage} />
      </ShadcnTableBody>
    )
  }

  if (isLoading) {
    return (
      <ShadcnTableBody className={className}>
        <TableRow>
          <TableCell colSpan={columns.length}>
            <div className='flex min-h-[150px] items-center justify-center'>
              <LoadingWithText />
            </div>
          </TableCell>
        </TableRow>
      </ShadcnTableBody>
    )
  }

  if (!table.getRowModel().rows?.length) {
    return (
      <ShadcnTableBody className={className}>
        <TableRow>
          <TableCell colSpan={columns.length}>
            <div className='min-h-[150px]'>{emptyContent || <TableEmpty />}</div>
          </TableCell>
        </TableRow>
      </ShadcnTableBody>
    )
  }

  return (
    <ShadcnTableBody className={className}>
      {table.getRowModel().rows.map((row) => (
        <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
          {row.getVisibleCells().map((cell) => {
            const columnDef = cell.column.columnDef as ExtendedColumnDef<TData>

            return (
              <TableCell
                key={cell.id}
                style={{
                  width:
                    cell.column.getSize() !== DEFAULT_COLUMN_SIZE
                      ? cell.column.getSize()
                      : undefined
                }}
                className={columnDef.cellClassName}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            )
          })}
        </TableRow>
      ))}
    </ShadcnTableBody>
  )
}

export default TableBody
