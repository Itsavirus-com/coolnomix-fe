'use client'

import type { FC } from 'react'

import { ProgressProvider } from '@bprogress/next/app'

import { TooltipProvider } from '../ui/tooltip'

import type { ProvidersProps } from './Providers.types'

import '../../locales/i18n'

const Providers: FC<ProvidersProps> = (props) => {
  const { children } = props

  return (
    <ProgressProvider
      height='3px'
      color='var(--color-brand-primary)'
      options={{ showSpinner: false }}
    >
      <TooltipProvider>{children}</TooltipProvider>
    </ProgressProvider>
  )
}

export default Providers
