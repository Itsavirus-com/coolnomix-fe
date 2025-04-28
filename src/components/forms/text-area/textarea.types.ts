import type { ComponentProps } from 'react'

export type ControlledTextAreaProps = ComponentProps<'textarea'> & {
  label: string
  labelClassname?: string
  className?: string
  testID?: string
}
