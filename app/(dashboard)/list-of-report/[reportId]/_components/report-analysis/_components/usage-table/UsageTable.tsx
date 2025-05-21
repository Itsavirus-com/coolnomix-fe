import { FC, memo } from 'react'

import { useUsageTable } from './usage-table.hook'
import { UsageTableProps, UsageTableType } from './usage-table.types'
import ReportTable from '../../../report-table/ReportTable'

const UsageTable: FC<UsageTableProps> = (props) => {
  const { title, description, data } = props

  const { columns } = useUsageTable()

  return (
    <ReportTable<UsageTableType, unknown>
      title={title}
      description={description}
      columns={columns}
      data={data}
    />
  )
}

export default memo(UsageTable)
