import type { UserType } from '@/types/general'

import { ADMIN_MENU_ITEMS, SUPER_ADMIN_MENU_ITEMS } from '../constant'

const getMenuItems = (userType: UserType) => {
  // NOTE - You can fetch from server and return here as well

  switch (userType) {
    case 'super-admin':
      return SUPER_ADMIN_MENU_ITEMS
    case 'admin':
      return ADMIN_MENU_ITEMS
    default:
      return ADMIN_MENU_ITEMS
  }
}

export { getMenuItems }
