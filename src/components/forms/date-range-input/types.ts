import type { HTMLAttributes } from 'react'

export type DateRangeInputProps = HTMLAttributes<'div'> & {
  name: string
  label?: string
  required?: boolean
}
