import { useTranslations } from 'next-intl'
import React from 'react'

import { useTotalSavingPotentialTable } from './total-saving-potential-table.hook'
import { TableType } from './total-saving-potential-table.types'
import ReportTable from '../../../report-table/ReportTable'

const TotalSavingPotentialTable = () => {
  const t = useTranslations('report')

  const { data, columns } = useTotalSavingPotentialTable()

  return (
    <ReportTable<TableType, unknown>
      title={t('total_savings_potential')}
      description={<span className='text-blue-dark font-semibold'>{t('over_5_year_period')}</span>}
      columns={columns}
      data={data}
    />
  )
}

export default TotalSavingPotentialTable
