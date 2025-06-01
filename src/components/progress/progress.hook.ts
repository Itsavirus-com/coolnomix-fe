import { useMemo } from 'react'

export const useProgress = (steps: string[], currentStepName: string) => {
  const { safeCurrentStep, percentage, safeTotalSteps } = useMemo(() => {
    const currentStep = steps.findIndex((step) => step === currentStepName) + 1
    const safeTotalSteps = Math.max(1, steps.length)
    const safeCurrentStep = Math.max(1, Math.min(currentStep, safeTotalSteps))
    const percentage = safeTotalSteps > 0 ? Math.round((safeCurrentStep / safeTotalSteps) * 100) : 0

    return { safeCurrentStep, percentage, safeTotalSteps }
  }, [steps, currentStepName])

  return { safeCurrentStep, percentage, safeTotalSteps }
}
