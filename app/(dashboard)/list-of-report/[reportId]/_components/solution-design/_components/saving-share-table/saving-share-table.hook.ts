import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

import { useReportDetail } from '@/services/swr/hooks/use-report-detail'
import { toCurrencyString } from '@/utils/to-currency-string'

import { getColumns } from './saving-share-table.helpers'

export const useSavingShareTable = () => {
  const t = useTranslations('report')

  const { reportId } = useParams()
  const { report } = useReportDetail(reportId as string)

  const data = report.report_solution_design.report_offers.find(
    (offer) => offer.type === 'saving_share'
  ).report_offer_fees

  const columns = useMemo(() => getColumns(t), [])

  const totalRealisedSavings = toCurrencyString(185825952)

  return {
    data,
    columns,
    totalRealisedSavings
  }
}
