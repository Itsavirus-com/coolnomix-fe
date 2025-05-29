import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useSnapshot } from 'valtio'
import { z } from 'zod'

import type { ControlledButtonProps } from '@/components/button/button.types'
import { QNA_FORM_STORAGE_KEY } from '@/config/constant'
import { qnaSuccessPath } from '@/config/paths'
import { qnaApi } from '@/services/api/qna-api'
import { authStore } from '@/stores/auth-store'
import { handleGenericError } from '@/utils/error-handler'
import { remove } from '@/utils/storage'

import { formSchema } from './asset-list-form.schema'

export const useAssetListForm = (inPreview: boolean) => {
  const t = useTranslations('qna')
  const tVal = useTranslations('validation')

  const router = useRouter()

  const { user } = useSnapshot(authStore).state

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
        client_branch_id: user.id,
        file: values.file[0]
      })
      methods.reset()
      remove(QNA_FORM_STORAGE_KEY)
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
