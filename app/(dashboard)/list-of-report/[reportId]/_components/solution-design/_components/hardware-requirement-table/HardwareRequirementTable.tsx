import { useTranslations } from 'next-intl'
import React from 'react'

import { useHardwareRequirementTable } from './hardware-requirement-table.hook'
import { TableType } from './hardware-requirement-table.types'
import ReportTable from '../../../report-table/ReportTable'

const HardwareRequirementTable = () => {
  const t = useTranslations('report')

  const { data, columns } = useHardwareRequirementTable()

  return (
    <ReportTable<TableType, unknown>
      title={t('hardware_requirement')}
      columns={columns}
      data={data}
    />
  )
}

export default HardwareRequirementTable
