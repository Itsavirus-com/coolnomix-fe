import React, { FC } from 'react'

import Icon from '@/components/icon/Icon'
import { Badge as HBadge } from '@/components/ui/badge'
import { cn } from '@/libs/utils'

import { BadgeProps } from './badge.types'

const Badge: FC<BadgeProps> = (props) => {
  const { icon, size = 'sm', children, className, ...rest } = props

  return (
    <HBadge
      variant='outline'
      className={cn(
        'border-color-50 !text-grey-darkest text-xsAlt hover:bg-grey-mid flex h-7 items-center gap-1 rounded-sm transition-colors',
        size === 'sm' ? 'px-1.5' : 'px-2.5 font-medium',
        className
      )}
      {...rest}
    >
      {icon && <Icon icon={icon} size={16} />}
      {children}
    </HBadge>
  )
}

export default Badge
