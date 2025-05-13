import { TFunction } from 'next-intl'

import type { UserType } from '@/types/general'

import {
  adminMenuItems,
  clientBranchMenuItems,
  clientGroupMenuItems,
  superAdminMenuItems,
  technicianMenuItems
} from './constant'

const getMenuItems = (t: TFunction, userType: UserType) => {
  // NOTE - You can fetch from server and return here as well

  switch (userType) {
    case 'super-admin':
      return superAdminMenuItems(t)
    case 'admin':
      return adminMenuItems(t)
    case 'client-group':
      return clientGroupMenuItems(t)
    case 'client-branch':
      return clientBranchMenuItems(t)
    case 'technician':
      return technicianMenuItems(t)
    default:
      return adminMenuItems(t)
  }
}

export { getMenuItems }
