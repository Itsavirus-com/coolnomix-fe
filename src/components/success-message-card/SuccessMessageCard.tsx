'use client'

import Image from 'next/image'
import React, { FC } from 'react'

import { successAnimation } from '@/assets/images'
import { cn } from '@/libs/utils'

import { SuccessMessageCardProps } from './success-message-card.types'
import Button from '../button/Button'
import Text from '../text/Text'

const SuccessMessageCard: FC<SuccessMessageCardProps> = (props) => {
  const {
    title,
    description,
    buttonLabel,
    buttonLink,
    imageAlt,
    className,
    image = successAnimation,
    ...rest
  } = props

  return (
    <div
      className={cn(
        'flex min-h-[500px] w-full flex-col items-center justify-between sm:w-[440px]',
        className
      )}
      {...rest}
    >
      <div className='flex flex-col items-center py-4 text-center sm:py-0'>
        <Image src={image} alt={imageAlt} height={228} width={228} />
        <Text tag='h1' variant='subtitle1' weight='semibold'>
          {title}
        </Text>
        <Text tag='p' variant='body2' className='text-grey-darkest mt-2 mb-8'>
          {description}
        </Text>
        <Button label={buttonLabel} link={buttonLink} />
      </div>
    </div>
  )
}

export default SuccessMessageCard
