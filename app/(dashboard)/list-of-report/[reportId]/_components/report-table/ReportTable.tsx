import React from 'react'

import Text from '@/components/text/Text'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DataTable } from '@/components/ui/data-table'
import { cn } from '@/libs/utils'

import { ReportTableProps } from './report-table.types'

const ReportTable = <TData, TValue>(props: ReportTableProps<TData, TValue>) => {
  const {
    title,
    description,
    data,
    columns,
    hasBorder,
    hasContainer = true,
    footer,
    classNames
  } = props

  return (
    <Card
      className={
        hasContainer
          ? classNames?.container
          : cn('rounded-none !border-none bg-transparent p-0', classNames?.container)
      }
    >
      <CardHeader className='grid-cols-[1fr_auto]'>
        <CardTitle>
          <Text variant='subtitle2' weight='semibold' className={classNames?.title}>
            {title}
          </Text>
        </CardTitle>
        <CardDescription>
          {typeof description === 'string' ? (
            <Text
              variant='body1'
              className={cn('text-grey-darkest italic', classNames?.description)}
            >
              {description}
            </Text>
          ) : (
            description
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <DataTable<TData, TValue>
          classNames={{
            container: hasBorder ? '' : 'border-none',
            header: 'report-table-header'
          }}
          columns={columns}
          data={data}
          footer={footer}
        />
      </CardContent>
    </Card>
  )
}

export default ReportTable
