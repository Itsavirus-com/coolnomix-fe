import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import React from 'react'

import { defaultImage } from '@/assets/images'
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumb'
import Button from '@/components/button/Button'
import ProfileInfoCard from '@/components/profile-info-card/ProfileInfoCard'
import SearchFilter from '@/components/search-filter/SearchFilter'
import { WorkflowListProps } from '@/components/workflow-list/workflow-list.types'
import WorkflowList from '@/components/workflow-list/WorkflowList'
import { branchDetailedPath, listOfBranchPath } from '@/config/paths'
import { ENV } from '@/libs/env'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Data Log Monitoring - ${ENV.NEXT_PUBLIC_PROJECT_NAME}`
  }
}

const breadcrumbs = [
  { key: 'pepito-market', label: 'Pepito Market', href: '/' },
  { key: 'energy-saving-audit', label: 'Energy Saving Audit', href: listOfBranchPath() },
  { key: 'list-of-branch', label: 'List of Branch', href: listOfBranchPath() },
  { key: 'branch-detailed', label: 'Branch Detailed', href: branchDetailedPath() }
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
        type: 'details-forms'
      },
      {
        id: 2,
        branchName: 'Pepito Market Group',
        name: 'Refrigeration Report',
        date: '7:18 AM, February 3, 2025',
        equipmentType: 'refrigeration',
        type: 'details-forms'
      }
    ]
  }
]

const Page = async () => {
  const t = await getTranslations('listBranch')

  return (
    <main>
      <Breadcrumbs items={breadcrumbs} />
      <section className='content-placement-center content-placement-center--start'>
        <div className='w-[578px]'>
          <ProfileInfoCard
            name='Pepito Market Group'
            moreInfo='support@pepitomarket.com'
            avatar={defaultImage.src}
            size='lg'
            className='mb-5'
          />
          <SearchFilter showBadge>
            <Button size='xs' className='w-fit' label={t('download_as_pdf')} />
          </SearchFilter>
          <WorkflowList workflowData={data} />
        </div>
      </section>
    </main>
  )
}

export default Page
