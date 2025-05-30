import { ChartConfig } from '@/components/ui/chart'

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
  const apiResponse = {
    id: '0196e79d-17d2-7269-9700-9751b2db81a4',
    created_at: '2025-05-19T08:15:54.322169Z',
    updated_at: '2025-05-19T08:15:54.322169Z',
    data: [
      {
        id: '0196e79d-17d2-7d2d-ba47-b9105b87dcf5',
        created_at: '2025-05-19T08:15:54.322499Z',
        updated_at: '2025-05-19T08:15:54.322499Z',
        unit_type: 'aircon',
        unit_id: '0196e79d-17c9-78cc-9867-13ab7c25463e',
        label: 'Aircon 1',
        yearly_current_usage_kw: 12480,
        yearly_saving_potentials_kw: 8736
      },
      {
        id: '0196e79d-17d2-7113-a217-789b55bf5efe',
        created_at: '2025-05-19T08:15:54.322499Z',
        updated_at: '2025-05-19T08:15:54.322499Z',
        unit_type: 'aircon',
        unit_id: '0196e79d-17ca-749c-87c0-f027fbd16008',
        label: 'Aircon 2',
        yearly_current_usage_kw: 25480,
        yearly_saving_potentials_kw: 17836
      },
      {
        id: '0196e79d-17d2-74df-8904-13e6e27054c7',
        created_at: '2025-05-19T08:15:54.322499Z',
        updated_at: '2025-05-19T08:15:54.322499Z',
        unit_type: 'aircon',
        unit_id: '0196e79d-17cb-78e1-b158-e741c56d2622',
        label: 'Aircon 3',
        yearly_current_usage_kw: 26208,
        yearly_saving_potentials_kw: 18345.6
      },
      {
        id: '0196e79d-17d2-705d-b975-40baa1196442',
        created_at: '2025-05-19T08:15:54.322499Z',
        updated_at: '2025-05-19T08:15:54.322499Z',
        unit_type: 'aircon',
        unit_id: '0196e79d-17cc-779b-8226-b4d17c002f0b',
        label: 'Aircon 4',
        yearly_current_usage_kw: 61152,
        yearly_saving_potentials_kw: 42806.4
      },
      {
        id: '0196e79d-17d3-7f81-b0ae-d0e194029093',
        created_at: '2025-05-19T08:15:54.322499Z',
        updated_at: '2025-05-19T08:15:54.322499Z',
        unit_type: 'aircon',
        unit_id: '0196e79d-17ce-71ff-bef5-aa43f868237e',
        label: 'Aircon 5',
        yearly_current_usage_kw: 62400,
        yearly_saving_potentials_kw: 43680
      }
    ]
  }

  return {
    ticks,
    apiResponse,
    chartConfig
  }
}
