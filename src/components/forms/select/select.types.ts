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
  hasSearch?: boolean
}

export type UncontrolledSelectProps = ComponentProps<'select'> & {
  items: {
    label: string
    value: string
  }[]
  value: string
  onValueChange: (value: string) => void
  placeholder: string
}
