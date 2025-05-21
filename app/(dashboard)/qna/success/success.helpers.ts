import { getTranslations } from 'next-intl/server'

import { successAnimation, techVisitSuccessAnimation } from '@/assets/images'
import { qnaAcDetailsReviewPath, qnaAcPath } from '@/config/paths'
import { reportDetailPath } from '@/config/paths/list-of-report-path'

export const getSuccessMessage = async (type: string) => {
  const t = await getTranslations('common')

  switch (type) {
    case 'tech-visit':
      return {
        title: t('we_ve_got_your_request'),
        description: t('thank_you_your_request_has_been_received'),
        buttonLabel: t('back_to_ac_request'),
        buttonLink: qnaAcPath(),
        image: techVisitSuccessAnimation,
        imageAlt: t('an_awesome_success_result_animation')
      }

    case 'details-forms-phase-2':
      return {
        title: t('submission_successful'),
        description: t('submission_successful_description'),
        buttonLabel: t('submit_and_generate_report'),
        buttonLink: reportDetailPath('1'),
        image: successAnimation,
        imageAlt: t('an_awesome_success_result_animation')
      }
    case 'details-forms':
      return {
        title: t('submission_successful'),
        description: t('submission_successful_description'),
        buttonLabel: t('continue_to_phase_2'),
        buttonLink: qnaAcDetailsReviewPath({ type: 'details-forms' }),
        image: successAnimation,
        imageAlt: t('an_awesome_success_result_animation')
      }
    default:
      return {
        title: t('submission_successful'),
        description: t('submission_successful_description'),
        buttonLabel: t('back_to_ac_request'),
        buttonLink: qnaAcPath(),
        image: successAnimation,
        imageAlt: t('an_awesome_success_result_animation')
      }
  }
}
