import { Metadata } from 'next'
import { Suspense } from 'react'

import { ENV } from '@/libs/env'

import SuccessLayout from './components/success-layout/SuccessLayout'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Success - ${ENV.NEXT_PUBLIC_PROJECT_NAME}`
  }
}

const Page = () => {
  return (
    <Suspense>
      <SuccessLayout />
    </Suspense>
  )
}

export default Page
