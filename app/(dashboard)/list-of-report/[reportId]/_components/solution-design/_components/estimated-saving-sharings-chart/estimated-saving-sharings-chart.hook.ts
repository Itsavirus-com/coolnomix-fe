import { ChartConfig } from '@/components/ui/chart'
import { DUMMY_REPORT_DETAIL_ID } from '@/config/constant'
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
  const { report } = useReportDetail(DUMMY_REPORT_DETAIL_ID)

  const data = report.report_solution_design.report_offers?.find(
    (offer) => offer.type === 'saving_share'
  )?.line_chart.data

  return {
    ticks,
    chartConfig,
    data
  }
}
