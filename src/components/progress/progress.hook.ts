import { useEffect, useState } from 'react'

export const useProgress = (steps: string[], currentStepName: string) => {
  const currentStep = steps.findIndex((step) => step === currentStepName) + 1

  const [safeCurrentStep, setSafeCurrentStep] = useState(currentStep)

  const safeTotalSteps = Math.max(1, steps.length)
  const percentage = safeTotalSteps > 0 ? Math.round((safeCurrentStep / safeTotalSteps) * 100) : 0

  useEffect(() => {
    setSafeCurrentStep(currentStep)
  }, [currentStep])

  return { safeCurrentStep, percentage, safeTotalSteps }
}
