'use client'

import type { ReactNode } from 'react'

import Header from '@/components/header/Header'
import Providers from '@/components/providers/Providers'
import Sidebar from '@/components/sidebar/Sidebar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import ModalHandler from '@/handlers/modal-handler/ModalHandler'
import ToastHandler from '@/handlers/toast-handler/ToastHandler'

const App = (props: { children: ReactNode }) => {
  const { children } = props

  return (
    <Providers>
      <SidebarProvider>
        <Sidebar userType='client-group' />
        <SidebarInset>
          <Header />
          <div className='px-8 py-4'>{children}</div>
          <ModalHandler />
          <ToastHandler />
        </SidebarInset>
      </SidebarProvider>
    </Providers>
  )
}

export default App
