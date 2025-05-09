import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useCallback, useMemo, useState } from 'react'

import { acRequest1, acRequest2, acRequest3 } from '@/assets/images'
import { ControlledButtonProps } from '@/components/button/button.types'
import { qnaAcDetailsPath } from '@/config/paths'
import { load, updateStoredObject } from '@/utils/storage'

import { SelectAcRequestCardType, SelectAcRequestValue } from './select-ac-request-cards.types'

export const useSelectAcRequest = () => {
  const t = useTranslations('qna')

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

  const requestTypes: SelectAcRequestCardType[] = useMemo(
    () => [
      {
        image: acRequest1,
        title: t('asset_list'),
        description: t('upload_your_ac_asset_list_for_faster_processing'),
        type: 'asset-list'
      },
      {
        image: acRequest2,
        title: t('details_forms'),
        description: t('fill_out_the_form_based_on_your_air_conditioner'),
        type: 'details-forms'
      },
      {
        image: acRequest3,
        title: t('technician_visit'),
        description: t('technician_will_visit_to_assess_your_ac_needs'),
        type: 'tech-visit'
      }
    ],
    []
  )

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

  return { requestTypes, buttons, selectedAcRequest, handleSelectAcRequest }
}
