import { startCase, upperCase } from 'lodash'
import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

import { useReportDetail } from '@/services/swr/hooks/use-report-detail'

import { formatValue, getColumns } from './offer-two-table.helpers'
import { OfferTableType } from '../offer-table/offer-table.types'

const fieldsToExclude = [
  'id',
  'created_at',
  'updated_at',
  'type',
  'report_offer_fees',
  'line_chart',
  'line_chart_id',
  'total_investments',
  'total_savings'
]

export const useOfferOneTable = () => {
  const t = useTranslations('report')

  const { reportId } = useParams()
  const { report } = useReportDetail(reportId as string)

  const savingShare = report.report_solution_design.report_offers.find(
    (offer) => offer.type === 'saving_share'
  )

  const data: OfferTableType[] = useMemo(() => {
    if (!savingShare) return []

    return Object.keys(savingShare)
      .filter((key) => !fieldsToExclude.includes(key))
      .map((key) => ({
        category: ['roi', 'capex'].includes(key) ? upperCase(key) : startCase(key),
        description: formatValue(key, savingShare[key as keyof typeof savingShare])
      }))
  }, [savingShare])

  const columns = useMemo(() => getColumns(t), [])

  return {
    data,
    columns
  }
}
