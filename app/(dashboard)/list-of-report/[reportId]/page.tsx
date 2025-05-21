import { Metadata } from 'next'
import React from 'react'

import Breadcrumbs from '@/components/breadcrumbs/Breadcrumb'
import { reportListPath } from '@/config/paths/list-of-report-path'
import { ENV } from '@/libs/env'

import ReportAnalysis from './_components/report-analysis/ReportAnalysis'
import ReportProfile from './_components/report-profile/ReportProfile'
import SolutionDesign from './_components/solution-design/SolutionDesign'

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
        <ReportProfile />
        <ReportAnalysis />
        <SolutionDesign />
      </div>
    </main>
  )
}

export default Page
