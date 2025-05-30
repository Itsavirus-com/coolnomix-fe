import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useCallback, useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { ControlledButtonProps } from '@/components/button/button.types'
import { QNA_FORM_STORAGE_KEY } from '@/config/constant'
import { load, updateStoredObject } from '@/utils/storage'

import { formSchema } from './upload-form.schema'

export const useUploadForm = () => {
  const t = useTranslations('qna')

  const router = useRouter()

  const saved = load(QNA_FORM_STORAGE_KEY)

  const schema = formSchema()
  const methods = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      acUnit: []
    }
  })

  const handleBack = () => router.back()
  const onSubmit = useCallback((values: z.infer<typeof schema>) => {
    updateStoredObject(QNA_FORM_STORAGE_KEY, {
      stepsForm: values.acUnit?.map((item, index: number) => ({
        ...(saved?.stepsForm?.[index] || {}),
        acUnit: item
      }))
    })
  }, [])

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
    const timeout = setTimeout(() => {
      methods.reset({
        acUnit:
          saved?.stepsForm?.filter(({ acUnit }: any) => acUnit)?.map(({ acUnit }: any) => acUnit) ||
          []
      })
    }, 300)

    return () => clearTimeout(timeout)
  }, [])

  return { methods, buttons, onSubmit }
}
