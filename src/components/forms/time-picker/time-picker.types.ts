import { ComponentProps } from 'react'

export type TimePickerProps = ComponentProps<'div'> & {
  name?: string
  label?: string
  inputLabel?: string
  disabled?: boolean
  minuteStep?: 1 | 5 | 10 | 15
  required?: boolean
}
