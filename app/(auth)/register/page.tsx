import { Metadata } from 'next'
import React from 'react'

import { ENV } from '@/libs/env'

import RegisterGroupBranchForm from './_components/register-group-branch-form/RegisterGroupBranchForm'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Register Group Branch - ${ENV.NEXT_PUBLIC_PROJECT_NAME}`
  }
}

const Page = () => {
  return <RegisterGroupBranchForm />
}

export default Page
