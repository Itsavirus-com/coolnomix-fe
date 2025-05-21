import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'

import type { ControlledButtonProps } from '@/components/button/button.types'
import { QNA_FORM_STORAGE_KEY } from '@/config/constant'
import { load, updateStoredObject } from '@/utils/storage'

import { formSchema } from './step-one-form.schema'

export const useStepOneForm = () => {
  const t = useTranslations('qna')
  const tVal = useTranslations('validation')
  const router = useRouter()

  const isFirstRender = useRef(true)
  const saved = load(QNA_FORM_STORAGE_KEY)

  const schema = formSchema(tVal)
  const methods = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema)
  })

  const { fields, append, remove } = useFieldArray({
    control: methods.control,
    name: 'detailsBrand'
  })

  const handleBack = () => router.back()
  const handleAdd = () => append({})
  const handleRemove = (index: number) => {
    remove(index)
  }
  const onSubmit = useCallback((values: z.infer<typeof schema>) => {
    updateStoredObject(QNA_FORM_STORAGE_KEY, {
      stepsForm: values.detailsBrand.map((item, index: number) => ({
        ...saved?.stepsForm[index],
        detailsBrand: item
      }))
    })
  }, [])

  const buttons: [ControlledButtonProps, ControlledButtonProps] = useMemo(() => {
    return [
      {
        size: 'lg',
        variant: 'secondary',
        label: t('back'),
        onClick: handleBack
      },
      {
        type: 'submit',
        size: 'lg',
        label: t('continue'),
        disabled: fields.length === 0
      }
    ]
  }, [fields.length])

  useEffect(() => {
    if (isFirstRender.current && !saved?.stepsForm) {
      isFirstRender.current = false
      saved?.stepsForm?.map(() => append({}))
    }

    const timeout = setTimeout(() => {
      if (saved?.stepsForm) {
        methods.reset({
          detailsBrand: saved.stepsForm?.map(({ detailsBrand }: any) => ({
            ...detailsBrand
          }))
        })
      }
    }, 300)

    return () => clearTimeout(timeout)
  }, [])

  return {
    methods,
    fields,
    buttons,
    handleAdd,
    handleRemove,
    onSubmit
  }
}
