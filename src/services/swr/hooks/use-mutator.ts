import { useSWRConfig } from 'swr'

export const useMutator = () => {
  const { mutate } = useSWRConfig()

  const mutateReportDetail = async (reportId: string) => {
    await mutate((key: any) => key?.path?.includes(`reports/${reportId}`))
  }

  return {
    mutateReportDetail
  }
}
