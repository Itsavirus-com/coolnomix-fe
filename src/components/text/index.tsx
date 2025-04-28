import { createElement } from 'react'

import { cn } from '@/libs/utils'

import { createVariantClass } from './helpers'

import type { TextProps } from './types'

const Text = ({
  tag = 'p',
  variant = 'body2',
  weight = 'normal',
  children,
  className,
  ...props
}: TextProps) => (
  <>
    {createElement(
      tag,
      {
        ...props,
        className: cn(createVariantClass(variant, weight), 'block', className)
      },
      children
    )}
  </>
)

export default Text
