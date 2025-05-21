import { ChartConfig } from '@/components/ui/chart'

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
        roi: -65033937,
        fee: 142205760
      },
      {
        id: '0196e79d-17d6-71f0-8c3e-d1133fe09301',
        created_at: '2025-05-19T08:15:54.325949Z',
        updated_at: '2025-05-19T08:15:54.325949Z',
        label: 'Year 2',
        roi: 12393543,
        fee: 0
      },
      {
        id: '0196e79d-17d6-71f0-8c3e-d1133fe09301',
        created_at: '2025-05-19T08:15:54.325949Z',
        updated_at: '2025-05-19T08:15:54.325949Z',
        label: 'Year 3',
        roi: 77427480,
        fee: 0
      },
      {
        id: '0196e79d-17d6-71f0-8c3e-d1133fe09301',
        created_at: '2025-05-19T08:15:54.325949Z',
        updated_at: '2025-05-19T08:15:54.325949Z',
        label: 'Year 4',
        roi: 77427480,
        fee: 0
      },
      {
        id: '0196e79d-17d6-71f0-8c3e-d1133fe09301',
        created_at: '2025-05-19T08:15:54.325949Z',
        updated_at: '2025-05-19T08:15:54.325949Z',
        label: 'Year 5',
        roi: 77427480,
        fee: 0
      }
    ]
  }

  return {
    ticks,
    chartConfig,
    apiResponse
  }
}
