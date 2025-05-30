import { ColumnDef } from '@tanstack/react-table'

import { ReportTableProps } from '../../../report-table/report-table.types'

export type OfferTableType = {
  category: string
  description: string
}

export type OfferTableProps = {
  hasBorder?: boolean
  hasContainer?: boolean
  data: OfferTableType[]
  columns: ColumnDef<OfferTableType>[]
} & Pick<ReportTableProps<unknown, unknown>, 'description' | 'title' | 'footer'>
