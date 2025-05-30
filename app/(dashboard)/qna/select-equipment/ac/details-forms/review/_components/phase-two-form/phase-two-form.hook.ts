import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'

import { ControlledButtonProps } from '@/components/button/button.types'
import { QNA_FORM_STORAGE_KEY } from '@/config/constant'
import { qnaAcPath } from '@/config/paths'
import { load, remove, updateStoredObject } from '@/utils/storage'

import { formSchema } from './phase-two-form.schema'

export const usePhaseTwoForm = (inPreview: boolean) => {
  const t = useTranslations('qna')
  const tVal = useTranslations('validation')

  const router = useRouter()

  const isFirstRender = useRef(true)
  const saved = load(QNA_FORM_STORAGE_KEY)

  // Should be data from backend
  const isSubmitted = false

  const schema = formSchema(tVal)
  const methods = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema)
  })

  const { fields: phaseTwoFormFields, append } = useFieldArray({
    control: methods.control,
    name: 'phaseTwo'
  })

  const handleBack = () => {
    if (inPreview) router.back()
    else router.push(qnaAcPath())
  }
  const onSubmit = useCallback(
    async (values: z.infer<typeof schema>) => {
      updateStoredObject(QNA_FORM_STORAGE_KEY, values)
      if (inPreview) {
        remove(QNA_FORM_STORAGE_KEY)
      }
    },
    [inPreview]
  )

  const buttons: [ControlledButtonProps, ControlledButtonProps] = useMemo(
    () => [
      {
        size: 'lg',
        variant: 'secondary',
        label: inPreview ? t('edit') : t('back'),
        onClick: handleBack
      },
      {
        type: 'submit',
        size: 'lg',
        label: inPreview ? t('submit') : t('preview'),
        disabled: isSubmitted
      }
    ],
    [inPreview]
  )

  useEffect(() => {
    if (isFirstRender.current && !saved?.phaseTwo) {
      isFirstRender.current = false
      append({})
    }

    const timeout = setTimeout(() => {
      if (saved?.phaseTwo) {
        methods.reset({
          phaseTwo: saved.phaseTwo
        })
      }
    }, 300)

    return () => clearTimeout(timeout)
  }, [])

  return {
    methods,
    phaseTwoFormFields,
    buttons,
    isSubmitted,
    onSubmit
  }
}
