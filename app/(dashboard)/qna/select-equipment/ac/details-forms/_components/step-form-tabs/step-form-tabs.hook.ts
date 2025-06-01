import { useRouter } from 'next/navigation'

import { qnaAcDetailsReviewPath } from '@/config/paths'
import { useStepParams } from '@/hooks/url-params.hook'

const steps = ['upload-form', 'details-form', 'details-form-ac']

export const useStepFormTabs = () => {
  const router = useRouter()

  const { currentValue, updateParam } = useStepParams('upload-form')

  const handleReview = () => {
    router.push(qnaAcDetailsReviewPath({ type: 'details-forms' }))
  }

  return { steps, currentStep: currentValue, handleContinue: updateParam, handleReview }
}
