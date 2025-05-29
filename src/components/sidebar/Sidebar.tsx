'use client'

import type { FC } from 'react'

import dynamic from 'next/dynamic'
import { useTranslations } from 'next-intl'
import { useSnapshot } from 'valtio'

import { defaultImage } from '@/assets/images'
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarRail
} from '@/components/ui/sidebar'
import { authStore } from '@/stores/auth-store'

import SidebarMenuItems from './components/sidebar-menu-items/SidebarMenuItems'
import { getMenuItems } from './sidebar.helpers'

import type { SidebarProps } from './sidebar.types'

const SidebarProfile = dynamic(() => import('./components/sidebar-profile/SidebarProfile'), {
  ssr: false
})

const Sidebar: FC<SidebarProps> = (props) => {
  const { userType, ...rest } = props

  const { user } = useSnapshot(authStore).state

  const t = useTranslations('sidebar')

  return (
    <ShadcnSidebar collapsible='icon' {...rest}>
      <SidebarHeader className='bg-background h-16 border-b'>
        <SidebarProfile avatar={defaultImage.src} name={user.name} email={user.email} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className='font-semibold tracking-[2px] text-[#E7E7E9]'>
            {t('platform')}
          </SidebarGroupLabel>
          <SidebarMenuItems items={getMenuItems(t, userType)} />
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </ShadcnSidebar>
  )
}

export default Sidebar
