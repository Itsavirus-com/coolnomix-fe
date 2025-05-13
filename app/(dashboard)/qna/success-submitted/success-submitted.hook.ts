import { useSearchParams } from 'next/navigation'
import { useTranslations } from 'next-intl'

import { successAnimation, techVisitSuccessAnimation } from '@/assets/images'

export const useSuccessSubmitted = () => {
  const t = useTranslations('qna')

  const searchParams = useSearchParams()
  const techVisitType = searchParams.get('type') === 'tech-visit'

  const title = techVisitType ? t('we_ve_got_your_request') : t('submission_successful')
  const description = techVisitType
    ? t('thank_you_your_request_has_been_received')
    : t('submission_successful_description')
  const image = techVisitType ? techVisitSuccessAnimation : successAnimation
  const imageAlt = t('an_awesome_success_result_animation')

  return {
    title,
    description,
    image,
    imageAlt
  }
}
