import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useCallback, useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { ControlledButtonProps } from '@/components/button/button.types'
import { useQnaGetAircons } from '@/services/swr/hooks/use-qna-get-aircons'
import { setAcUnit } from '@/stores/qna-details-forms.actions'

import { getSavedAcUnit } from './upload-form.helpers'
import { formSchema } from './upload-form.schema'

export const useUploadForm = () => {
  const t = useTranslations('qna')

  const router = useRouter()

  const { aircons } = useQnaGetAircons()
  const savedAcUnit = getSavedAcUnit(aircons)

  const schema = formSchema()
  const methods = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema)
  })

  const handleBack = () => router.back()
  const onSubmit = useCallback((values: z.infer<typeof schema>) => {
    setAcUnit(values.ac_unit)
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
    methods.reset({
      ac_unit: savedAcUnit
    })
  }, [savedAcUnit.length])

  return { methods, buttons, onSubmit }
}
