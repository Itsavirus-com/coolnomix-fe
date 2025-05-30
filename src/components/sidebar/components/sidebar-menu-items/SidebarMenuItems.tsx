import type { FC } from 'react'

import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { memo } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Icon from '@/components/icon/Icon'
import Text from '@/components/text/Text'
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
import { cn } from '@/libs/utils'

import type { SidebarMenuItemsProps } from './sidebar-menu-items.types'

const SidebarMenuItems: FC<SidebarMenuItemsProps> = (props) => {
  const { items } = props

  const pathname = usePathname()

  return (
    <SidebarMenu>
      {items?.map(({ icon, title, isActive, items: subItems, url }) => {
        const isChildActive = subItems?.some((item) => pathname.includes(item.url))
        const isCurrent = isActive || isChildActive || pathname === url

        return (
          <Collapsible key={uuidv4()} asChild defaultOpen={isCurrent} className='group/collapsible'>
            <SidebarMenuItem className='group/item'>
              <SidebarMenuButton
                asChild
                tooltip={title}
                className={cn('hover:!bg-sidebar-accent', isCurrent && '!bg-sidebar-accent')}
              >
                <Link href={url}>
                  <Icon icon={icon} size={16} className={isCurrent && 'text-black'} />
                  <Text
                    tag='span'
                    variant='body2'
                    className={cn(
                      'transition-all group-hover/item:font-semibold',
                      isCurrent && 'font-semibold text-black'
                    )}
                  >
                    {title}
                  </Text>
                </Link>
              </SidebarMenuButton>
              {subItems?.length ? (
                <>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuAction className='cursor-pointer data-[state=open]:rotate-180'>
                      <ChevronDown />
                      <span className='sr-only'>Toggle</span>
                    </SidebarMenuAction>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {subItems.map(({ title, url }) => (
                        <SidebarMenuSubItem key={uuidv4()}>
                          <SidebarMenuSubButton asChild>
                            <Link
                              href={url}
                              className={cn(
                                '!text-brand-muted transition-all hover:font-semibold hover:!text-black',
                                pathname.includes(url) && 'font-semibold !text-black'
                              )}
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
        )
      })}
    </SidebarMenu>
  )
}

export default memo(SidebarMenuItems)
