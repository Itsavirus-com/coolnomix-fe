import { qnaPath } from '@/config/paths'
import { reportListPath } from '@/config/paths/list-of-report-path'

import type { SidebarMenuItemType } from '../components/sidebar-menu-items/sidebar-menu-items.types'

export const clientGroupMenuItems = (t: any): SidebarMenuItemType[] => {
  return [
    {
      icon: 'icon-snow',
      title: t('energy_saving_audit'),
      url: reportListPath(),
      items: [
        {
          title: t('list_of_report'),
          url: reportListPath()
        },
        {
          title: t('qna'),
          url: qnaPath()
        }
      ]
    }
  ]
}
