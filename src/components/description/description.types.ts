import type { ComponentProps } from 'react'

import { TagType } from '../text/types'

export type DescriptionProps = ComponentProps<'div'> & {
  label: string
  titleTag?: TagType
}
