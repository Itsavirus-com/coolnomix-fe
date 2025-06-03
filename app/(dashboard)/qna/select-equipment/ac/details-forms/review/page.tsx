import { Metadata } from 'next'
import React, { Suspense } from 'react'

import { ENV } from '@/libs/env'

import ReviewTabs from './_components/review-tabs/ReviewTabs'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Air Conditioning Review - ${ENV.NEXT_PUBLIC_PROJECT_NAME}`
  }
}

const Page = () => {
  return (
    <main>
      <section className='content-placement-center content-placement-center--start'>
        <Suspense>
          <ReviewTabs />
        </Suspense>
      </section>
    </main>
  )
}

export default Page
