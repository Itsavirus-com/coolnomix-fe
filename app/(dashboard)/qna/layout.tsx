import React, { ReactNode } from 'react'

import Breadcrumbs from '@/components/breadcrumbs/Breadcrumb'
import { qnaPath } from '@/config/paths'

const breadcrumbs = [
  { key: 'pepito-market', label: 'Pepito Market', href: '/' },
  { key: 'energy-saving-audit', label: 'Energy Saving Audit', href: '/' },
  { key: 'qna', label: 'QNA', href: qnaPath() }
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
