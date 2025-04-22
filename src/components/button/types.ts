import type { ComponentProps, ReactNode } from 'react'

import type { buttonVariants } from '../ui/button'
import type { VariantProps } from 'class-variance-authority'
import type { SubmitHandler } from 'react-hook-form'

export type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    testID?: string
    label?: string | ReactNode
    isLoading?: boolean
    startContent?: ReactNode
    endContent?: ReactNode
  }

export type ButtonWithLinkProps = ButtonProps & {
  link?: string
}

export type ControlledButtonProps<TFormValues extends Record<string, any> = Record<string, any>> =
  ButtonWithLinkProps & {
    onSubmit?: SubmitHandler<TFormValues>
  }
