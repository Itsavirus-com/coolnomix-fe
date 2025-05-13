import type { SidebarMenuItemType } from '../components/sidebar-menu-items/sidebar-menu-items.types'
import type { TFunction } from 'next-intl'

const superAdminMenuItems = (t: TFunction): SidebarMenuItemType[] => {
  return [
    {
      icon: '',
      title: t('dashboard'),
      url: '/'
    }
  ]
}

export { superAdminMenuItems }
