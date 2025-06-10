'use client'

import { truncate } from 'lodash'
import { FC } from 'react'

import Icon from '@/components/icon/Icon'
import Image from '@/components/image/Image'
import Text from '@/components/text/Text'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from '@/components/ui/sidebar'

import { useSidebarProfile } from './sidebar-profile.hook'
import { SidebarProfileProps } from './sidebar-profile.types'

const SidebarProfile: FC<SidebarProfileProps> = (props) => {
  const { avatar, name, email } = props

  const { sidebarProfileMenu } = useSidebarProfile()

  const { isMobile } = useSidebar()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size='lg'
              className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground hover:!bg-sidebar-accent cursor-pointer'
            >
              <div className='relative h-8 w-8 overflow-hidden rounded-lg'>
                <Image src={avatar} alt={name || ''} fill />
              </div>
              <div className='flex flex-col pr-2'>
                <Text tag='span' weight='semibold' className='leading-[110%]'>
                  {name}
                </Text>
                <Text tag='span' variant='caption' className='text-grey-darkest leading-[130%]'>
                  {truncate(email, { length: 20 })}
                </Text>
              </div>
              <div className='flex flex-1 items-center justify-center'>
                <Icon icon='icon-setting' size={20} className='text-brand-muted' />
              </div>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className='w-[--radix-dropdown-menu-trigger-width] min-w-[205px] rounded-md'
            align='start'
            side={isMobile ? 'bottom' : 'right'}
            sideOffset={4}
          >
            <SidebarMenuButton size='lg' className='px-1 pt-2 pb-1'>
              <div className='flex flex-col'>
                <Text tag='span' weight='semibold' className='leading-[110%]'>
                  {name}
                </Text>
                <Text tag='span' variant='caption' className='text-grey-darkest leading-[130%]'>
                  {email}
                </Text>
              </div>
            </SidebarMenuButton>
            <DropdownMenuSeparator className='mx-1' />
            {sidebarProfileMenu.map(({ icon, label, onClick }) => (
              <DropdownMenuItem
                key={label}
                className='cursor-pointer gap-2 p-2'
                role='button'
                onClick={onClick}
              >
                <Icon icon={icon} size={14} className='text-red-darkest' />
                <Text tag='span' variant='body2' weight='semibold' className='text-red-darkest'>
                  {label}
                </Text>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

export default SidebarProfile
