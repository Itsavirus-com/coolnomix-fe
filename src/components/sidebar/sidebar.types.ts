import type { ComponentProps } from 'react'

import type { UserType } from '@/types/general'

import type { Sidebar } from '../ui/sidebar'

export type SidebarProps = ComponentProps<typeof Sidebar> & {
  userType: UserType
}
