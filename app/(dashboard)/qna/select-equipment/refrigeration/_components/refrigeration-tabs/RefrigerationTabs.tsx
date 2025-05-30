'use client'

import { useTranslations } from 'next-intl'
import React, { FC } from 'react'

import FormSidebar from '@/components/form-sidebar/FormSidebar'
import { Tabs } from '@/components/ui/tabs'

import { useRefrigerationTabs } from './refrigeration-tabs.hook'
import { RefrigerationTabsProps } from './refrigeration-tabs.types'

const RefrigerationTabs: FC<RefrigerationTabsProps> = (props) => {
  const { children } = props

  const t = useTranslations('qna')

  const { tabs, currentTab, handleChangeTab } = useRefrigerationTabs()

  return (
    <Tabs value={currentTab} defaultValue='walk-in-chiller'>
      <div className='flex gap-16'>
        <FormSidebar
          title={t('kitchen_set')}
          description={t('manage_refrigeration_units_for_each_kitchen_set')}
          tabs={tabs}
          onChangeTab={handleChangeTab}
        />
        <div className='w-[578px]'>{children}</div>
      </div>
    </Tabs>
  )
}

export default RefrigerationTabs
