import type { ComponentProps } from 'react'

import type { ControlledButtonProps } from '../button/types'

export type ButtonGroupProps = ComponentProps<'div'> & {
  buttons: [ControlledButtonProps, ControlledButtonProps]
}
