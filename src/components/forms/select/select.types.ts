import type { ComponentProps } from 'react'

export type SelectItem = {
  label: string
  value: string
}

export type SelectProps = ComponentProps<'select'> & {
  label: string
  items: SelectItem[]
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
