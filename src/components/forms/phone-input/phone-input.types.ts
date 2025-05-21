import type { ComponentProps } from 'react'

export type ControlledPhoneInputProps = ComponentProps<'input'> & {
  phoneNumberName?: string
  label: string
  labelClassname?: string
  testID?: string
  hint?: string
  index?: number
  defaultCountry?: string
  disabled?: boolean
}
