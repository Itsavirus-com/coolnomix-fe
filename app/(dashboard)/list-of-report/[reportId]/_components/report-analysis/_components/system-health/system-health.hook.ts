import { useMemo } from 'react'

import { DUMMY_REPORT_DETAIL_ID } from '@/config/constant'
import { useReportDetail } from '@/services/swr/hooks/use-report-detail'

import { getScoreColorConfig } from './system-health.helpers'

export const useSystemHealth = () => {
  const { report } = useReportDetail(DUMMY_REPORT_DETAIL_ID)

  const score = report?.report_health?.health_score ?? 0

  const scoreColor = useMemo(() => getScoreColorConfig(score), [score])

  return {
    score,
    scoreColor
  }
}
