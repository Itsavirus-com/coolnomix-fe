import type { ComponentProps } from 'react'

import { VariantProps } from 'class-variance-authority'

import { inputVariants } from '@/components/ui/input'

export type SearchInputProps = Omit<ComponentProps<'input'>, 'size'> &
  VariantProps<typeof inputVariants>
