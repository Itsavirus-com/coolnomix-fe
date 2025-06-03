import { useRouter } from 'next/navigation'

import { qnaAcDetailsReviewPhase2Path } from '@/config/paths'
import { useTabParams } from '@/hooks/url-params.hook'
import { useQnaGetAircons } from '@/services/swr/hooks/use-qna-get-aircons'

const phases = [
  {
    label: 'QnA Phase 1',
    value: 'phase-1',
    icon: 'icon-snow'
  },
  {
    label: 'QnA Phase 2',
    value: 'phase-2',
    icon: 'icon-snow'
  }
]

export const useReviewTabs = () => {
  const router = useRouter()

  const { currentValue, updateParam } = useTabParams('phase-1')

  const { isLoading, hasApprovedAircons } = useQnaGetAircons()

  const handleContinue = () => {
    router.push(qnaAcDetailsReviewPhase2Path({ type: 'details-forms' }))
  }

  return {
    phases,
    hasApprovedAircons,
    isLoading,
    currentPhase: currentValue,
    handleChangePhase: updateParam,
    handleContinue
  }
}
