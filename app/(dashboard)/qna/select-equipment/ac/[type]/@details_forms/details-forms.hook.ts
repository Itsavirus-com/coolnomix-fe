import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import { qnaAcDetailsReviewPath } from '@/config/paths/qna-path'

const steps = ['upload-form', 'details-form', 'details-form-ac']

export const useDetailsForms = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { type } = useParams()

  const step = searchParams.get('step') || 'upload-form'

  const [currentStep, setCurrentStep] = useState(step)

  const handleContinue = (step: string) => {
    setCurrentStep(step)

    const params = new URLSearchParams(searchParams)
    params.set('step', step)
    window.history.pushState({}, '', pathname + '?' + params.toString())
  }

  const handleReview = () => {
    router.push(qnaAcDetailsReviewPath({ type }))
  }

  useEffect(() => {
    setCurrentStep(step)
  }, [step])

  return { steps, currentStep, handleContinue, handleReview }
}
