import { useSearchParams } from 'next/navigation'

import { successAnimation, techVisitSuccessAnimation } from '@/assets/images'

export const useSuccessSubmitted = () => {
  const searchParams = useSearchParams()
  const techVisitType = searchParams.get('type') === 'tech-visit'

  const title = techVisitType ? 'we_ve_got_your_request' : 'submission_successful'
  const description = techVisitType
    ? 'thank_you_your_request_has_been_received'
    : 'submission_successful_description'
  const image = techVisitType ? techVisitSuccessAnimation : successAnimation

  return {
    title,
    description,
    image
  }
}
