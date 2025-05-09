import type { ComponentProps } from 'react'

export type DateRangeInputProps = ComponentProps<'div'> & {
  name: string
  label?: string
  required?: boolean
  size?: 'sm' | 'md'
}
