import { useTranslations } from 'next-intl'
import React from 'react'

import Text from '@/components/text/Text'

import { useYearPotentialSavingTable } from './year-potential-saving-table.hook'
import UsageTable from '../usage-table/UsageTable'

const YearPotentialSavingTable = () => {
  const t = useTranslations('report')

  const { data, potentialSaving } = useYearPotentialSavingTable()

  return (
    <UsageTable
      title={t('saving_potential_per_year')}
      description={
        <Text weight='semibold' className='text-blue-dark'>
          {potentialSaving}% {t('savings')}
        </Text>
      }
      data={data}
    />
  )
}

export default YearPotentialSavingTable
