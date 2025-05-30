import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

import { getColumns } from './usage-table.helpers'

export const useUsageTable = () => {
  const t = useTranslations('report')

  const columns = useMemo(() => getColumns(t), [])

  return {
    columns
  }
}
