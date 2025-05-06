import { useParams, useRouter } from 'next/navigation'

import { qnaAcDetailsSuccessPath } from '@/config/paths/qna-path'

export const usePhaseTwo = () => {
  const router = useRouter()
  const { type } = useParams()

  const handleContinue = () => {
    router.replace(qnaAcDetailsSuccessPath({ type }))
  }

  return {
    handleContinue
  }
}
