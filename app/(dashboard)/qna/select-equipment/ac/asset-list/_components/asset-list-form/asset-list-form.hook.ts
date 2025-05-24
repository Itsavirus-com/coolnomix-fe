import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import type { ControlledButtonProps } from '@/components/button/button.types'
import { qnaSuccessPath } from '@/config/paths'
import { qnaApi } from '@/services/api/qna-api'
import { handleGenericError } from '@/utils/error-handler'

import { formSchema } from './asset-list-form.schema'

export const useAssetListForm = (inPreview: boolean) => {
  const t = useTranslations('qna')
  const tVal = useTranslations('validation')

  const router = useRouter()

  const schema = formSchema(tVal)

  const methods = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      file: []
    }
  })

  const handleBack = () => router.back()
  const onSubmit = useCallback(async (values: z.infer<typeof schema>) => {
    try {
      await qnaApi.uploadAssetList({
        file: values.file[0]
      })
      methods.reset()
      router.push(qnaSuccessPath())
    } catch (error: any) {
      handleGenericError(error)
    }
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
        label: t('submit'),
        disabled: inPreview,
        onSubmit
      }
    ],
    [inPreview]
  )

  return { methods, buttons, onSubmit }
}
