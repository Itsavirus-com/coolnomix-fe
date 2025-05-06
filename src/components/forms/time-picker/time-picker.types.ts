import { ComponentProps } from 'react'

export type TimePickerProps = ComponentProps<'div'> & {
  name?: string
  label?: string
  inputLabel?: string
  minuteStep?: 1 | 5 | 10 | 15
  required?: boolean
  disabled?: boolean
  index?: number
}
