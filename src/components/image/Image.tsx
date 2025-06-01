'use client'

import type { FC } from 'react'

import NextImage from 'next/image'
import React, { memo, useState } from 'react'

import { defaultImage } from '@/assets/images'

import type { ImageProps } from 'next/image'

const Image: FC<ImageProps> = (props) => {
  const { alt, priority, src, fill, quality = 65, ...rest } = props

  const [isError, setIsError] = useState(false)

  return (
    <NextImage
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding='async'
      quality={quality}
      fill={fill}
      style={{ objectFit: 'cover' }}
      onError={() => setIsError(true)}
      src={isError ? defaultImage : src}
      {...rest}
    />
  )
}

export default memo(Image)
