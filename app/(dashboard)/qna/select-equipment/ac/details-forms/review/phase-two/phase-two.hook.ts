import { useRouter } from 'next/navigation'

import { qnaSuccessPath } from '@/config/paths'

export const usePhaseTwo = () => {
  const router = useRouter()

  const handleContinue = () => {
    router.replace(`${qnaSuccessPath()}?type=details-forms-phase-2`)
  }

  return {
    handleContinue
  }
}
