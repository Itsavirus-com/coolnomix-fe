import { ChartConfig } from '@/components/ui/chart'

const ticks = [20000000, 40000000, 60000000, 80000000]

const chartConfig = {
  fee: {
    label: 'Fee (IDR)',
    color: 'var(--color-orange)'
  },
  actualSavings: {
    label: 'Actual Savings',
    color: 'var(--color-blue-dark)'
  }
} satisfies ChartConfig

export const useEstimatedSavingSharingsChart = () => {
  const apiResponse = {
    id: '0196e79d-17d5-7050-95d6-fe620f39b795',
    created_at: '2025-05-19T08:15:54.325601Z',
    updated_at: '2025-05-19T08:15:54.325601Z',
    data: [
      {
        id: '0196e79d-17d6-745e-afe7-33c8edf89f45',
        created_at: '2025-05-19T08:15:54.325949Z',
        updated_at: '2025-05-19T08:15:54.325949Z',
        label: 'Year 1',
        actualSavings: 7427480,
        fee: 75000000
      },
      {
        id: '0196e79d-17d6-71f0-8c3e-d1133fe09301',
        created_at: '2025-05-19T08:15:54.325949Z',
        updated_at: '2025-05-19T08:15:54.325949Z',
        label: 'Year 2',
        actualSavings: 23228244,
        fee: 45000000
      },
      {
        id: '0196e79d-17d6-71f0-8c3e-d1133fe09301',
        created_at: '2025-05-19T08:15:54.325949Z',
        updated_at: '2025-05-19T08:15:54.325949Z',
        label: 'Year 3',
        actualSavings: 38713740,
        fee: 23000000
      },
      {
        id: '0196e79d-17d6-71f0-8c3e-d1133fe09301',
        created_at: '2025-05-19T08:15:54.325949Z',
        updated_at: '2025-05-19T08:15:54.325949Z',
        label: 'Year 4',
        actualSavings: 54199236,
        fee: 15000000
      },
      {
        id: '0196e79d-17d6-71f0-8c3e-d1133fe09301',
        created_at: '2025-05-19T08:15:54.325949Z',
        updated_at: '2025-05-19T08:15:54.325949Z',
        label: 'Year 5',
        actualSavings: 61941984,
        fee: 10000000
      }
    ]
  }

  return {
    ticks,
    chartConfig,
    apiResponse
  }
}
