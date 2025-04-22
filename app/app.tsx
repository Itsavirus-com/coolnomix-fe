'use client'

import type { ReactNode } from 'react'

import Providers from '@/components/providers'

const App = (props: { children: ReactNode }) => {
  const { children } = props

  return (
    <Providers>
      <div className='px-8 py-4'>{children}</div>
    </Providers>
  )
}

export default App
