import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useCallback, useMemo } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { z } from 'zod'

import { ControlledButtonProps } from '@/components/button/button.types'
import { remove } from '@/utils/storage'

import { formSchema } from './phase-two-form.scheme'

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
  const { t } = useTranslation('qna')

  const router = useRouter()

  // Should be data from backend
  const isSubmitted = false

  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      detailsForm: apiResponseData
    }
  })

  const { fields: detailsFormFields } = useFieldArray({
    control: methods.control,
    name: 'detailsForm'
  })

  const onSubmit = useCallback(
    async (values: z.infer<typeof formSchema>) => {
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

  return {
    methods,
    detailsFormFields,
    buttons,
    isSubmitted,
    onSubmit
  }
}
