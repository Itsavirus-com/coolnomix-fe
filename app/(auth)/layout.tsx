import React from 'react'

import AuthLayoutProvider from './_components/auth-layout-provider/AuthLayoutProvider'

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex h-dvh'>
      <AuthLayoutProvider>{children}</AuthLayoutProvider>
    </div>
  )
}

export default Layout
