import { useParams } from 'next/navigation'

import { ChartConfig } from '@/components/ui/chart'
import { useReportDetail } from '@/services/swr/hooks/use-report-detail'

const ticks = [20000, 40000, 60000, 80000]

const chartConfig = {
  yearly_current_usage_kw: {
    label: 'Current Usage Per-year (KW)',
    color: 'var(--color-orange)'
  },
  yearly_saving_potentials_kw: {
    label: 'Savings Potential Per-year (KW)',
    color: 'var(--color-blue-dark)'
  }
} satisfies ChartConfig

export const useCurrentAndSavingChart = () => {
  const { reportId } = useParams()
  const { report } = useReportDetail(reportId as string)

  const data = report?.report_analysis?.grouped_bar_chart.data

  return {
    ticks,
    chartConfig,
    data
  }
}
