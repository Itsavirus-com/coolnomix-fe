import React, { FC, memo } from 'react'

import ButtonGroup from '@/components/button-group/ButtonGroup'

import { useSelectAcRequest } from './select-ac-request-cards.hook'
import { SelectAcRequestCardsProps } from './select-ac-request-cards.types'
import SelectAcRequestCard from './SelectAcRequestCard'

const SelectAcRequestCards: FC<SelectAcRequestCardsProps> = (props) => {
  const { items } = props

  const { selectedAcRequest, handleSelectAcRequest, buttons } = useSelectAcRequest()

  return (
    <>
      <div className='flex w-full gap-3'>
        {items?.map((item) => (
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

export default memo(SelectAcRequestCards)
