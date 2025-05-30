'use client'

import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { FC, useEffect } from 'react'

import { setPageHeader } from '@/stores/app-state-store.actions'

import { PageHeaderHandlerProps } from './page-header-handler.types'

const PageHeaderHandler: FC<PageHeaderHandlerProps> = (props) => {
  const { icon, title } = props

  const t = useTranslations('common')

  const pathname = usePathname()

  useEffect(() => {
    setPageHeader({
      icon,
      title: t(title)
    })
  }, [icon, title, pathname])

  return null
}

export default PageHeaderHandler
