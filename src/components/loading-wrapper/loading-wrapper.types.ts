import { ReactNode } from 'react'

import { LoadingWithTextProps } from '../loading-with-text/loading-with-text.types'

export type LoadingWrapperProps = LoadingWithTextProps & {
  isLoading: boolean
  children: ReactNode
}
