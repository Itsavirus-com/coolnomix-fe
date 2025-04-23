import type { ComponentProps } from 'react'

export type IconProps = ComponentProps<'div'> & {
  icon: string
  size?: number
}
