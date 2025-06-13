import { Metadata } from 'next'
import React from 'react'

import Breadcrumbs from '@/components/breadcrumbs/Breadcrumb'
import { reportListPath } from '@/config/paths/list-of-report-path'
import { ENV } from '@/libs/env'

import ReportDetail from './_components/report-detail/ReportDetail'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Report - ${ENV.NEXT_PUBLIC_PROJECT_NAME}`
  }
}

const breadcrumbs = [
  { key: 'energy-saving-audit', label: 'Energy Saving Audit', href: reportListPath() },
  { key: 'report-id', label: 'Report', href: '' }
]

const Page = () => {
  return (
    <main>
      <Breadcrumbs items={breadcrumbs} />
      <ReportDetail />
    </main>
  )
}

export default Page
