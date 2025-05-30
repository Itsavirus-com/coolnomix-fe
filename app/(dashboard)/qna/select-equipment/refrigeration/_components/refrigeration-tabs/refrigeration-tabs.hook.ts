import { usePathname, useSearchParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useCallback, useEffect, useMemo, useState } from 'react'

import { FormSidebarTab } from '@/components/form-sidebar/form-sidebar.types'

export const useRefrigerationTabs = () => {
  const t = useTranslations('qna')

  const pathname = usePathname()
  const searchParams = useSearchParams()

  const tab = searchParams.get('tab') || 'walk-in-chiller'

  const [currentTab, setCurrentTab] = useState(tab)

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

  const handleChangeTab = useCallback(
    (tab: string) => {
      setCurrentTab(tab)

      const params = new URLSearchParams(searchParams)
      params.set('tab', tab)
      window.history.pushState({}, '', pathname + '?' + params.toString())
    },
    [pathname, searchParams]
  )

  useEffect(() => {
    setCurrentTab(tab)
  }, [tab])

  return {
    tabs,
    currentTab,
    handleChangeTab
  }
}
