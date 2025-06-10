'use client'

import { Row } from '@tanstack/react-table'
import { startCase, toLower } from 'lodash'
import { useTranslations } from 'next-intl'
import React from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/libs/utils'

import { Action, TableActionsProps, TableRowActionsProps } from './table.types'
import Icon from '../icon/Icon'

const TableActions = <TData,>(props: TableActionsProps<TData>) => {
  const { selectedRows, onAction, className, actions = [] } = props

  const t = useTranslations('common')

  const hasSelectedRows = selectedRows && selectedRows.length > 0

  const handleBulkAction = (action: Action) => {
    if (!selectedRows || !onAction) return

    const selectedData = selectedRows.map((row: Row<TData>) => row.original)
    onAction(action, selectedData)
  }

  if (!hasSelectedRows) return null

  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <span className='text-muted-foreground text-sm'>
        {t('rows_selected', { count: selectedRows.length })}
      </span>

      {actions.includes('edit') && (
        <Button
          variant='outline'
          size='xs'
          onClick={() => handleBulkAction('edit')}
          disabled={selectedRows.length !== 1}
        >
          {t('edit')}
        </Button>
      )}

      {actions.includes('delete') && (
        <Button variant='outline' size='xs' onClick={() => handleBulkAction('delete')}>
          {t('delete', { count: selectedRows.length })}
        </Button>
      )}
    </div>
  )
}

const TableRowActions = <TData,>(props: TableRowActionsProps<TData>) => {
  const { actions = [] } = props

  return (
    <div className='group relative flex items-center'>
      <div className='group-hover:invisible'>
        <Icon icon='icon-ellipsis' />
      </div>
      <div className='invisible absolute top-0 left-0 z-10 flex h-7 items-center space-x-1.5 opacity-0 transition-all duration-200 ease-in-out group-hover:visible group-hover:opacity-100'>
        {actions?.map(({ label, variant, action }) => (
          <Button
            size='xs'
            key={label}
            onClick={action}
            variant={variant}
            className={cn('flex items-center space-x-2')}
          >
            <span>{startCase(toLower(label))}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}

export { TableActions, TableRowActions }
