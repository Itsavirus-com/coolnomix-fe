'use client'

import React, { FC } from 'react'

import { TabsContent } from '@/components/ui/tabs'

import { useRefrigerationTabs } from './refrigeration-tabs.hook'
import { RefrigerationProps } from '../../refrigeration.types'
import WalkInChillerForm from '../walk-in-chiller-form/WalkInChillerForm'
import WalkInFreezerForm from '../walk-in-freezer-form/WalkInFreezerForm'

const RefrigerationTabs: FC<RefrigerationProps> = (props) => {
  const { inPreview } = props

  const { handleChangeTab, handleReview, handleSubmit } = useRefrigerationTabs()

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

export default RefrigerationTabs
