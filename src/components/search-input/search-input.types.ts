import type { ComponentProps } from 'react'

import { VariantProps } from 'class-variance-authority'

import { inputVariants } from '../ui/input'

export type SearchInputProps = Omit<ComponentProps<'input'>, 'size'> & {
  size?: VariantProps<typeof inputVariants>['size']
}
