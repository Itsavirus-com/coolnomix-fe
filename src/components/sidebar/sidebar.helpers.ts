import type { UserType } from '@/types/general'

import { ADMIN_MENU_ITEMS, SUPER_ADMIN_MENU_ITEMS } from './constant'
import { CLIENT_BRANCH_MENU_ITEMS } from './constant/client-branch-menu'
import { CLIENT_GROUP_MENU_ITEMS } from './constant/client-group-menu'
import { TECHNICIAN_MENU_ITEMS } from './constant/technician-menu'

const getMenuItems = (userType: UserType) => {
  // NOTE - You can fetch from server and return here as well

  switch (userType) {
    case 'super-admin':
      return SUPER_ADMIN_MENU_ITEMS
    case 'admin':
      return ADMIN_MENU_ITEMS
    case 'client-group':
      return CLIENT_GROUP_MENU_ITEMS
    case 'client-branch':
      return CLIENT_BRANCH_MENU_ITEMS
    case 'technician':
      return TECHNICIAN_MENU_ITEMS
    default:
      return ADMIN_MENU_ITEMS
  }
}

export { getMenuItems }
