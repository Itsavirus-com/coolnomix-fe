'use client'

import React, { ReactNode } from 'react'

import Breadcrumbs from '@/components/breadcrumbs/Breadcrumb'
import { qnaPath } from '@/config/paths/qna-path'
import { getTranslate } from '@/locales/i18n'

const t = getTranslate('qna')

const breadcrumbs = [
  { key: 'pepito-market', label: t('pepito_market'), href: '/' },
  { key: 'energy-saving-audit', label: t('energy_saving_audit'), href: '/' },
  { key: 'qna', label: t('qna'), href: qnaPath() }
]

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      {children}
    </>
  )
}

export default Layout
