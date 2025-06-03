import React, { FC } from 'react'

import { cn } from '@/libs/utils'

import { LoadingWrapperProps } from './loading-wrapper.types'
import LoadingWithText from '../loading-with-text/LoadingWithText'

const LoadingWrapper: FC<LoadingWrapperProps> = (props) => {
  const { isLoading, children, className, text, ...rest } = props

  if (isLoading) {
    return <LoadingWithText className={cn('mt-[25%]', className)} text={text} {...rest} />
  }

  return <>{children}</>
}

export default LoadingWrapper
