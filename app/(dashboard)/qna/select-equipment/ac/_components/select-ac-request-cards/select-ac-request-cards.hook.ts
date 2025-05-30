import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useCallback, useMemo, useState } from 'react'

import { ControlledButtonProps } from '@/components/button/button.types'
import { QNA_FORM_STORAGE_KEY } from '@/config/constant'
import { qnaAcDetailsPath, qnaSuccessPath } from '@/config/paths'
import { useQnaGetAircons } from '@/services/swr/hooks/use-qna-get-aircons'
import { load, updateStoredObject } from '@/utils/storage'

import { SelectAcRequestCardType, SelectAcRequestValue } from './select-ac-request-cards.types'

export const useSelectAcRequest = () => {
  const t = useTranslations('qna')

  const router = useRouter()

  const currentAcRequest = load(QNA_FORM_STORAGE_KEY)?.acRequest || ''

  const [selectedAcRequest, setSelectedAcRequest] = useState<SelectAcRequestValue>(currentAcRequest)

  const { hasApprovedAircons } = useQnaGetAircons()

  const requestTypes: SelectAcRequestCardType[] = useMemo(
    () => [
      {
        icon: 'icon-zip',
        bgColor: 'bg-[#F1CCF9]',
        borderColor: 'border-1 border-[#EDBFF7]',
        title: t('asset_list'),
        description: t('upload_your_ac_asset_list_for_faster_processing'),
        type: 'asset-list'
      },
      {
        icon: 'icon-posts',
        bgColor: 'bg-[#D6E0FF]',
        borderColor: '',
        title: t('details_forms'),
        description: t('fill_out_the_form_based_on_your_air_conditioner'),
        type: 'details-forms'
      },
      {
        icon: 'icon-user',
        bgColor: 'bg-[#E2DAFB]',
        borderColor: 'border-1 border-[#DBD1FA]',
        title: t('technician_visit'),
        description: t('technician_will_visit_to_assess_your_ac_needs'),
        type: 'tech-visit'
      }
    ],
    []
  )

  const handleSelectAcRequest = useCallback(
    (type: SelectAcRequestValue) => {
      setSelectedAcRequest(type)
      updateStoredObject(QNA_FORM_STORAGE_KEY, { acRequest: type })
    },
    [selectedAcRequest]
  )

  const getPath = () => {
    const isDetailsForms = currentAcRequest === 'details-forms'

    if (isDetailsForms && hasApprovedAircons) {
      return `${qnaSuccessPath()}?type=details-forms`
    }

    return qnaAcDetailsPath({ type: selectedAcRequest })
  }

  const handleClick = useCallback(() => {
    const path = getPath()
    router.push(path)
  }, [currentAcRequest, hasApprovedAircons])

  const handleBack = () => router.back()

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
