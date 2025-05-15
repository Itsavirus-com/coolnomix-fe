import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

import {
  createButtonLabel,
  createEmptyListMessage,
  createIcon,
  createPhaseLabel,
  createTypeAlias,
  createViewLink
} from './report-lists.helpers'

export const useReportList = (id: number, status: string, type: string, equipmentType?: string) => {
  const t = useTranslations('listBranch')

  const icon = useMemo(() => createIcon(type, equipmentType), [type, equipmentType])
  const typeAlias = useMemo(() => createTypeAlias(type, equipmentType, t), [type, equipmentType])
  const buttonLabel = useMemo(() => createButtonLabel(status, t), [status])
  const viewLink = useMemo(() => createViewLink(type, id), [type, id])
  const phaseLabel = useMemo(() => createPhaseLabel(type, status, t), [type, status])
  const emptyListMessage = createEmptyListMessage(t, status, type)

  return {
    icon,
    typeAlias,
    buttonLabel,
    phaseLabel,
    viewLink,
    emptyListMessage
  }
}
