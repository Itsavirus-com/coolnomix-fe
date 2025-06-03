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
  { key: 'pepito-market', label: 'Pepito Market', href: '/' },
  { key: 'energy-saving-audit', label: 'Energy Saving Audit', href: reportListPath() },
  { key: 'report-id', label: 'Report', href: '' }
]

const Page = () => {
  return (
    <main>
      <Breadcrumbs items={breadcrumbs} />
      <div className='flex flex-col gap-8 px-[44px] pt-[54px]'>
        <ReportDetail />
      </div>
    </main>
  )
}

export default Page
