import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

import { qnaAcDetailsReviewPhase2Path } from '@/config/paths'

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

  // Should be data from backend
  const isApproved = false

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
    isApproved,
    phases,
    currentPhase,
    handleChangePhase,
    handleContinue
  }
}
