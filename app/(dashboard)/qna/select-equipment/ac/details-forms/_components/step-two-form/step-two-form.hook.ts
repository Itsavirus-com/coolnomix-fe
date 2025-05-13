import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useCallback, useMemo } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'

import { ControlledButtonProps } from '@/components/button/button.types'

import { formSchema } from './step-two-form.scheme'

const apiResponseData = [
  {
    operatingHoursPerDay: '10',
    runningDaysPerWeek: '5',
    btuPerHour: '10',
    inputPower: '10',
    ratioOutsideToInside: '1:1',
    peekLoadHoursStartTime: new Date(),
    peekLoadHoursEndTime: new Date()
  },
  {
    operatingHoursPerDay: '10',
    runningDaysPerWeek: '5',
    btuPerHour: '10',
    inputPower: '10',
    ratioOutsideToInside: '1:1',
    peekLoadHoursStartTime: new Date(),
    peekLoadHoursEndTime: new Date()
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

  const router = useRouter()

  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      detailsAc: apiResponseData,
      peakLoadTarif: peakLoadTarifData
    }
  })

  const { fields: detailsAcFields } = useFieldArray({
    control: methods.control,
    name: 'detailsAc'
  })

  const { fields: peakLoadTarifFields } = useFieldArray({
    control: methods.control,
    name: 'peakLoadTarif'
  })

  const onSubmit = useCallback((values: z.infer<typeof formSchema>) => {
    console.log(values)
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

  return { methods, detailsAcFields, peakLoadTarifFields, buttons, onSubmit }
}
