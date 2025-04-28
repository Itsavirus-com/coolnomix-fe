import { translate } from '@/locales/i18n'

import type { SidebarMenuItemType } from '../components/sidebar-menu-items/types'

const t = (key: string, options?: Record<string, string | number>): string =>
  translate(key, { ns: 'sidebar', ...options })

export const ADMIN_MENU_ITEMS: SidebarMenuItemType[] = [
  {
    icon: '',
    title: t('dashboard'),
    url: '#'
  },
  {
    icon: '',
    title: t('energySavingAudit'),
    url: '#',
    items: [
      {
        title: t('qa'),
        url: '#'
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
