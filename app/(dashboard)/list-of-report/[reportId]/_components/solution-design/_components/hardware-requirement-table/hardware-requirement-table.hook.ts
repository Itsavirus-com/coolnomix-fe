import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

import { getColumns } from './hardware-requirement-table.helpers'
import { TableType } from './hardware-requirement-table.types'

export const useHardwareRequirementTable = () => {
  const t = useTranslations('report')

  const data: TableType[] = [
    {
      id: '1',
      total_coolnomix_unit: 12,
      total_energy_monitors: 0
    }
  ]
  const columns = useMemo(() => getColumns(t), [])

  return {
    data,
    columns
  }
}
