import React, { FC, memo } from 'react'

import Icon from '@/components/icon/Icon'
import Text from '@/components/text/Text'
import { cn } from '@/libs/utils'

import { SelectAcRequestCardProps } from './select-ac-request-cards.types'

const SelectAcRequestCard: FC<SelectAcRequestCardProps> = (props) => {
  const {
    type,
    icon,
    bgColor,
    borderColor,
    title,
    description,
    selectedAcRequest,
    onSelectAcRequest
  } = props

  return (
    <div
      className={cn(
        'border-color-50 flex flex-1/3 cursor-pointer flex-col rounded-lg p-4',
        selectedAcRequest === type && 'bg-grey-lightest'
      )}
      onClick={() => {
        onSelectAcRequest(type)
      }}
    >
      <div
        className={cn(
          'flex h-[42px] w-[42px] items-center justify-center rounded-md',
          bgColor,
          borderColor
        )}
      >
        <Icon icon={icon} size={16} />
      </div>
      <Text weight='semibold' className='mt-5 mb-1.5'>
        {title}
      </Text>
      <Text className='text-grey-darkest'>{description}</Text>
    </div>
  )
}

export default memo(SelectAcRequestCard)
