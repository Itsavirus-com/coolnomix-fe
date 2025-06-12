import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

import { SelectItem } from '@/components/forms/select/select.types'
import { ROLE_OPTIONS } from '@/config/constant'

export const useUserManagementHeader = () => {
  const t = useTranslations('common')

  const rolesOptions = useMemo(
    (): SelectItem[] =>
      Object.entries(ROLE_OPTIONS).map(([value, label]) => ({ value, label: t(label) })),
    []
  )

  return {
    rolesOptions
  }
}
