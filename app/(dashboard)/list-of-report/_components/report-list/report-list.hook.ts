import { startCase } from 'lodash'
import { useTranslations } from 'next-intl'
import { v4 as uuidv4 } from 'uuid'

import type { WorkflowListType } from '@/components/workflow-list/workflow-list.types'
import { useReports } from '@/services/swr/hooks/use-reports'
import { AcEquipmentType } from '@/types/general'
import { getDateTime } from '@/utils/date'

export const useReportList = () => {
  const t = useTranslations('report')

  const { reports, isLoading } = useReports()

  const reportList: WorkflowListType[] = [
    {
      id: uuidv4(),
      name: t('previous_report'),
      status: 'done',
      lists: reports?.map((report) => ({
        id: report.id,
        branchName: report.client_branch.name,
        name: startCase(report.type),
        date: getDateTime(report.created_at),
        equipmentType: report.type.replace('report', '') as AcEquipmentType,
        type: 'report'
      }))
    }
  ]

  return { isLoading, reportList }
}
