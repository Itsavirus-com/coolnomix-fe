import type { ComponentProps } from 'react'

export type SelectProps = ComponentProps<'select'> & {
  label: string
  items: {
    label: string
    value: string
  }[]
  placeholder: string
  width?: string
  className?: string
  index?: number
}
