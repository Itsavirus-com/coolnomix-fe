import React, { FC, memo } from 'react'

import { OfferTableProps, OfferTableType } from './offer-table.types'
import ReportTable from '../../../report-table/ReportTable'

const OfferTable: FC<OfferTableProps> = (props) => {
  const {
    title,
    description,
    data,
    columns,
    hasBorder = true,
    hasContainer = false,
    footer
  } = props

  return (
    <ReportTable<OfferTableType, unknown>
      title={title}
      description={description}
      columns={columns}
      data={data}
      hasBorder={hasBorder}
      hasContainer={hasContainer}
      footer={footer}
    />
  )
}

export default memo(OfferTable)
