import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

import { useReportDetail } from '@/services/swr/hooks/use-report-detail'
import { formatKw } from '@/utils/formatter'
import { toCurrencyString } from '@/utils/to-currency-string'

import { UsageTableType } from '../usage-table/usage-table.types'

export const useYearPotentialSavingTable = () => {
  const t = useTranslations('report')

  const { reportId } = useParams()
  const { report } = useReportDetail(reportId as string)

  const potentialSaving = 30
  const unit = report?.report_analysis?.report_summary_input_datum.external_units

  const reportEstimatedUsages = report?.report_analysis?.report_estimated_usages
  const potentialUsage = reportEstimatedUsages?.find((usage) => usage.type === 'potential')
  const estimatedUsage = potentialUsage?.report_estimated_usage_data || []
  const monthlyData = estimatedUsage?.find((data) => data.period === 'monthly')
  const yearlyData = estimatedUsage?.find((data) => data.period === 'yearly')

  const data: UsageTableType[] = useMemo(() => {
    if (!monthlyData || !yearlyData) return []

    return [
      {
        id: 'energy-usage',
        name: t('total_energy_usage', { unit }),
        description: t('kw_after_saving', { saving: potentialSaving }),
        perMonth: formatKw(monthlyData.energy_usage_kw),
        perYear: formatKw(yearlyData.energy_usage_kw)
      },
      {
        id: 'running-cost',
        name: t('total_running_cost', { unit }),
        description: t('idr_after_saving', { saving: potentialSaving }),
        perMonth: toCurrencyString(monthlyData.running_cost_idr),
        perYear: toCurrencyString(yearlyData.running_cost_idr)
      }
    ]
  }, [monthlyData, yearlyData, unit])

  return {
    data,
    potentialSaving
  }
}
