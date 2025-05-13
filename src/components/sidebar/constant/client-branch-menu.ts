import { dataLogMonitoringPath, qnaPath } from '@/config/paths'

import type { SidebarMenuItemType } from '../components/sidebar-menu-items/sidebar-menu-items.types'

export const clientBranchMenuItems = (t: any): SidebarMenuItemType[] => {
  return [
    {
      icon: '',
      title: t('dashboard'),
      url: '/'
    },
    {
      icon: '',
      title: t('energy_saving_audit'),
      url: qnaPath(),
      items: [
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
