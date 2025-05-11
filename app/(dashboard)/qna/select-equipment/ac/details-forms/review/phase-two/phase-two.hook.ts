import { useRouter } from 'next/navigation'

import { qnaSuccessSubmittedPath } from '@/config/paths'

export const usePhaseTwo = () => {
  const router = useRouter()

  const handleContinue = () => {
    router.replace(qnaSuccessSubmittedPath())
  }

  return {
    handleContinue
  }
}
