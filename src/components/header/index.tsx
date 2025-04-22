import React from 'react'

import { appStateStore } from '@/stores/app-state-store'

import Icon from '../icon'
import Text from '../text'

const Header = () => {
  const { title, icon } = appStateStore.state.pageHeader

  return (
    <header className='bg-background sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 border-b px-4'>
      <div className='flex items-center gap-1.5'>
        <Icon icon={icon} size={20} />
        <Text weight='semibold'>{title}</Text>
      </div>
      <div className='flex items-center gap-[18px]'>
        <Icon icon='icon-bell-dot' size={20} />
        <Icon icon='icon-circle-help' size={20} />
      </div>
    </header>
  )
}

export default Header
