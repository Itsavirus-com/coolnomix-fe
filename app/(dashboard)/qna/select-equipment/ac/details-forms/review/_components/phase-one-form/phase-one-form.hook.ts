import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useCallback, useEffect, useMemo } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'

import { QNA_FORM_STORAGE_KEY } from '@/config/constant'
import { qnaAcDetailsPath, qnaAcDetailsReviewPath, qnaSuccessPath } from '@/config/paths'
import { qnaApi } from '@/services/api/qna-api'
import { useQnaGetAircons } from '@/services/swr/hooks/use-qna-get-aircons'
import { resetQnaDetailsForms } from '@/stores/qna-details-forms.actions'
import { ButtonGroupType } from '@/types/general'
import { handleGenericError } from '@/utils/error-handler'
import { remove } from '@/utils/storage'

import { getPayload, getSavedPeakLoadTarif, getSavedPhaseOne } from './phase-one-form.helpers'
import { formSchema } from './phase-one-form.schema'

export const usePhaseOneForm = () => {
  const t = useTranslations('qna')
  const tVal = useTranslations('validation')

  const router = useRouter()

  const { aircons, hasApprovedAircons, mutate } = useQnaGetAircons()
  const savedPhaseOne = getSavedPhaseOne(aircons)
  const savedPeakLoadTarif = getSavedPeakLoadTarif(aircons)

  const isSubmitted = false

  const schema = formSchema(tVal)
  const methods = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema)
  })

  const { fields: phaseOneFormFields } = useFieldArray({
    control: methods.control,
    name: 'phaseOne'
  })

  const { fields: peakLoadTarifFields } = useFieldArray({
    control: methods.control,
    name: 'peakLoadTarif'
  })

  const handleContinue = () => {
    router.push(`${qnaAcDetailsReviewPath({ type: 'details-forms' })}?tab=phase-2`)
  }

  const handleBack = () => {
    router.push(`${qnaAcDetailsPath({ type: 'details-forms' })}?step=details-form-ac`)
  }

  const onSubmit = useCallback(async (values: z.infer<typeof schema>) => {
    try {
      const payload = getPayload(values)
      await qnaApi.createAcPhaseOne(payload)
      remove(QNA_FORM_STORAGE_KEY)
      resetQnaDetailsForms()
      mutate()
      router.replace(`${qnaSuccessPath()}?type=details-forms`)
    } catch (error: any) {
      handleGenericError(error)
    }
  }, [])

  const buttons = useMemo(() => {
    const buttons = []

    const submitButton = {
      type: 'submit',
      size: 'lg',
      label: t('submit'),
      disabled: isSubmitted && !hasApprovedAircons,
      onSubmit
    }

    const continueButton = {
      type: 'button',
      size: 'lg',
      label: t('continue_phase_2'),
      disabled: isSubmitted && !hasApprovedAircons,
      onClick: handleContinue
    }

    const editButton = {
      type: 'button',
      size: 'lg',
      variant: 'cancel',
      label: t('edit'),
      onClick: handleBack
    }

    if (hasApprovedAircons) {
      buttons.push(continueButton)
    }

    if (!hasApprovedAircons) {
      buttons.push(editButton)
      buttons.push(submitButton)
    }

    return buttons as ButtonGroupType
  }, [hasApprovedAircons, isSubmitted])

  useEffect(() => {
    if (savedPhaseOne.length > 0 || savedPeakLoadTarif.length > 0) {
      methods.reset({
        phaseOne: savedPhaseOne,
        peakLoadTarif: savedPeakLoadTarif
      })
    }
  }, [savedPhaseOne.length, savedPeakLoadTarif.length, methods])

  return {
    methods,
    phaseOneFormFields,
    peakLoadTarifFields,
    buttons,
    isSubmitted,
    onSubmit
  }
}
