export const useCurrentUsageTable = () => {
  const data = [
    {
      id: '1',
      name: 'Total Energy Usage - 5 Units',
      description: '(KW)',
      energy_usage_kw: 38,
      running_cost_idr: 1300
    },
    {
      id: '2',
      name: 'Total Running Cost - 5 Units',
      description: '(IDR)',
      energy_usage_kw: 38,
      running_cost_idr: 1300
    }
  ]

  return {
    data
  }
}
