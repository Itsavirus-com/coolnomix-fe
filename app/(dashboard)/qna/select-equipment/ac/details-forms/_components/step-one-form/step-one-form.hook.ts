import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useCallback, useEffect, useMemo } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'

import { ControlledButtonProps } from '@/components/button/button.types'
import { load, updateStoredObject } from '@/utils/storage'

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
    resolver: zodResolver(schema)
  })

  const { fields } = useFieldArray({
    control: methods.control,
    name: 'detailsBrand'
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
        detailsBrand: savedAnswer?.detailsBrand || apiResponseData
      })
    }, 300)
  }, [])

  return { methods, fields, buttons, onSubmit }
}
