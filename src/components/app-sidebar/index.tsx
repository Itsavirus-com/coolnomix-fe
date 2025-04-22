import type { FC } from 'react'

import { useTranslation } from 'react-i18next'

import { defaultImage } from '@/assets/images'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarRail
} from '@/components/ui/sidebar'

import SidebarMenuItems from './components/sidebar-menu-items'
import SidebarProfile from './components/sidebar-profile'
import { getMenuItems } from './helpers/helpers'

import type { AppSidebarProps } from './types'

const AppSidebar: FC<AppSidebarProps> = (props) => {
  const { userType, ...rest } = props

  const { t } = useTranslation('sidebar')

  return (
    <Sidebar collapsible='icon' {...rest}>
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
          <SidebarMenuItems items={getMenuItems(userType)} />
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

export default AppSidebar
