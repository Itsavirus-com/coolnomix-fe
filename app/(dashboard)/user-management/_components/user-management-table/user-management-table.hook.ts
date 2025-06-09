import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

import { getColumns } from './user-management-table.helpers'
import { UserManagementTableType } from './user-management-table.types'

export const useUserManagementTable = () => {
  const t = useTranslations('user_management')

  const data = useMemo((): UserManagementTableType[] => {
    return []
  }, [])

  const columns = useMemo(() => getColumns(t), [])

  return {
    data,
    columns
  }
}
