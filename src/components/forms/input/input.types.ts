import type { ComponentProps } from 'react'

export type ControlledInputProps = ComponentProps<'input'> & {
  label: string
  labelClassname?: string
  testID?: string
  hint?: string
  index?: number
}
