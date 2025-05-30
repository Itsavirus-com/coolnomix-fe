export const useYearPotentialSavingTable = () => {
  const data = [
    {
      id: '1',
      name: 'Total Energy Usage - 5 Units',
      description: '(KW) (After 30% saving)',
      energy_usage_kw: 38,
      running_cost_idr: 1300
    },
    {
      id: '2',
      name: 'Total Running Cost - 5 Units',
      description: '(IDR) (After 30% saving)',
      energy_usage_kw: 38,
      running_cost_idr: 1300
    }
  ]

  const potentialSaving = 30

  return {
    data,
    potentialSaving
  }
}
