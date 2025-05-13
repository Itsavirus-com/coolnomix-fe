'use client'

import type { FC } from 'react'

import { useTranslations } from 'next-intl'

import { defaultImage } from '@/assets/images'
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarRail
} from '@/components/ui/sidebar'

import SidebarMenuItems from './components/sidebar-menu-items/SidebarMenuItems'
import SidebarProfile from './components/sidebar-profile/SidebarProfile'
import { getMenuItems } from './sidebar.helpers'

import type { SidebarProps } from './sidebar.types'

const Sidebar: FC<SidebarProps> = (props) => {
  const { userType, ...rest } = props

  const t = useTranslations('sidebar')

  return (
    <ShadcnSidebar collapsible='icon' {...rest}>
      <SidebarHeader className='bg-background h-16 border-b'>
        <SidebarProfile
          avatar={defaultImage.src}
          name={'Pepito Canggu Branch'}
          email={'canggu@pepitobranch.com'}
        />
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
