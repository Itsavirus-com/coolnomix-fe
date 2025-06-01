import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useCallback, useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { QNA_FORM_STORAGE_KEY } from '@/config/constant'
import { qnaRefrigerationPath } from '@/config/paths'
import { ButtonGroupType } from '@/types/general'
import { load, updateStoredObject } from '@/utils/storage'

import { formSchema } from '../../regrigeration.schema'

export const useWalkInFreezerForm = (inPreview: boolean) => {
  const t = useTranslations('qna')
  const tVal = useTranslations('validation')

  const router = useRouter()

  // Should be data from backend
  const isSubmitted = false

  const schema = formSchema(tVal)
  const methods = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema)
  })

  const handleEdit = () => router.push(qnaRefrigerationPath())
  const handleBack = () => router.back()
  const onSubmit = useCallback((values: z.infer<typeof schema>) => {
    updateStoredObject(QNA_FORM_STORAGE_KEY, { walkInFreezerForm: values })
  }, [])

  const buttons = useMemo((): ButtonGroupType => {
    return [
      {
        size: 'lg',
        variant: 'cancel',
        label: inPreview ? t('edit') : t('back'),
        onClick: inPreview ? handleEdit : handleBack
      },
      {
        type: 'submit',
        size: 'lg',
        label: inPreview ? t('submit') : t('preview'),
        disabled: isSubmitted
      }
    ]
  }, [inPreview, isSubmitted])

  useEffect(() => {
    const walkInFreezerForm = load(QNA_FORM_STORAGE_KEY)?.walkInFreezerForm || {}
    methods.reset(walkInFreezerForm)
  }, [])

  return {
    methods,
    buttons,
    isSubmitted,
    onSubmit
  }
}
