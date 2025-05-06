'use client'

import Image from 'next/image'
import React, { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { successAnimation } from '@/assets/images'
import { cn } from '@/libs/utils'

import { SuccessMessageCardProps } from './types'
import Button from '../button/Button'
import Text from '../text/Text'

const SuccessMessageCard: FC<SuccessMessageCardProps> = (props) => {
  const {
    title,
    description,
    buttonLabel,
    buttonLink,
    className,
    image = successAnimation,
    ...rest
  } = props

  const { t } = useTranslation('common')

  return (
    <div
      className={cn(
        'flex min-h-[500px] w-full flex-col items-center justify-between sm:w-[440px]',
        className
      )}
      {...rest}
    >
      <div className='flex flex-col items-center py-4 text-center sm:py-0'>
        <Image
          src={image}
          alt={t('an_awesome_success_result_animation')}
          height={228}
          width={228}
        />
        <Text tag='h1' variant='subtitle1' weight='semibold'>
          {t(title)}
        </Text>
        <Text tag='p' variant='body2' className='text-grey-darkest mt-2 mb-8'>
          {t(description)}
        </Text>
        <Button label={t(buttonLabel)} link={buttonLink} />
      </div>
    </div>
  )
}

export default memo(SuccessMessageCard)
