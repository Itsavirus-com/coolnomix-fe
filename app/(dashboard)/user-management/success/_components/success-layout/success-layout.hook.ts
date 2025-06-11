import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

import { successAnimation } from '@/assets/images'
import { userManagementPath } from '@/config/paths/user-management-path'

import { SuccessMessageLayoutType } from './success-layout.types'

export const useSuccessLayout = () => {
  const t = useTranslations('common')

  const defaultMessage: SuccessMessageLayoutType = {
    title: t('account_added_successfully'),
    description: t('the_account_has_been_added'),
    buttons: [
      null,
      {
        label: t('go_to_home'),
        link: userManagementPath()
      }
    ],
    image: successAnimation,
    imageAlt: t('an_awesome_success_result_animation')
  }

  const message = useMemo(() => defaultMessage, [])

  return {
    ...message
  }
}
