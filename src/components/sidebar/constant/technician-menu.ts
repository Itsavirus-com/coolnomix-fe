import { dataLogMonitoringPath, qnaPath } from '@/config/paths'
import { listOfBranchPath } from '@/config/paths/list-of-branch-path'

import type { SidebarMenuItemType } from '../components/sidebar-menu-items/sidebar-menu-items.types'

const technicianMenuItems = (t: any): SidebarMenuItemType[] => {
  return [
    {
      icon: '',
      title: t('dashboard'),
      url: '/'
    },
    {
      icon: '',
      title: t('energy_saving_audit'),
      url: listOfBranchPath(),
      items: [
        {
          title: t('list_of_branch'),
          url: listOfBranchPath()
        },
        {
          title: t('qna'),
          url: qnaPath()
        },
        {
          title: t('data_log_monitoring'),
          url: dataLogMonitoringPath()
        },
        {
          title: t('report'),
          url: '#'
        }
      ]
    },
    {
      icon: '',
      title: t('monitoring'),
      url: '#'
    }
  ]
}

export { technicianMenuItems }
