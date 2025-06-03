import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useCallback, useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { QNA_FORM_STORAGE_KEY } from '@/config/constant'
import { ButtonGroupType } from '@/types/general'
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

  const handleBack = () => router.back()
  const onSubmit = useCallback((values: z.infer<typeof schema>) => {
    updateStoredObject(QNA_FORM_STORAGE_KEY, { walkInChillerForm: values })
  }, [])

  const buttons = useMemo((): ButtonGroupType => {
    return [
      {
        size: 'lg',
        variant: 'cancel',
        label: t('back'),
        onClick: handleBack
      },
      {
        type: 'submit',
        size: 'lg',
        label: t('continue')
      }
    ]
  }, [])

  useEffect(() => {
    const walkInChillerForm = load(QNA_FORM_STORAGE_KEY)?.walkInChillerForm || {}
    methods.reset(walkInChillerForm)
  }, [])

  return {
    methods,
    buttons,
    isSubmitted,
    onSubmit
  }
}
