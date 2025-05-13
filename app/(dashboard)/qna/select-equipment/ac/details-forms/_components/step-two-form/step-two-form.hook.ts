import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useCallback, useEffect, useMemo } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'

import { ControlledButtonProps } from '@/components/button/button.types'
import { load, updateStoredObject } from '@/utils/storage'

import { formSchema } from './step-two-form.schema'

const apiResponseData = [
  {
    operatingHoursPerDay: '10',
    runningDaysPerWeek: '5',
    btuPerHour: '10',
    inputPower: '10',
    ratioOutsideToInside: '1:1',
    peekLoadHoursStartTime: '2025-05-10T10:26:12.057Z',
    peekLoadHoursEndTime: '2025-05-10T10:26:12.057Z'
  },
  {
    operatingHoursPerDay: '10',
    runningDaysPerWeek: '5',
    btuPerHour: '10',
    inputPower: '10',
    ratioOutsideToInside: '1:1',
    peekLoadHoursStartTime: '2025-05-10T10:26:12.057Z',
    peekLoadHoursEndTime: '2025-05-10T10:26:12.057Z'
  }
]

const peakLoadTarifData = [
  {
    peakLoadTarif: '10',
    noPeakLoadTarif: '10'
  }
]

export const useStepTwoForm = () => {
  const t = useTranslations('qna')
  const tVal = useTranslations('validation')

  const router = useRouter()

  const schema = formSchema(tVal)
  const methods = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema)
  })

  const { fields: detailsAcFields } = useFieldArray({
    control: methods.control,
    name: 'detailsAc'
  })

  const { fields: peakLoadTarifFields } = useFieldArray({
    control: methods.control,
    name: 'peakLoadTarif'
  })

  const onSubmit = useCallback((values: z.infer<typeof schema>) => {
    updateStoredObject('QNA_FORM', values)
  }, [])

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
        type: 'submit',
        size: 'lg',
        label: t('continue')
      }
    ],
    []
  )

  useEffect(() => {
    const savedAnswer = load('QNA_FORM')

    setTimeout(() => {
      methods.reset({
        detailsAc: savedAnswer?.detailsAc || apiResponseData,
        peakLoadTarif: savedAnswer?.peakLoadTarif || peakLoadTarifData
      })
    }, 300)
  }, [])

  return { methods, detailsAcFields, peakLoadTarifFields, buttons, onSubmit }
}
