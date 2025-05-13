'use client'

import { useTranslations } from 'next-intl'
import React, { ReactNode } from 'react'

import Description from '@/components/description/Description'
import { Tabs } from '@/components/ui/tabs'

import { useRefrigerationTabs } from './_components/refrigeration-tabs/refrigeration-tabs.hook'
import FormSidebar from '../../_components/form-sidebar/FormSidebar'

const Layout = ({ children }: { children: ReactNode }) => {
  const t = useTranslations('qna')

  const { currentTab, tabs, handleChangeTab } = useRefrigerationTabs()

  return (
    <main>
      <section className='content-placement-center content-placement-center--start'>
        <Tabs value={currentTab} defaultValue='walk-in-chiller'>
          <div className='flex gap-16'>
            <FormSidebar
              title={t('kitchen_set')}
              description={t('manage_refrigeration_units_for_each_kitchen_set')}
              tabs={tabs}
              onChangeTab={handleChangeTab}
            />
            <div className='w-[578px]'>
              <Description label={t('refrigeration_details')} className='mb-8' titleTag='h1'>
                {t('fill_in_the_necessary_details_about_your_refrigeration_system')}
              </Description>
              {children}
            </div>
          </div>
        </Tabs>
      </section>
    </main>
  )
}

export default Layout
