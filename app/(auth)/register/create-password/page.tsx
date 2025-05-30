import { Metadata } from 'next'
import React from 'react'

import { ENV } from '@/libs/env'

import RegisterCreatePasswordForm from '../_components/register-create-password-form/RegisterCreatePasswordForm'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Register Password - ${ENV.NEXT_PUBLIC_PROJECT_NAME}`
  }
}

const Page = () => {
  return <RegisterCreatePasswordForm />
}

export default Page
