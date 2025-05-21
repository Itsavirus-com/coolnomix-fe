import { useTranslations } from 'next-intl'
import React from 'react'

import { useCurrentUsageTable } from './current-usage-table.hook'
import UsageTable from '../usage-table/UsageTable'

const CurrentUsageTable = () => {
  const t = useTranslations('report')

  const { data } = useCurrentUsageTable()

  return (
    <UsageTable
      title={t('current_usage')}
      description={t('with_well_maintained_system')}
      data={data}
    />
  )
}

export default CurrentUsageTable
