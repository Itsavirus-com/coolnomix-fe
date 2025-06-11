import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

import { useAccountAction } from './_hooks/get-account-action.hook'
import { getColumns } from './user-management-table.helpers'
import { UserManagementTableType } from './user-management-table.types'

export const useUserManagementTable = () => {
  const t = useTranslations('user_management')

  const { getAccountAction } = useAccountAction()

  const data = useMemo((): UserManagementTableType[] => {
    return [
      {
        email_address: 'test@test.com',
        name: 'Test User',
        account_status: 'active',
        role: 'admin',
        action: getAccountAction('active')
      }
    ]
  }, [])

  const columns = useMemo(() => getColumns(t), [])

  return {
    data,
    columns
  }
}
