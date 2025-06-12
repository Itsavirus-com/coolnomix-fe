import { startCase, upperCase } from 'lodash'
import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

import { useReportDetail } from '@/services/swr/hooks/use-report-detail'
import { toCurrencyString } from '@/utils/to-currency-string'

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

export const useOfferTwoTable = () => {
  const t = useTranslations('report')

  const { reportId } = useParams()
  const { report } = useReportDetail(reportId as string)

  const rentOwn = report.report_solution_design.report_offers.find(
    (offer) => offer.type === 'rent_own'
  )

  const data: OfferTableType[] = useMemo(() => {
    if (!rentOwn) return []

    return Object.keys(rentOwn)
      .filter((key) => !fieldsToExclude.includes(key))
      .map((key) => ({
        category: ['roi', 'capex'].includes(key) ? upperCase(key) : startCase(key),
        description: formatValue(key, rentOwn[key as keyof typeof rentOwn])
      }))
  }, [rentOwn])

  const columns = useMemo(() => getColumns(t), [])

  const totalInvestment = toCurrencyString(rentOwn.total_investments)
  const totalSavings = toCurrencyString(rentOwn.total_savings)

  return {
    data,
    columns,
    totalInvestment,
    totalSavings
  }
}
