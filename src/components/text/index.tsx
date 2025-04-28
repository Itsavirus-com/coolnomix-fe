import clsx from 'clsx'
import { createElement } from 'react'

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
        className: clsx(createVariantClass(variant, weight), 'block', className)
      },
      children
    )}
  </>
)

export default Text
