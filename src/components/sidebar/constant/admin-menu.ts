import { dataLogMonitoringPath } from '@/config/paths'

import type { SidebarMenuItemType } from '../components/sidebar-menu-items/sidebar-menu-items.types'

export const ADMIN_MENU_ITEMS: SidebarMenuItemType[] = [
  {
    icon: '',
    title: 'Dashboard',
    url: '/'
  },
  {
    icon: '',
    title: 'Energy Saving Audit',
    url: '#',
    items: [
      {
        title: 'Q&A Management',
        url: '#'
      },
      {
        title: 'Data Log Monitoring',
        url: dataLogMonitoringPath()
      },
      {
        title: 'Analysis',
        url: '#'
      },
      {
        title: 'Report',
        url: '#'
      }
    ]
  },
  {
    icon: '',
    title: 'Update Status Won Lost',
    url: '#'
  }
]
