import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useCallback, useMemo } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'

import { ControlledButtonProps } from '@/components/button/button.types'
import { qnaAcDetailsReviewPath, qnaAcDetailsSuccessPath } from '@/config/paths'
import { remove } from '@/utils/storage'

import { formSchema } from './phase-one-form.schema'

const apiResponseData = [
  {
    brandEquipment: 'Brand Equipment 1',
    modelEquipment: 'Model Equipment 1',
    serialNumber: 'Serial Number 1',
    acType: 'indoor',
    operatingHoursPerDay: '10',
    runningDaysPerWeek: '5',
    peekLoadHoursStartTime: new Date(),
    peekLoadHoursEndTime: new Date(),
    btuPerHour: '10',
    inputPower: '10',
    ratioOutsideToInside: '1:1'
  },
  {
    brandEquipment: 'Brand Equipment 2',
    modelEquipment: 'Model Equipment 2',
    serialNumber: 'Serial Number 2',
    acType: 'outdoor',
    operatingHoursPerDay: '10',
    runningDaysPerWeek: '5',
    peekLoadHoursStartTime: new Date(),
    peekLoadHoursEndTime: new Date(),
    btuPerHour: '10',
    inputPower: '10',
    ratioOutsideToInside: '1:1'
  }
]

const peakLoadTarifData = [
  {
    peakLoadTarif: '10',
    noPeakLoadTarif: '10'
  }
]

export const usePhaseOneForm = () => {
  const t = useTranslations('qna')
  const tVal = useTranslations('validation')

  const router = useRouter()

  // Should be data from backend
  const isSubmitted = false
  const isApproved = true

  const schema = formSchema(tVal)
  const methods = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      detailsForm: apiResponseData,
      peakLoadTarif: peakLoadTarifData
    }
  })

  const { fields: detailsFormFields } = useFieldArray({
    control: methods.control,
    name: 'detailsForm'
  })

  const { fields: peakLoadTarifFields } = useFieldArray({
    control: methods.control,
    name: 'peakLoadTarif'
  })

  const onSubmit = useCallback((values: z.infer<typeof schema>) => {
    console.log(values)
    router.replace(qnaAcDetailsSuccessPath({ type: 'details-form' }))
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

  return {
    methods,
    detailsFormFields,
    peakLoadTarifFields,
    buttons,
    isSubmitted,
    onSubmit
  }
}
