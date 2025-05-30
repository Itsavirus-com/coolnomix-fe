'use client'

import dynamic from 'next/dynamic'
import React from 'react'

const Toaster = dynamic(() => import('sonner').then((mod) => mod.Toaster), {
  ssr: false
})

const ToastHandler = () => {
  return <Toaster richColors position='top-right' />
}

export default ToastHandler
