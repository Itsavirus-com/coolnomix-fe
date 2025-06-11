import { useSearchParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

import { successAnimation, techVisitSuccessAnimation } from '@/assets/images'
import { qnaAcDetailsReviewPath, qnaAcPath, reportListPath } from '@/config/paths'
import { useQnaGetAircons } from '@/services/swr/hooks/use-qna-get-aircons'

import { SuccessMessageLayoutType, SuccessMessageType } from './success-layout.types'

export const useSuccessLayout = () => {
  const t = useTranslations('common')

  const searchParams = useSearchParams()

  const type = searchParams.get('type') as SuccessMessageType

  const { isLoading: isLoadingAircons } = useQnaGetAircons()

  const baseMessage = {
    image: successAnimation,
    imageAlt: t('an_awesome_success_result_animation')
  }

  const techVisitMessage: SuccessMessageLayoutType = {
    title: t('we_ve_got_your_request'),
    description: t('thank_you_your_request_has_been_received'),
    buttons: [
      {
        label: t('add_another_ac_request'),
        variant: 'cancel',
        link: qnaAcPath()
      },
      {
        label: t('go_to_reports'),
        link: reportListPath()
      }
    ],
    ...baseMessage,
    image: techVisitSuccessAnimation
  }

  const detailsFormsMessage: SuccessMessageLayoutType = {
    title: t('submission_successful'),
    description: t('submission_successful_description_phase_2'),
    buttons: [
      null,
      {
        label: t('continue_to_phase_2'),
        link: `${qnaAcDetailsReviewPath({ type: 'details-forms' })}?tab=phase-2`
      }
    ],
    loading: isLoadingAircons,
    ...baseMessage
  }

  const defaultMessage: SuccessMessageLayoutType = {
    title: t('submission_successful'),
    description: t('submission_successful_description'),
    buttons: [
      {
        label: t('add_another_ac_request'),
        variant: 'cancel',
        link: qnaAcPath()
      },
      {
        label: t('go_to_reports'),
        link: reportListPath()
      }
    ],
    ...baseMessage
  }

  const actionHandlers: Record<SuccessMessageType, SuccessMessageLayoutType> = {
    'tech-visit': techVisitMessage,
    'details-forms': detailsFormsMessage
  }

  const message = useMemo(() => actionHandlers[type] || defaultMessage, [type, isLoadingAircons])

  return {
    ...message
  }
}
