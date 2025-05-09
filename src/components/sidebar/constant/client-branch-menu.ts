import { dataLogMonitoringPath, qnaPath } from '@/config/paths'

import type { SidebarMenuItemType } from '../components/sidebar-menu-items/sidebar-menu-items.types'

export const CLIENT_BRANCH_MENU_ITEMS: SidebarMenuItemType[] = [
  {
    icon: '',
    title: 'Dashboard',
    url: '/'
  },
  {
    icon: '',
    title: 'Energy Saving Audit',
    url: qnaPath(),
    items: [
      {
        title: 'Q&A',
        url: qnaPath()
      },
      {
        title: 'Data Log Monitoring',
        url: dataLogMonitoringPath()
      },
      {
        title: 'Report',
        url: '#'
      }
    ]
  },
  {
    icon: '',
    title: 'Monitoring',
    url: '#'
  }
]
