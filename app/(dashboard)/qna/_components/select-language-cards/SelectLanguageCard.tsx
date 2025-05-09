import { useTranslations } from 'next-intl'
import React, { FC, memo } from 'react'

import Image from '@/components/image/Image'
import Text from '@/components/text/Text'
import { cn } from '@/libs/utils'

import { SelectLanguageCardProps } from './select-language-cards.types'

const SelectLanguageCard: FC<SelectLanguageCardProps> = (props) => {
  const { value, image, title, description, selectedLanguage, onSelectLanguage } = props

  const t = useTranslations('common')

  return (
    <div
      className={cn(
        'border-color-50 flex flex-1/2 cursor-pointer flex-col items-center rounded-lg p-6',
        selectedLanguage === value && 'bg-grey-lightest'
      )}
      onClick={() => {
        onSelectLanguage(value)
      }}
    >
      <div className='relative h-8 w-8'>
        <Image src={image} alt={t('an_awesome_country_flag')} fill />
      </div>
      <Text weight='semibold' className='mt-3 mb-1 leading-[120%]'>
        {title}
      </Text>
      <Text className='text-grey-darkest leading-[120%]'>{description}</Text>
    </div>
  )
}

export default memo(SelectLanguageCard)
