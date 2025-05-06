import { ComponentProps } from 'react'

export type SidebarItem = {
  label: string
  value: string
  icon?: string
  active?: boolean
}

export type FormSidebarTab = SidebarItem & {
  children?: SidebarItem[]
}

export type FormSidebarProps = ComponentProps<'div'> & {
  title: string
  description: string
  tabs: FormSidebarTab[]
  onChangeTab: (tab: string) => void
}
