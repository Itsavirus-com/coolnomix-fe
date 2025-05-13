import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

import { qnaAcDetailsReviewPath } from '@/config/paths'

export const useQnaSubmissionLists = (status: string, type?: string, equipmentType?: string) => {
  const t = useTranslations('listBranch')

  const icon = useMemo(() => {
    if (!type) {
      switch (equipmentType) {
        case 'air-conditioning':
          return {
            icon: 'icon-posts',
            iconBgColor: 'bg-red-light'
          }
        case 'refrigeration':
        default:
          return {
            icon: 'icon-posts',
            iconBgColor: 'bg-yellow-light'
          }
      }
    }

    if (equipmentType === 'refrigeration') {
      return {
        icon: 'icon-people',
        iconBgColor: 'bg-pink'
      }
    }

    switch (type) {
      case 'air-conditioning':
        return {
          icon: 'icon-posts',
          iconBgColor: 'bg-blue-light'
        }
      case 'refrigeration':
        return {
          icon: 'icon-zip',
          iconBgColor: 'bg-pink'
        }
      case 'technician':
      default:
        return {
          icon: 'icon-people',
          iconBgColor: 'bg-purple-mid'
        }
    }
  }, [type])

  const typeAlias = useMemo(() => {
    if (equipmentType === 'refrigeration') {
      return t('form')
    }

    if (!type) return t('report')

    switch (type) {
      case 'details-forms':
        return t('form')
      case 'asset-list':
        return t('asset_list')
      case 'technician':
      default:
        return t('request_technician')
    }
  }, [type])

  const buttonLabel = useMemo(() => {
    switch (status) {
      case 'pending':
        return t('start_now')
      case 'in-review':
      case 'approved':
      case 'declined':
      case 'done':
      default:
        return t('view')
    }
  }, [status])

  const viewLink = useMemo(() => {
    switch (type) {
      case 'asset-list':
      case 'details-forms':
        return qnaAcDetailsReviewPath({ type })
      case 'technician':
      default:
        return qnaAcDetailsReviewPath({ type: 'tech-visit' })
    }
  }, [type])

  const phaseLabel = useMemo(() => {
    return type === 'details-forms' && status === 'pending' ? t('phase_2') : t('phase_1')
  }, [status, type])

  const emptyListMessage = useMemo(() => {
    if (!type) {
      switch (status) {
        case 'in-review':
          return t('looks_like_no_in_review_report')
        case 'approved':
        default:
          return t('looks_like_no_approved_report')
      }
    }

    switch (status) {
      case 'pending':
        return t('looks_like_no_pending_qna')
      case 'in-review':
        return t('all_set_no_reports_under_review')
      case 'done':
        return t('no_new_completed_qna')
      case 'approved':
        return t('looks_like_no_approved_qna')
      case 'declined':
        return t('looks_like_no_declined_qna')
      default:
        return t('looks_like_no_pending_qna')
    }
  }, [status])

  return {
    icon,
    typeAlias,
    buttonLabel,
    phaseLabel,
    viewLink,
    emptyListMessage
  }
}
