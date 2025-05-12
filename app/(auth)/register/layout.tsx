import { getTranslations } from 'next-intl/server'
import React from 'react'

import Text from '@/components/text/Text'

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const t = await getTranslations('auth')

  return (
    <>
      <div className='flex flex-col items-center justify-center text-center'>
        <Text tag='h1' variant='title3' weight='semibold'>
          {t('registration')}
        </Text>
        <Text className='text-grey-darkest mt-1.5 px-14'>
          {t('sign_up_to_start_your_journey_with_us_it_only_takes_a_minute')}
        </Text>
      </div>
      {children}
    </>
  )
}

export default Layout
