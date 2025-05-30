import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useCallback, useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { ControlledButtonProps } from '@/components/button/button.types'
import { QNA_FORM_STORAGE_KEY } from '@/config/constant'
import { load, updateStoredObject } from '@/utils/storage'

import { formSchema } from '../../regrigeration.schema'

export const useWalkInChillerForm = () => {
  const t = useTranslations('qna')
  const tVal = useTranslations('validation')

  const router = useRouter()

  // Should be data from backend
  const isSubmitted = false

  const schema = formSchema(tVal)
  const methods = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema)
  })

  const onSubmit = useCallback((values: z.infer<typeof schema>) => {
    updateStoredObject(QNA_FORM_STORAGE_KEY, { walkInChillerForm: values })
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
    const saved = load(QNA_FORM_STORAGE_KEY)

    const timeout = setTimeout(() => {
      methods.reset(saved?.walkInChillerForm)
    }, 300)

    return () => clearTimeout(timeout)
  }, [])

  return {
    methods,
    buttons,
    isSubmitted,
    onSubmit
  }
}
