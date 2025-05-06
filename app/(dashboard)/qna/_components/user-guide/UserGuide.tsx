import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'

import Icon from '@/components/icon/Icon'
import Text from '@/components/text/Text'

const UserGuide = () => {
  const { t } = useTranslation('qna')

  return (
    <div className='bg-grey-lightest border-color-20 absolute right-0 bottom-14 left-1/2 flex w-max -translate-x-1/2 flex-col items-center gap-y-1 rounded-lg px-14 py-6 text-center'>
      <Text weight='medium'>{t('need_help')}</Text>
      <Text className='text-grey-darkest'>{t('check_guideline')}</Text>
      <div className='flex items-center gap-x-1'>
        <Icon icon='icon-arrow-right' />
        <Link href='#' className='font-medium'>
          {t('qna_user_guide')}
        </Link>
      </div>
    </div>
  )
}

export default UserGuide
