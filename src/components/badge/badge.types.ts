import { VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'

import { badgeVariants } from '../ui/badge'

export type BadgeProps = ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean } & {
    icon?: string
    size?: 'sm' | 'md'
  }
