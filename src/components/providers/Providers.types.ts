import type { ComponentProps, ReactNode } from 'react'

export type ProvidersProps = ComponentProps<'div'> & {
  children: ReactNode
}
