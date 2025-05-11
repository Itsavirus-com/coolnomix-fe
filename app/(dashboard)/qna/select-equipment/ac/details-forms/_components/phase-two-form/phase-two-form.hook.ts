import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useCallback, useEffect, useMemo } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'

import { ControlledButtonProps } from '@/components/button/button.types'
import { load, remove } from '@/utils/storage'

import { formSchema } from './phase-two-form.schema'

const apiResponseData: any = [
  {
    yearOfInstallation: '2020',
    serviceFrequency: 'monthly',
    lastServiceDate: '2020-01-01',
    roomTemperature: '25',
    onCoilAirTemprature: '25',
    offCoilAirTemprature: '25',
    wifiAvailable: 'yes',
    filterCondition: []
  }
]

export const usePhaseTwoForm = (inPreview: boolean) => {
  const t = useTranslations('qna')
  const tVal = useTranslations('validation')

  const router = useRouter()

  // Should be data from backend
  const isSubmitted = false

  const schema = formSchema(tVal)
  const methods = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema)
  })

  const { fields: phaseTwoFormFields } = useFieldArray({
    control: methods.control,
    name: 'phaseTwo'
  })

  const onSubmit = useCallback(
    async (values: z.infer<typeof schema>) => {
      console.log(values)
      remove('QNA_FORM')
    },
    [inPreview]
  )

  const handleBack = () => {
    router.back()
  }

  const buttons: [ControlledButtonProps, ControlledButtonProps] = useMemo(
    () => [
      {
        size: 'lg',
        variant: 'secondary',
        label: inPreview ? t('edit') : t('back'),
        onClick: handleBack
      },
      {
        type: 'submit',
        size: 'lg',
        label: inPreview ? t('submit') : t('preview'),
        disabled: isSubmitted
      }
    ],
    [inPreview]
  )

  useEffect(() => {
    const savedAnswer = load('QNA_FORM')

    setTimeout(() => {
      methods.reset({
        phaseTwo: savedAnswer?.phaseTwo || apiResponseData
      })
    }, 0)
  }, [])

  return {
    methods,
    phaseTwoFormFields,
    buttons,
    isSubmitted,
    onSubmit
  }
}
