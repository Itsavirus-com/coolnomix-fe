import { useTranslations } from 'next-intl'
import React from 'react'

import Text from '@/components/text/Text'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DataTable } from '@/components/ui/data-table'

import { useInputDataSummaryTable } from './input-data-summary-table.hook'

const InputDataSummaryTable = () => {
  const t = useTranslations('report')

  const { summaryData, kwhSummaryData, unitSummaryColumns, kwhSummaryColumns } =
    useInputDataSummaryTable()

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
          <DataTable
            classNames={{
              container: 'border-none',
              header: 'report-table-header'
            }}
            columns={unitSummaryColumns}
            data={summaryData}
          />
          <DataTable
            classNames={{
              container: 'border-none',
              header: 'report-table-header'
            }}
            columns={kwhSummaryColumns}
            data={kwhSummaryData}
          />
        </div>
      </CardContent>
    </Card>
  )
}

export default InputDataSummaryTable
