import React, { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import Image from '@/components/image/Image'
import Text from '@/components/text/Text'
import { cn } from '@/libs/utils'

import { SelectAcRequestCardProps } from './select-ac-request-cards.types'

const SelectAcRequestCard: FC<SelectAcRequestCardProps> = (props) => {
  const { type, image, title, description, selectedAcRequest, onSelectAcRequest } = props

  const { t } = useTranslation('common')

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
      <div className='relative h-[42px] w-[42px]'>
        <Image src={image} alt={t('an_awesome_country_flag')} fill />
      </div>
      <Text weight='semibold' className='mt-5 mb-1.5'>
        {title}
      </Text>
      <Text className='text-grey-darkest'>{description}</Text>
    </div>
  )
}

export default memo(SelectAcRequestCard)
