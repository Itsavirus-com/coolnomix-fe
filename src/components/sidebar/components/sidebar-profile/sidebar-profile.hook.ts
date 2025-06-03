import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'

import { registerPath } from '@/config/paths/auth-path'
import { resetAuthState } from '@/stores/auth-store.actions'
import { clear } from '@/utils/storage'

export const useSidebarProfile = () => {
  const t = useTranslations('sidebar')

  const router = useRouter()

  const handleLogout = () => {
    clear()
    resetAuthState()
    router.push(registerPath())
  }

  const sidebarProfileMenu = [
    {
      label: t('logout'),
      icon: 'icon-logout',
      onClick: handleLogout
    }
  ]

  return {
    sidebarProfileMenu,
    handleLogout
  }
}
