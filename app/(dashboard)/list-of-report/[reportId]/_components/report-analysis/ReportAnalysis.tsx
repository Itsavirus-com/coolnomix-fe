'use client'

import { useTranslations } from 'next-intl'
import React from 'react'

import Text from '@/components/text/Text'

import CurrentAndSavingChart from './_components/current-and-saving-chart/CurrentAndSavingChart'
import CurrentUsageTable from './_components/current-usage-table/CurrentUsageTable'
import InputDataSummaryTable from './_components/input-data-summary-table/InputDataSummaryTable'
import SystemHealth from './_components/system-health/SystemHealth'
import YearPotentialSavingTable from './_components/year-potential-saving-table/YearPotentialSavingTable'

const ReportAnalysis = () => {
  const t = useTranslations('report')

  return (
    <section className='bg-grey-lightest border-color-50 rounded-md border-1 p-6'>
      <Text variant='subtitle2' weight='bold' className='text-brand-dark mb-6 pl-5'>
        {t('report_analysis')}
      </Text>
      <div className='flex flex-col gap-3'>
        <SystemHealth />
        <InputDataSummaryTable />
        <div className='grid grid-cols-[460px_1fr] gap-3'>
          <div>
            <CurrentUsageTable />
            <div className='bg-pure-white text-grey-darkest m-auto my-3 flex h-8 w-8 items-center justify-center rounded-full'>
              <Text tag='span' variant='body1' weight='medium'>
                VS
              </Text>
            </div>
            <YearPotentialSavingTable />
          </div>
          <CurrentAndSavingChart />
        </div>
      </div>
    </section>
  )
}

export default ReportAnalysis
