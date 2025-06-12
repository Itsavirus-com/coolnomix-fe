import { useMemo } from 'react'

import { SelectItem } from '@/components/forms/select/select.types'

export const useClientBranchRoleForm = () => {
  const branchOptions = useMemo((): SelectItem[] => {
    return [
      {
        label: 'Branch 1',
        value: 'branch-1'
      },
      {
        label: 'Branch 2',
        value: 'branch-2'
      }
    ]
  }, [])

  return {
    branchOptions
  }
}
