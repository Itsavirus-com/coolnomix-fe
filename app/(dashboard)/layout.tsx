import type { ReactNode } from 'react'

import Header from '@/components/header/Header'
import Sidebar from '@/components/sidebar/Sidebar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

const Layout = (props: { children: ReactNode }) => {
  const { children } = props

  return (
    <SidebarProvider>
      <Sidebar userType='client-group' />
      <SidebarInset>
        <Header />
        <div className='px-8 py-4'>{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default Layout
