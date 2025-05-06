import { listOfBranchPath } from '@/config/paths/list-of-branch'
import { qnaPath } from '@/config/paths/qna-path'
import { getTranslate } from '@/locales/i18n'

import type { SidebarMenuItemType } from '../components/sidebar-menu-items/sidebar-menu-items.types'

const t = getTranslate('sidebar')

export const TECHNICIAN_MENU_ITEMS: SidebarMenuItemType[] = [
  {
    icon: '',
    title: t('dashboard'),
    url: '/'
  },
  {
    icon: '',
    title: t('energySavingAudit'),
    url: '#',
    items: [
      {
        title: t('list_of_branch'),
        url: listOfBranchPath()
      },
      {
        title: t('qa'),
        url: qnaPath()
      },
      {
        title: t('dataLogMonitoring'),
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
    title: t('monitoring'),
    url: '#'
  }
]
