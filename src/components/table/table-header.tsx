'use client'

import { flexRender } from '@tanstack/react-table'
import React from 'react'

import { TableHeader as ShadcnTableHeader, TableHead, TableRow } from '@/components/ui/table'
import { cn } from '@/libs/utils'

import { ExtendedColumnDef, TableHeaderProps } from './table.types'
import Icon from '../icon/Icon'
import Text from '../text/Text'

const DEFAULT_COLUMN_SIZE = 150

const TableHeader = <TData,>(props: TableHeaderProps<TData>) => {
  const { table, className, enableSorting } = props

  return (
    <ShadcnTableHeader className={className}>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            const columnDef = header.column.columnDef as ExtendedColumnDef<TData>

            return (
              <TableHead
                key={header.id}
                className={cn(
                  header.column.getCanSort() && enableSorting && 'cursor-pointer select-none',
                  'relative'
                )}
                style={{
                  width: header.getSize() !== DEFAULT_COLUMN_SIZE ? header.getSize() : undefined
                }}
                onClick={enableSorting ? header.column.getToggleSortingHandler() : undefined}
              >
                <div className='flex items-center space-x-2'>
                  {header.isPlaceholder ? null : (
                    <div className={cn('w-full', enableSorting && 'flex items-center gap-1')}>
                      <Text
                        tag='span'
                        variant='body1'
                        className={cn('text-grey-darkest', columnDef.headerClassName)}
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                      </Text>
                      {header.column.getCanSort() && enableSorting && (
                        <Icon icon='icon-chevrons-up-down' size={16} />
                      )}
                    </div>
                  )}
                </div>
              </TableHead>
            )
          })}
        </TableRow>
      ))}
    </ShadcnTableHeader>
  )
}

export default TableHeader
