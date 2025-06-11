import { useSnapshot } from 'valtio'

import { authStore } from '@/stores/auth-store'

import { useCustomSWR } from '../helpers/custom-swr'
import { collectionAdaptor } from '../middleware/collection-adaptor'

import type { ReportCollection } from '../models/report.types'

export const useReports = () => {
  const { user } = useSnapshot(authStore).state

  const { isLoading, error, data } = useCustomSWR<ReportCollection>(
    { path: `reports?client-branch-email=${user?.email}` },
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateIfStale: false,
      use: [
        collectionAdaptor({
          collectionName: 'reports',
          keyMapping: { data: 'datas' }
        })
      ]
    }
  )

  return { reports: data?.reports, isLoading, isError: !!error }
}
