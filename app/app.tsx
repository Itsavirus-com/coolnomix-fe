'use client'

import type { ReactNode } from 'react'

import dynamic from 'next/dynamic'

import Providers from '@/components/providers/Providers'
import Sidebar from '@/components/sidebar/Sidebar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

const Header = dynamic(() => import('@/components/header/Header'), {
  ssr: false,
  loading: () => (
    <div className='bg-grey-lightest sticky top-0 z-10 h-16 animate-pulse border-b px-4 opacity-100' />
  )
})

const App = (props: { children: ReactNode }) => {
  const { children } = props

  return (
    <SidebarProvider>
      <Sidebar userType='admin' />
      <SidebarInset>
        <Providers>
          <Header />
          <div className='px-8 py-4'>{children}</div>
        </Providers>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default App
