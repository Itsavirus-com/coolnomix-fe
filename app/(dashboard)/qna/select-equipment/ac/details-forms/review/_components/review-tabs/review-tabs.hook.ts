import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

import { qnaAcDetailsReviewPhase2Path } from '@/config/paths'
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
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()

  const phase = searchParams.get('tab') || 'phase-1'

  const [currentPhase, setCurrentPhase] = useState(phase)

  const { isLoading, hasApprovedAircons } = useQnaGetAircons()

  const handleChangePhase = useCallback(
    (step: string) => {
      setCurrentPhase(step)

      const params = new URLSearchParams(searchParams)
      params.set('tab', step)
      window.history.pushState({}, '', pathname + '?' + params.toString())
    },
    [pathname, searchParams]
  )

  const handleContinue = () => {
    router.push(qnaAcDetailsReviewPhase2Path({ type: 'details-forms' }))
  }

  useEffect(() => {
    setCurrentPhase(phase)
  }, [phase])

  return {
    phases,
    hasApprovedAircons,
    isLoading,
    currentPhase,
    handleChangePhase,
    handleContinue
  }
}
