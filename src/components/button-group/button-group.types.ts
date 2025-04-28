import type { ComponentProps } from 'react'

import type { ControlledButtonProps } from '../button/button.types'

export type ButtonGroupProps = ComponentProps<'div'> & {
  buttons: [ControlledButtonProps, ControlledButtonProps]
}
