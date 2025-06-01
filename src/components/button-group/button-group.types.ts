import type { ComponentProps } from 'react'

import { ButtonGroupType } from '@/types/general'

export type ButtonGroupProps = ComponentProps<'div'> & {
  buttons: ButtonGroupType
}
