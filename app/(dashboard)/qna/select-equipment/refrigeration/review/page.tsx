import { Metadata } from 'next'
import React from 'react'

import { ENV } from '@/libs/env'

import RefrigerationTabsContent from '../_components/refrigeration-tabs-content/RefrigerationTabsContent'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Refrigeration Preview - ${ENV.NEXT_PUBLIC_PROJECT_NAME}`
  }
}

const Page = () => {
  return <RefrigerationTabsContent inPreview />
}

export default Page
