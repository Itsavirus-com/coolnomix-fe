import { useParams } from 'next/navigation'

import { useReportDetail } from '@/services/swr/hooks/use-report-detail'

export const useReportProfile = () => {
  const { reportId } = useParams()
  const { report } = useReportDetail(reportId as string)

  const reportProfile = {
    ...report?.client_branch?.user,
    name: report?.client_branch?.name
  }

  return {
    reportProfile
  }
}
