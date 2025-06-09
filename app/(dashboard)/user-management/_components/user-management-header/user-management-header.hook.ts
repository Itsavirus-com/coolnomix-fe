import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

export const useUserManagementHeader = () => {
  const t = useTranslations('common')

  const rolesOptions = useMemo(
    () => [
      {
        value: 'administrator',
        label: t('administrator')
      },
      {
        value: 'client_group',
        label: t('client_group')
      },
      {
        value: 'client_branch',
        label: t('client_branch')
      },
      {
        value: 'internal_technician',
        label: t('internal_technician')
      }
    ],
    []
  )

  return {
    rolesOptions
  }
}
