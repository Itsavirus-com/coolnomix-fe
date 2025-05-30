import { useSearchParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

import { successAnimation, techVisitSuccessAnimation } from '@/assets/images'
import { qnaAcDetailsReviewPath, qnaAcPath } from '@/config/paths'
import { reportListPath } from '@/config/paths/list-of-report-path'

import { SuccessMessageType } from './success-layout.types'

export const useSuccessLayout = () => {
  const t = useTranslations('common')

  const searchParams = useSearchParams()

  const type = searchParams.get('type')

  const successMessage = useMemo((): SuccessMessageType => {
    switch (type) {
      case 'tech-visit':
        return {
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
          image: techVisitSuccessAnimation,
          imageAlt: t('an_awesome_success_result_animation')
        }
      case 'details-forms':
        return {
          title: t('submission_successful'),
          description: t('submission_successful_description_phase_2'),
          buttons: [
            null,
            {
              label: t('continue_to_phase_2'),
              link: qnaAcDetailsReviewPath({ type: 'details-forms' })
            }
          ],
          image: successAnimation,
          imageAlt: t('an_awesome_success_result_animation')
        }
      default:
        return {
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
          image: successAnimation,
          imageAlt: t('an_awesome_success_result_animation')
        }
    }
  }, [type])

  return { ...successMessage }
}
