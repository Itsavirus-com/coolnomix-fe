'use client'

import * as React from 'react'
import { FC } from 'react'

import Image from '@/components/image/Image'
import Text from '@/components/text'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from '@/components/ui/sidebar'

import { SidebarProfileProps } from './sidebar-profile.types'

const SidebarProfile: FC<SidebarProfileProps> = (props) => {
  const { avatar, name, email } = props

  const { isMobile } = useSidebar()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size='lg'
              className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground hover:!bg-sidebar-accent'
            >
              <div className='relative h-8 w-8 overflow-hidden rounded-lg'>
                <Image src={avatar} alt={name} fill />
              </div>
              <div className='flex flex-col'>
                <Text weight='semibold' className='leading-[110%]'>
                  {name}
                </Text>
                <Text variant='caption' className='text-grey-darkest leading-[130%]'>
                  {email}
                </Text>
              </div>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg'
            align='start'
            side={isMobile ? 'bottom' : 'right'}
            sideOffset={4}
          >
            <DropdownMenuLabel className='text-muted-foreground text-xs'>Teams</DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

export default SidebarProfile
