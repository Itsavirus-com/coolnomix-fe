import { useRouter } from 'next/navigation'
import { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ControlledButtonProps } from '@/components/button/button.types'
import { qnaAcDetailsPath } from '@/config/paths/qna-path'
import { load, updateStoredObject } from '@/utils/storage'

import { SelectAcRequestValue } from './select-ac-request-cards.types'

export const useSelectAcRequest = () => {
  const { t } = useTranslation('qna')

  const router = useRouter()

  const currentAcRequest = (load('QNA_FORM')?.acRequest as SelectAcRequestValue) || ''

  const [selectedAcRequest, setSelectedAcRequest] = useState<SelectAcRequestValue>(currentAcRequest)

  const handleSelectAcRequest = useCallback((value: SelectAcRequestValue) => {
    setSelectedAcRequest(value)
    updateStoredObject('QNA_FORM', { acRequest: value })
  }, [])

  const handleClick = useCallback(() => {
    router.push(qnaAcDetailsPath({ type: selectedAcRequest }))
  }, [selectedAcRequest])

  const handleBack = () => {
    router.back()
  }

  const buttons: [ControlledButtonProps, ControlledButtonProps] = useMemo(
    () => [
      {
        size: 'lg',
        variant: 'secondary',
        label: t('back'),
        onClick: handleBack
      },
      {
        size: 'lg',
        label: t('continue'),
        onClick: handleClick,
        disabled: !selectedAcRequest
      }
    ],
    [selectedAcRequest]
  )

  return { selectedAcRequest, handleSelectAcRequest, buttons }
}
