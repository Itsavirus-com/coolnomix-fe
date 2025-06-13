import { Metadata } from 'next'
import React, { ReactNode } from 'react'

import Breadcrumbs from '@/components/breadcrumbs/Breadcrumb'
import { qnaPath } from '@/config/paths'
import { reportListPath } from '@/config/paths/list-of-report-path'
import PageHeaderHandler from '@/handlers/page-header-handler/PageHeaderHandler'
import { ENV } from '@/libs/env'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `QNA - ${ENV.NEXT_PUBLIC_PROJECT_NAME}`
  }
}

const breadcrumbs = [
  { key: 'pepito-market', label: 'Pepito Market', href: '/' },
  { key: 'energy-saving-audit', label: 'Energy Saving Audit', href: reportListPath() },
  { key: 'qna', label: 'QNA', href: qnaPath() }
]

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <PageHeaderHandler icon='icon-snow' title='qna' />
      <Breadcrumbs items={breadcrumbs} />
      {children}
    </>
  )
}

export default Layout
