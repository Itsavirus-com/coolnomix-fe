import { useCustomSWR } from '../helpers/custom-swr'

import type { ReportDetailModel } from '../models/report.types'

export const useReportDetail = (id: string) => {
  const { isLoading, error, data, mutate } = useCustomSWR<ReportDetailModel>(
    { path: `reports/${id}` },
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true
    }
  )

  return {
    report: data?.data,
    isLoading,
    isError: !!error,
    mutate
  }
}
