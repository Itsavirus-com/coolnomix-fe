import type { FC } from 'react'

import { ProgressProvider } from '@bprogress/next/app'
import { SWRConfig } from 'swr'

import { fetcher } from '@/services/swr/fetcher'

import type { ProvidersProps } from './Providers.types'

const Providers: FC<ProvidersProps> = (props) => {
  const { children } = props

  return (
    <SWRConfig value={{ fetcher }}>
      <ProgressProvider
        height='3px'
        color='var(--color-brand-primary)'
        options={{ showSpinner: false }}
      >
        {children}
      </ProgressProvider>
    </SWRConfig>
  )
}

export default Providers
