import { Metadata } from 'next'
import React from 'react'

import { ENV } from '@/libs/env'

import RegisterCreateProfileForm from '../_components/register-create-profile-form/RegisterCreateProfileForm'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Register Profile - ${ENV.NEXT_PUBLIC_PROJECT_NAME}`
  }
}

const Page = () => {
  return <RegisterCreateProfileForm />
}

export default Page
