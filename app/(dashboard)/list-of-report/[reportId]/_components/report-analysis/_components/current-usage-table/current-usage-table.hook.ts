import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

import { useReportDetail } from '@/services/swr/hooks/use-report-detail'
import { formatKw } from '@/utils/formatter'
import { toCurrencyString } from '@/utils/to-currency-string'

import { UsageTableType } from '../usage-table/usage-table.types'

export const useCurrentUsageTable = () => {
  const t = useTranslations('report')

  const { reportId } = useParams()
  const { report } = useReportDetail(reportId as string)

  const unit = report?.report_analysis?.report_summary_input_datum.external_units ?? 0

  const reportEstimatedUsages = report?.report_analysis?.report_estimated_usages
  const currentUsage = reportEstimatedUsages?.find((usage) => usage.type === 'current')
  const estimatedUsage = currentUsage?.report_estimated_usage_data || []
  const monthlyData = estimatedUsage?.find((data) => data.period === 'monthly')
  const yearlyData = estimatedUsage?.find((data) => data.period === 'yearly')

  const data: UsageTableType[] = useMemo(() => {
    if (!monthlyData || !yearlyData) return []

    return [
      {
        id: 'energy-usage',
        name: t('total_energy_usage', { unit }),
        description: '(KW)',
        perMonth: formatKw(monthlyData.energy_usage_kw),
        perYear: formatKw(yearlyData.energy_usage_kw)
      },
      {
        id: 'running-cost',
        name: t('total_running_cost', { unit }),
        description: '(IDR)',
        perMonth: toCurrencyString(monthlyData.running_cost_idr),
        perYear: toCurrencyString(yearlyData.running_cost_idr)
      }
    ]
  }, [monthlyData, yearlyData, unit])

  return {
    data
  }
}
