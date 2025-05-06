import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { z } from 'zod'

import { ControlledButtonProps } from '@/components/button/button.types'

import { formSchema } from './asset-list.scheme'

export const useAssetList = () => {
  const { t } = useTranslation('qna')

  const router = useRouter()

  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      assetList: []
    }
  })

  const onSubmit = useCallback((values: z.infer<typeof formSchema>) => {
    console.log(values)
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
        label: t('submit')
      }
    ],
    []
  )

  return { methods, buttons, onSubmit }
}
