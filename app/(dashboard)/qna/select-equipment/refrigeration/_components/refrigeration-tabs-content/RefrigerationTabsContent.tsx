'use client'

import React, { FC } from 'react'

import { TabsContent } from '@/components/ui/tabs'

import { useRefrigerationTabsContent } from './refrigeration-tabs-content.hook'
import { RefrigerationProps } from '../../refrigeration.types'
import { useRefrigerationTabs } from '../refrigeration-tabs/refrigeration-tabs.hook'
import WalkInChillerForm from '../walk-in-chiller-form/WalkInChillerForm'
import WalkInFreezerForm from '../walk-in-freezer-form/WalkInFreezerForm'

const RefrigerationTabsContent: FC<RefrigerationProps> = (props) => {
  const { inPreview } = props

  const { handleChangeTab } = useRefrigerationTabs()
  const { handleReview, handleSubmit } = useRefrigerationTabsContent()

  return (
    <>
      <TabsContent value='walk-in-chiller'>
        <WalkInChillerForm
          inPreview={inPreview}
          handleContinue={() => handleChangeTab('walk-in-freezer')}
        />
      </TabsContent>
      <TabsContent value='walk-in-freezer'>
        <WalkInFreezerForm
          inPreview={inPreview}
          handleContinue={handleReview}
          handleSubmit={handleSubmit}
        />
      </TabsContent>
    </>
  )
}

export default RefrigerationTabsContent
