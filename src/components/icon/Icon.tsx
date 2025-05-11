'use client'

import type { FC } from 'react'

import React, { memo } from 'react'

import { cn } from '@/libs/utils'

import type { IconProps } from './icon.types'

const Icon: FC<IconProps> = (props) => {
  const { icon, size = '24', className } = props

  return (
    <i
      className={cn('icon', icon, className)}
      style={size ? { fontSize: `${size}px`, width: `${size}px` } : {}}
    />
  )
}

export default memo(Icon)
