'use client'

import React from 'react'

import ButtonGroup from '@/components/button-group/ButtonGroup'

import { useSelectAcRequest } from './select-ac-request-cards.hook'
import SelectAcRequestCard from './SelectAcRequestCard'

const SelectAcRequestCards = () => {
  const { requestTypes, buttons, selectedAcRequest, handleSelectAcRequest } = useSelectAcRequest()

  return (
    <>
      <div className='flex w-full gap-3'>
        {requestTypes.map((item) => (
          <SelectAcRequestCard
            key={item.type}
            {...item}
            selectedAcRequest={selectedAcRequest}
            onSelectAcRequest={handleSelectAcRequest}
          />
        ))}
      </div>
      <ButtonGroup className='mt-14 justify-end' buttons={buttons} />
    </>
  )
}

export default SelectAcRequestCards
