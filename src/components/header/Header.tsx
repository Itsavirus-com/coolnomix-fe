'use client'

import dynamic from 'next/dynamic'
import React from 'react'
import { useSnapshot } from 'valtio'

import { appStateStore } from '@/stores/app-state-store'

import Button from '../button/Button'

const Icon = dynamic(() => import('../icon/Icon'), { ssr: false })
const Text = dynamic(() => import('../text/Text'), { ssr: false })

const Header = () => {
  const { icon, title } = useSnapshot(appStateStore).state.pageHeader

  return (
    <header className='bg-background sticky top-0 z-10 flex h-16 shrink-0 items-center justify-between gap-2 border-b px-8'>
      <div className='flex items-center gap-1.5'>
        <Icon icon={icon} size={18} />
        <Text weight='semibold' tag='span'>
          {title}
        </Text>
      </div>
      <div className='flex items-center gap-1'>
        <Button
          variant='ghost'
          size='icon'
          label={<Icon icon='icon-bell-dot' className='text-black' size={20} />}
        />
        <Button
          variant='ghost'
          size='icon'
          label={<Icon icon='icon-circle-help' className='text-black' size={20} />}
        />
      </div>
    </header>
  )
}

export default Header
