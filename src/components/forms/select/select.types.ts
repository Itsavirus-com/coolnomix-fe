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

export type UncontrolledSelectProps = {
  items: {
    label: string
    value: string
  }[]
  placeholder?: string
  value?: string
  onValueChange?: (value: string) => void
  className?: string
  disabled?: boolean
}
