import type { ComponentProps } from 'react'

type SidebarMenuItemsType = {
  title: string
  url: string
  isActive?: boolean
}

export type SidebarMenuItemType = {
  icon: string
  title: string
  url: string
  isActive?: boolean
  items?: SidebarMenuItemsType[]
}

export type SidebarMenuItemsProps = ComponentProps<'div'> & {
  items: SidebarMenuItemType[]
}
