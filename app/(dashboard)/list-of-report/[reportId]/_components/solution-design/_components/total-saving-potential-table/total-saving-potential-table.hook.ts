import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

import { getColumns } from './total-saving-potential-table.helpers'
import { TableType } from './total-saving-potential-table.types'

export const useTotalSavingPotentialTable = () => {
  const t = useTranslations('report')

  const data: TableType[] = [
    {
      id: '1',
      kw: 281.58,
      idr: 387137400
    }
  ]
  const columns = useMemo(() => getColumns(t), [])

  return {
    data,
    columns
  }
}
