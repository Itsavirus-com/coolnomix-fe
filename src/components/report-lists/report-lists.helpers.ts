import { TFunction } from 'next-intl'

import { qnaAcDetailsReviewPath } from '@/config/paths'
import { reportDetailPath } from '@/config/paths/list-of-report-path'

export const createIcon = (type: string, equipmentType?: string) => {
  if (type !== 'report' && equipmentType === 'refrigeration') {
    return {
      icon: 'icon-people',
      iconBgColor: 'bg-pink'
    }
  }

  switch (type) {
    case 'details-forms':
      return {
        icon: 'icon-posts',
        iconBgColor: 'bg-blue-light'
      }
    case 'asset-list':
      return {
        icon: 'icon-zip',
        iconBgColor: 'bg-pink'
      }
    case 'technician':
      return {
        icon: 'icon-people',
        iconBgColor: 'bg-purple-mid'
      }
    case 'report':
    default:
      if (equipmentType === 'refrigeration') {
        return {
          icon: 'icon-posts',
          iconBgColor: 'bg-yellow-light'
        }
      }
      return {
        icon: 'icon-posts',
        iconBgColor: 'bg-red-light'
      }
  }
}

export const createTypeAlias = (type: string, equipmentType: string, t: TFunction) => {
  if (equipmentType === 'refrigeration') {
    return t('form')
  }

  switch (type) {
    case 'details-forms':
      return t('form')
    case 'asset-list':
      return t('asset_list')
    case 'technician':
      return t('request_technician')
    case 'report':
    default:
      return t('report')
  }
}

export const createButtonLabel = (status: string, t: TFunction) => {
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
}

export const createViewLink = (type: string, id: number) => {
  switch (type) {
    case 'asset-list':
    case 'details-forms':
      return qnaAcDetailsReviewPath({ type })
    case 'technician':
      return qnaAcDetailsReviewPath({ type: 'tech-visit' })
    case 'report':
    default:
      return reportDetailPath(id)
  }
}

export const createPhaseLabel = (type: string, status: string, t: TFunction) => {
  return type === 'details-forms' && status === 'pending' ? t('phase_2') : t('phase_1')
}

export const createEmptyListMessage = (t: TFunction, status: string, type?: string) => {
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
}
