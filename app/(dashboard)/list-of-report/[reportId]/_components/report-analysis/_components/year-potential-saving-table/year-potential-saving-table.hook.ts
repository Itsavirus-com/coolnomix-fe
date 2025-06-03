import { useTranslations } from 'next-intl'

import { DUMMY_REPORT_DETAIL_ID } from '@/config/constant'
import { useReportDetail } from '@/services/swr/hooks/use-report-detail'

export const useYearPotentialSavingTable = () => {
  const t = useTranslations('report')

  const { isLoading, report } = useReportDetail(DUMMY_REPORT_DETAIL_ID)

  const reportEstimatedUsages = report?.report_analysis?.report_estimated_usages
  const unit = report?.report_analysis?.report_summary_input_datum.external_units
  const potentialSaving = 30

  const data = reportEstimatedUsages
    ?.find((usage) => usage.type === 'potential')
    .report_estimated_usage_data.map((data) => ({
      id: data.id,
      name:
        data.period === 'yearly'
          ? t('total_running_usage_units', { unit })
          : t('total_energy_usage_units', { unit }),
      description:
        data.period === 'yearly'
          ? t('idr_after_saving', { saving: potentialSaving })
          : t('kw_after_saving', { saving: potentialSaving }),
      energy_usage_kw: data.energy_usage_kw,
      running_cost_idr: data.running_cost_idr,
      period: data.period
    }))

  return {
    isLoading,
    data,
    potentialSaving
  }
}
