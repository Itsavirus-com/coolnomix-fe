import { useParams } from 'next/navigation'
import { useMemo } from 'react'

import { useReportDetail } from '@/services/swr/hooks/use-report-detail'

import { getScoreColorConfig } from './system-health.helpers'

export const useSystemHealth = () => {
  const { reportId } = useParams()
  const { report } = useReportDetail(reportId as string)

  const score = report?.report_health?.health_score ?? 0

  const scoreColor = useMemo(() => getScoreColorConfig(score), [score])

  return {
    score,
    scoreColor
  }
}
