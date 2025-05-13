import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useCallback, useMemo } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'

import { ControlledButtonProps } from '@/components/button/button.types'

import { formSchema } from './step-one-form.schema'

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
  const t = useTranslations('qna')
  const tVal = useTranslations('validation')

  const router = useRouter()

  const schema = formSchema(tVal)
  const methods = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      detailsBrand: apiResponseData
    }
  })

  const { fields } = useFieldArray({
    control: methods.control,
    name: 'detailsBrand'
  })

  const onSubmit = useCallback((values: z.infer<typeof schema>) => {
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
