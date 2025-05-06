import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { z } from 'zod'

import { qnaTypeRefrigerationReviewPath } from '@/config/paths/qna-path'
import { remove } from '@/utils/storage'

import { formSchema } from './regrigeration.scheme'
import { FormSidebarTab } from '../../_components/form-sidebar/form-sidebar.types'

const tabs: FormSidebarTab[] = [
  {
    label: 'Kitchen set',
    value: 'walk-in-chiller',
    icon: 'icon-avocado',
    active: true,
    children: [
      {
        label: 'Walk in Chiller',
        value: 'walk-in-chiller'
      },
      {
        label: 'Walk in Freezer',
        value: 'walk-in-freezer'
      }
    ]
  }
]

export const useRefrigerationForm = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()

  const tab = searchParams.get('tab') || 'walk-in-chiller'

  const [currentTab, setCurrentTab] = useState(tab)

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
