import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useCallback, useMemo } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { z } from 'zod'

import { ControlledButtonProps } from '@/components/button/button.types'

import { formSchema } from './step-one-form.scheme'

const apiResponseData = [
  {
    brandEquipment: 'Brand Equipment 1',
    modelEquipment: 'Model Equipment 1',
    serialNumber: 'Serial Number 1',
    acType: 'indoor'
  },
  {
    brandEquipment: 'Brand Equipment 2',
    modelEquipment: 'Model Equipment 2',
    serialNumber: 'Serial Number 2',
    acType: 'outdoor'
  }
]

export const useStepOneForm = () => {
  const { t } = useTranslation('qna')

  const router = useRouter()

  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      detailsBrand: apiResponseData
    }
  })

  const { fields } = useFieldArray({
    control: methods.control,
    name: 'detailsBrand'
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

  return { methods, fields, buttons, onSubmit }
}
