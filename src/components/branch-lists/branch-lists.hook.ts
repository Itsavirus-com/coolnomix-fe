import { defaultImage } from '@/assets/images'

import { BranchListType } from './branch-lists.types'

// Should be fetched from API
const branchLists: BranchListType[] = [
  {
    id: '1',
    name: 'Pepito Canggu Branch',
    email: 'canggu@pepitobranch.com',
    date: '7:18 AM, February 3, 2025',
    avatar: defaultImage.src,
    approvedCount: 2,
    pendingCount: 2
  },
  {
    id: '2',
    name: 'Pepito Canggu Branch',
    email: 'canggu@pepitobranch.com',
    date: '7:18 AM, February 3, 2025',
    avatar: defaultImage.src,
    approvedCount: 2,
    pendingCount: 2
  }
]

export const useBranchLists = () => {
  return { branchLists }
}
