import { Metadata } from 'next'
import React from 'react'

import { ENV } from '@/libs/env'

import GetStarted from './_components/get-started/GetStarted'
import UserGuide from './_components/user-guide/UserGuide'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `QNA - ${ENV.NEXT_PUBLIC_PROJECT_NAME}`
  }
}

const Page = () => {
  return (
    <main>
      <section className='content-placement-center content-placement-center--start !mt-24'>
        <div className='flex flex-col items-center'>
          <GetStarted />
          <UserGuide />
        </div>
      </section>
    </main>
  )
}

export default Page
