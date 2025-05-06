'use client'

import React from 'react'

import { TabsContent } from '@/components/ui/tabs'

import WalkInChillerForm from './_components/walk-in-chiller-form/WalkInChillerForm'
import WalkInFreezerForm from './_components/walk-in-freezer-form/WalkInFreezerForm'
import { useRefrigerationForm } from './refrigeration.hook'

const Page = () => {
  const { handleChangeTab, handleReview } = useRefrigerationForm()

  return (
    <>
      <TabsContent value='walk-in-chiller'>
        <WalkInChillerForm handleContinue={() => handleChangeTab('walk-in-freezer')} />
      </TabsContent>
      <TabsContent value='walk-in-freezer'>
        <WalkInFreezerForm handleContinue={handleReview} />
      </TabsContent>
    </>
  )
}

export default Page
