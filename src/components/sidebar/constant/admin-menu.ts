import { dataLogMonitoringPath } from '@/config/paths'

import type { SidebarMenuItemType } from '../components/sidebar-menu-items/sidebar-menu-items.types'

export const adminMenuItems = (t: any): SidebarMenuItemType[] => {
  return [
    {
      icon: '',
      title: t('dashboard'),
      url: '/'
    },
    {
      icon: '',
      title: t('energy_saving_audit'),
      url: '#',
      items: [
        {
          title: t('qna_management'),
          url: '#'
        },
        {
          title: t('data_log_monitoring'),
          url: dataLogMonitoringPath()
        },
        {
          title: t('analysis'),
          url: '#'
        },
        {
          title: t('report'),
          url: '#'
        }
      ]
    },
    {
      icon: '',
      title: t('update_status_won_lost'),
      url: '#'
    }
  ]
}
