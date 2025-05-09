import { useRouter } from 'next/navigation'

import { qnaAcDetailsSuccessPath } from '@/config/paths'

export const usePhaseTwo = () => {
  const router = useRouter()

  const handleContinue = () => {
    router.replace(qnaAcDetailsSuccessPath({ type: 'details-forms' }))
  }

  return {
    handleContinue
  }
}
