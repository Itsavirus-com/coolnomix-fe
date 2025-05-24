import { useCustomSWR } from '../helpers/custom-swr'
import { collectionAdaptor } from '../middleware/collection-adaptor'

import type { ReportCollection } from '../models/report.types'

export const useReports = () => {
  const { isLoading, error, data } = useCustomSWR<ReportCollection>(
    { path: 'reports' },
    {
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
