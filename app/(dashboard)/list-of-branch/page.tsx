import { Metadata } from 'next'
import React from 'react'

import { defaultImage } from '@/assets/images'
import BranchLists from '@/components/branch-lists/BranchLists'
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumb'
import ProfileInfoCard from '@/components/profile-info-card/ProfileInfoCard'
import SearchFilter from '@/components/search-filter/SearchFilter'
import { listOfBranchPath } from '@/config/paths'
import { ENV } from '@/libs/env'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `List of Branch - ${ENV.NEXT_PUBLIC_PROJECT_NAME}`
  }
}

const breadcrumbs = [
  { key: 'pepito-market', label: 'Pepito Market', href: '/' },
  { key: 'energy-saving-audit', label: 'Energy Saving Audit', href: listOfBranchPath() },
  { key: 'list-of-branch', label: 'List of Branch', href: listOfBranchPath() }
]

const Page = () => {
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
          <SearchFilter />
          <BranchLists />
        </div>
      </section>
    </main>
  )
}

export default Page
