import type { FC } from 'react'

import React from 'react'

import { cn } from '@/libs/utils'

import Icon from '../icon/Icon'
import Text from '../text/Text'

import type { DescriptionProps } from './description.types'

const Description: FC<DescriptionProps> = (props) => {
  const { label, children, titleTag = 'p', icon, className, ...rest } = props

  return (
    <div className={cn('flex justify-between', className)} {...rest}>
      <div>
        <Text tag={titleTag} variant='title3' weight='bold'>
          {label}
        </Text>
        <Text className='text-grey-darkest mt-2'>{children}</Text>
      </div>
      {icon && (
        <div className='bg-grey-lightest border-color-20 flex h-7 w-7 items-center justify-center rounded-md border'>
          <Icon icon={icon} size={16} className='text-brand-dark' />
        </div>
      )}
    </div>
  )
}

export default Description
