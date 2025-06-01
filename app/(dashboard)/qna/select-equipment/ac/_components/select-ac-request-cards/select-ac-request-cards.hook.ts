import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useCallback, useEffect, useMemo, useState } from 'react'

import { QNA_FORM_STORAGE_KEY } from '@/config/constant'
import { qnaAcDetailsPath, qnaSuccessPath } from '@/config/paths'
import { useQnaGetAircons } from '@/services/swr/hooks/use-qna-get-aircons'
import { ButtonGroupType } from '@/types/general'
import { load, updateStoredObject } from '@/utils/storage'

import { SelectAcRequestCardType, SelectAcRequestValue } from './select-ac-request-cards.types'

export const useSelectAcRequest = () => {
  const t = useTranslations('qna')

  const router = useRouter()

  const [selectedAcRequest, setSelectedAcRequest] = useState<SelectAcRequestValue>(null)

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
    const isDetailsForms = selectedAcRequest === 'details-forms'

    if (isDetailsForms && hasApprovedAircons) {
      return `${qnaSuccessPath()}?type=details-forms`
    }

    return qnaAcDetailsPath({ type: selectedAcRequest })
  }

  const handleBack = () => router.back()
  const handleClick = useCallback(() => {
    const path = getPath()
    router.push(path)
  }, [selectedAcRequest, hasApprovedAircons])

  const buttons = useMemo((): ButtonGroupType => {
    return [
      {
        size: 'lg',
        variant: 'cancel',
        label: t('back'),
        onClick: handleBack
      },
      {
        size: 'lg',
        label: t('continue'),
        onClick: handleClick,
        disabled: !selectedAcRequest
      }
    ]
  }, [selectedAcRequest])

  useEffect(() => {
    const acRequest = load(QNA_FORM_STORAGE_KEY)?.acRequest || ''
    setSelectedAcRequest(acRequest)
  }, [])

  return { requestTypes, buttons, selectedAcRequest, handleSelectAcRequest }
}
