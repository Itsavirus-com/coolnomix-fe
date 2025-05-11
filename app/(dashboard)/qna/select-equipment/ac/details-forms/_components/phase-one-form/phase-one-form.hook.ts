import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useCallback, useEffect, useMemo } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'

import { ControlledButtonProps } from '@/components/button/button.types'
import { qnaAcDetailsReviewPath, qnaSuccessSubmittedPath } from '@/config/paths'
import { load, remove } from '@/utils/storage'

import { formSchema } from './phase-one-form.schema'

export const usePhaseOneForm = () => {
  const t = useTranslations('qna')
  const tVal = useTranslations('validation')

  const router = useRouter()

  // Should be data from backend
  const isSubmitted = false
  const isApproved = true

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

  const onSubmit = useCallback((values: z.infer<typeof schema>) => {
    console.log(values)
    router.replace(qnaSuccessSubmittedPath())
    remove('QNA_FORM')
  }, [])

  const handleContinue = () => {
    router.push(`${qnaAcDetailsReviewPath({ type: 'details-forms' })}?tab=phase-2`)
  }

  const handleBack = () => {
    router.back()
  }

  const buttons = useMemo(() => {
    const buttons = []

    const submitButton: ControlledButtonProps = {
      type: 'submit',
      size: 'lg',
      label: t('submit'),
      disabled: isSubmitted && !isApproved
    }

    const continueButton: ControlledButtonProps = {
      type: 'button',
      size: 'lg',
      label: t('continue_phase_2'),
      disabled: isSubmitted && !isApproved,
      onClick: handleContinue
    }

    const editButton: ControlledButtonProps = {
      type: 'button',
      size: 'lg',
      variant: 'secondary',
      label: t('edit'),
      onClick: handleBack
    }

    if (!isApproved) {
      buttons.push(editButton)
      buttons.push(submitButton)
    }

    if (isApproved) {
      buttons.push(continueButton)
    }

    return buttons as [ControlledButtonProps, ControlledButtonProps]
  }, [isApproved, isSubmitted])

  useEffect(() => {
    const savedAnswer = load('QNA_FORM')

    setTimeout(() => {
      methods.reset({
        phaseOne: savedAnswer?.detailsBrand?.map((detailBrand: any, index: string) => ({
          ...detailBrand,
          ...savedAnswer?.detailsAc[index]
        })),
        peakLoadTarif: savedAnswer?.peakLoadTarif
      })
    }, 0)
  }, [])

  return {
    methods,
    phaseOneFormFields,
    peakLoadTarifFields,
    buttons,
    isSubmitted,
    onSubmit
  }
}
