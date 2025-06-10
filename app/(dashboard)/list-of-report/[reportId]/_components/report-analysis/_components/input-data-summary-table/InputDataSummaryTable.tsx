import { useTranslations } from 'next-intl'
import React from 'react'

import Table from '@/components/table/table'
import Text from '@/components/text/Text'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { useInputDataSummaryTable } from './input-data-summary-table.hook'

const InputDataSummaryTable = () => {
  const t = useTranslations('report')

  const { data, unitSummaryColumns, kwhSummaryColumns } = useInputDataSummaryTable()

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Text variant='subtitle2' weight='semibold'>
            {t('summary_of_input_data')}
          </Text>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='grid grid-cols-[448px_1fr] gap-3'>
          <Table
            classNames={{
              container: 'border-none',
              header: 'report-table-header',
              body: 'font-semibold'
            }}
            columns={unitSummaryColumns}
            data={data}
            enablePagination={false}
            enableSorting={false}
          />
          <Table
            classNames={{
              container: 'border-none',
              header: 'report-table-header',
              body: 'font-semibold'
            }}
            columns={kwhSummaryColumns}
            data={data}
            enablePagination={false}
            enableSorting={false}
          />
        </div>
      </CardContent>
    </Card>
  )
}

export default InputDataSummaryTable
