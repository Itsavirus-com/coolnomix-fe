import { DUMMY_REPORT_DETAIL_ID } from '@/config/constant'
import { useReportDetail } from '@/services/swr/hooks/use-report-detail'

export const useReportProfile = () => {
  const { report } = useReportDetail(DUMMY_REPORT_DETAIL_ID)

  const reportProfile = {
    ...report?.client_branch?.user,
    name: report?.client_branch?.name
  }

  return {
    reportProfile
  }
}
