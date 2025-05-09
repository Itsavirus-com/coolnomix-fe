import { dataLogMonitoringPath, qnaPath } from '@/config/paths'
import { listOfBranchPath } from '@/config/paths/list-of-branch-path'

import type { SidebarMenuItemType } from '../components/sidebar-menu-items/sidebar-menu-items.types'

export const TECHNICIAN_MENU_ITEMS: SidebarMenuItemType[] = [
  {
    icon: '',
    title: 'Dashboard',
    url: '/'
  },
  {
    icon: '',
    title: 'Energy Saving Audit',
    url: listOfBranchPath(),
    items: [
      {
        title: 'List of Branch',
        url: listOfBranchPath()
      },
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
