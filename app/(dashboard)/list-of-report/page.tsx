import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import React from 'react'

import Breadcrumbs from '@/components/breadcrumbs/Breadcrumb'
import Button from '@/components/button/Button'
import { WorkflowListProps } from '@/components/workflow-list/workflow-list.types'
import WorkflowList from '@/components/workflow-list/WorkflowList'
import { qnaPath } from '@/config/paths'
import { reportListPath } from '@/config/paths/list-of-report-path'
import PageHeaderHandler from '@/handlers/page-header-handler/PageHeaderHandler'
import { ENV } from '@/libs/env'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `List of Report - ${ENV.NEXT_PUBLIC_PROJECT_NAME}`
  }
}

const breadcrumbs = [
  { key: 'pepito-market', label: 'Pepito Market', href: '/' },
  { key: 'energy-saving-audit', label: 'Energy Saving Audit', href: reportListPath() },
  { key: 'list-of-report', label: 'List of Report', href: reportListPath() }
]

const data: WorkflowListProps['workflowData'] = [
  {
    id: 1,
    name: 'Pending',
    status: 'done',
    lists: [
      {
        id: 1,
        branchName: 'Pepito Market Group',
        name: 'Air Conditioning Report',
        date: '7:18 AM, February 3, 2025',
        equipmentType: 'air-conditioning',
        type: 'report'
      }
    ]
  }
]

const Page = async () => {
  const t = await getTranslations('report')

  return (
    <main>
      <PageHeaderHandler icon='icon-snow' title='list_of_report' />
      <Breadcrumbs items={breadcrumbs} />
      <section className='content-placement-center content-placement-center--start'>
        <div className='flex w-[578px] flex-col'>
          <Button size='xs' className='w-fit self-end' label={t('start_qna')} link={qnaPath()} />
          <WorkflowList workflowData={data} />
        </div>
      </section>
    </main>
  )
}

export default Page
