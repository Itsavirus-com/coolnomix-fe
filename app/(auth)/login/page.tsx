import { Metadata } from 'next'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import React from 'react'

import Text from '@/components/text/Text'
import { forgotPasswordPath } from '@/config/paths/auth-path'
import { ENV } from '@/libs/env'

import LoginForm from './_components/login-form/LoginForm'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Login - ${ENV.NEXT_PUBLIC_PROJECT_NAME}`
  }
}

const Page = async () => {
  const t = await getTranslations('auth')

  return (
    <>
      <div className='flex flex-col items-center justify-center text-center'>
        <Text tag='h1' variant='title3' weight='semibold'>
          {t('welcome_back')}
        </Text>
        <Text className='text-grey-darkest mt-1.5 px-6'>
          {t('log_in_to_access_your_account_and_continue_your_journey_with_us')}
        </Text>
      </div>
      <LoginForm />
      <div className='flex flex-col items-center justify-center text-center'>
        <Text tag='p' variant='body2' weight='medium' className='text-grey-darkest'>
          {t('did_you_forgot_your_password')}
        </Text>
        <div className='flex items-center gap-1'>
          <Text tag='p' variant='body2' weight='medium' className='text-grey-darkest'>
            {t('click_here_to')}
          </Text>
          <Text tag='p' variant='body2' weight='medium'>
            <Link href={forgotPasswordPath()}>{t('reset_it')}</Link>
          </Text>
        </div>
      </div>
    </>
  )
}

export default Page
