import { useParams } from 'next/navigation'

import { ChartConfig } from '@/components/ui/chart'
import { useReportDetail } from '@/services/swr/hooks/use-report-detail'

const ticks = [20000000, 40000000, 60000000, 80000000]

const chartConfig = {
  fee: {
    label: 'Fee (IDR)',
    color: 'var(--color-orange)'
  },
  actual_savings: {
    label: 'Actual Savings',
    color: 'var(--color-blue-dark)'
  }
} satisfies ChartConfig

export const useEstimatedSavingSharingsChart = () => {
  const { reportId } = useParams()
  const { report } = useReportDetail(reportId as string)

  const data = report.report_solution_design.report_offers?.find(
    (offer) => offer.type === 'saving_share'
  )?.line_chart.data

  return {
    ticks,
    chartConfig,
    data
  }
}
