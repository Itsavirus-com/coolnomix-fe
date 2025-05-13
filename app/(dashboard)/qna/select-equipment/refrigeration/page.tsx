import { Metadata } from 'next'
import React from 'react'

import { ENV } from '@/libs/env'

import RefrigerationTabs from './_components/refrigeration-tabs/RefrigerationTabs'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Refrigeration - ${ENV.NEXT_PUBLIC_PROJECT_NAME}`
  }
}

const Page = () => {
  return <RefrigerationTabs />
}

export default Page
