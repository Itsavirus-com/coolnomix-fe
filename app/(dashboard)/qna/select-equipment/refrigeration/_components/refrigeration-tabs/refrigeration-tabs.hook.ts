import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

import { FormSidebarTab } from '@/components/form-sidebar/form-sidebar.types'
import { useTabParams } from '@/hooks/url-params.hook'

export const useRefrigerationTabs = () => {
  const t = useTranslations('qna')

  const { currentValue, updateParam } = useTabParams('walk-in-chiller')

  const tabs: FormSidebarTab[] = useMemo(
    () => [
      {
        label: t('kitchen_set'),
        value: 'walk-in-chiller',
        icon: 'icon-avocado',
        active: true,
        children: [
          {
            label: t('walk_in_chiller'),
            value: 'walk-in-chiller'
          },
          {
            label: t('walk_in_freezer'),
            value: 'walk-in-freezer'
          }
        ]
      }
    ],
    []
  )

  return {
    tabs,
    currentTab: currentValue,
    handleChangeTab: updateParam
  }
}
