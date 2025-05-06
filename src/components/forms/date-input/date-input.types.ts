import type { ComponentProps } from 'react'

export type DateInputProps = ComponentProps<'div'> & {
  name: string
  label?: string
  inputLabel?: string
  required?: boolean
  disabled?: boolean
}
