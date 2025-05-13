import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { z } from 'zod'

import { FormSidebarTab } from '@/(dashboard)/qna/_components/form-sidebar/form-sidebar.types'
import { qnaTypeRefrigerationReviewPath } from '@/config/paths'
import { remove } from '@/utils/storage'

import { formSchema } from '../../regrigeration.scheme'

export const useRefrigerationTabs = () => {
  const t = useTranslations('qna')

  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()

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

  const handleReview = () => {
    router.push(qnaTypeRefrigerationReviewPath())
  }

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values)
    remove('QNA_FORM')
  }

  useEffect(() => {
    setCurrentTab(tab)
  }, [tab])

  return {
    tabs,
    currentTab,
    handleChangeTab,
    handleReview,
    handleSubmit
  }
}
