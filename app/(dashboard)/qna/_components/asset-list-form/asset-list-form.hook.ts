import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { ControlledButtonProps } from '@/components/button/button.types'
import { qnaAcDetailsSuccessPath } from '@/config/paths'
import { remove } from '@/utils/storage'

import { formSchema } from './asset-list-form.scheme'

export const useAssetListForm = (inPreview: boolean) => {
  const t = useTranslations('qna')

  const router = useRouter()

  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      assetList: []
    }
  })

  const onSubmit = useCallback((values: z.infer<typeof formSchema>) => {
    console.log(values)
    router.push(qnaAcDetailsSuccessPath({ type: 'asset-list' }))
    remove('QNA_FORM')
  }, [])

  const handleBack = () => {
    router.back()
    methods.reset()
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
        label: t('submit'),
        disabled: inPreview
      }
    ],
    [inPreview]
  )

  return { methods, buttons, onSubmit }
}
