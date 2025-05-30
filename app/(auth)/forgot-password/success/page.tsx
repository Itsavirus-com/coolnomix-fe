import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import React from 'react'

import SuccessMessageCard from '@/components/success-message-card/SuccessMessageCard'
import { loginPath } from '@/config/paths/auth-path'
import { ENV } from '@/libs/env'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Reset Password Success - ${ENV.NEXT_PUBLIC_PROJECT_NAME}`
  }
}

const Page = async () => {
  const t = await getTranslations('auth')

  return (
    <SuccessMessageCard
      title={t('your_password_has_been_reset')}
      description={t(
        'youve_successfully_changed_your_password_please_use_your_new_password_to_log_in_securely'
      )}
      buttons={[
        {
          label: t('login'),
          link: loginPath()
        }
      ]}
      imageAlt={t('an_awesome_success_result_animation')}
    />
  )
}

export default Page
