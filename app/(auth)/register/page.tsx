import { Metadata } from 'next'
import React from 'react'

import { ENV } from '@/libs/env'

import RegisterGroupNameForm from './_components/register-group-name-form/RegisterGroupNameForm'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Register Group Name - ${ENV.NEXT_PUBLIC_PROJECT_NAME}`
  }
}

const Page = () => {
  return <RegisterGroupNameForm />
}

export default Page
