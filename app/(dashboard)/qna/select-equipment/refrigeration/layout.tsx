import { getTranslations } from 'next-intl/server'
import React, { ReactNode, Suspense } from 'react'

import Description from '@/components/description/Description'

import RefrigerationTabs from './_components/refrigeration-tabs/RefrigerationTabs'

const Layout = async ({ children }: { children: ReactNode }) => {
  const t = await getTranslations('qna')

  return (
    <main>
      <section className='content-placement-center content-placement-center--start'>
        <Suspense>
          <RefrigerationTabs>
            <Description label={t('refrigeration_details')} className='mb-8' titleTag='h1'>
              {t('fill_in_the_necessary_details_about_your_refrigeration_system')}
            </Description>
            {children}
          </RefrigerationTabs>
        </Suspense>
      </section>
    </main>
  )
}

export default Layout
