import { useParams } from 'next/navigation'

import { ChartConfig } from '@/components/ui/chart'
import { useReportDetail } from '@/services/swr/hooks/use-report-detail'

const ticks = [-100000000, -50000000, 0, 50000000, 100000000, 150000000]

const chartConfig = {
  fee: {
    label: 'Fee (IDR)',
    color: 'var(--color-orange)'
  },
  roi: {
    label: 'ROI',
    color: 'var(--color-blue-dark)'
  }
} satisfies ChartConfig

export const useOwnRoiChart = () => {
  const { reportId } = useParams()
  const { report } = useReportDetail(reportId as string)

  const data = report.report_solution_design.report_offers?.find(
    (offer) => offer.type === 'rent_own'
  )?.line_chart.data

  return {
    ticks,
    chartConfig,
    data
  }
}
