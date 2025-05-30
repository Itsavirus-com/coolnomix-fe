import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import React from 'react'

import Text from '@/components/text/Text'
import { ENV } from '@/libs/env'

import CreateNewPasswordForm from '../_components/create-new-password-form/CreateNewPasswordForm'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Create new Password - ${ENV.NEXT_PUBLIC_PROJECT_NAME}`
  }
}

const Page = async () => {
  const t = await getTranslations('auth')

  return (
    <>
      <div className='flex flex-col items-center justify-center text-center'>
        <Text tag='h1' variant='title3' weight='semibold'>
          {t('forgot_password')}
        </Text>
        <Text className='text-grey-darkest mt-1.5 px-14'>
          {t('enter_your_registered_email_address_to_receive_a_password_reset_link')}
        </Text>
      </div>
      <CreateNewPasswordForm />
    </>
  )
}

export default Page
