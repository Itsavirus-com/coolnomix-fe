import { ComponentProps } from 'react'

export type ProgressProps = ComponentProps<'div'> & {
  currentStepName: string
  steps: string[]
}
