import type { FC } from 'react'

import clsx from 'clsx'
import { ChevronDown, SquareTerminal } from 'lucide-react'
import Link from 'next/link'
import React, { memo } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Text from '@/components/text'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import {
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem
} from '@/components/ui/sidebar'

import type { SidebarMenuItemsProps } from './types'

const SidebarMenuItems: FC<SidebarMenuItemsProps> = (props) => {
  const { items } = props

  return (
    <SidebarMenu>
      {items?.map(({ title, isActive, items, url }) => (
        <Collapsible key={uuidv4()} asChild defaultOpen={isActive} className='group/collapsible'>
          <SidebarMenuItem className='group/item'>
            <SidebarMenuButton asChild tooltip={title} className='hover:!bg-sidebar-accent'>
              <Link href={url}>
                {/* <Icon icon={icon} className='size-4' /> */}
                <SquareTerminal />
                <Text
                  tag='span'
                  variant='body2'
                  className={clsx(
                    'transition-all group-hover/item:font-semibold',
                    isActive && 'font-semibold text-black'
                  )}
                >
                  {title}
                </Text>
              </Link>
            </SidebarMenuButton>
            {items?.length ? (
              <>
                <CollapsibleTrigger asChild>
                  <SidebarMenuAction className='cursor-pointer data-[state=open]:rotate-180'>
                    <ChevronDown />
                    <span className='sr-only'>Toggle</span>
                  </SidebarMenuAction>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {items?.map(({ title, url }) => (
                      <SidebarMenuSubItem key={uuidv4()}>
                        <SidebarMenuSubButton asChild>
                          <Link
                            href={url}
                            className='!text-[#607A9B] transition-all hover:font-semibold hover:!text-black'
                          >
                            {title}
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </>
            ) : null}
          </SidebarMenuItem>
        </Collapsible>
      ))}
    </SidebarMenu>
  )
}

export default memo(SidebarMenuItems)
