import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useCallback, useEffect, useMemo } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'

import { qnaAcDetailsPath } from '@/config/paths'
import { useQnaGetAircons } from '@/services/swr/hooks/use-qna-get-aircons'
import { setDetailsBrand } from '@/stores/qna-details-forms.actions'
import { ButtonGroupType } from '@/types/general'

import { getSavedDetailsBrand } from './step-one-form.helpers'
import { formSchema } from './step-one-form.schema'

export const useStepOneForm = () => {
  const t = useTranslations('qna')
  const tVal = useTranslations('validation')

  const router = useRouter()

  const { aircons } = useQnaGetAircons()
  const detailsBrand = getSavedDetailsBrand(aircons)

  const schema = formSchema(tVal)
  const methods = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema)
  })

  const { fields, append, remove } = useFieldArray({
    control: methods.control,
    name: 'details_brand'
  })

  const handleBack = () => router.push(qnaAcDetailsPath({ type: 'details-forms' }))
  const handleAdd = () => append({})
  const handleRemove = (index: number) => remove(index)
  const onSubmit = useCallback((values: z.infer<typeof schema>) => {
    setDetailsBrand(values.details_brand)
  }, [])

  const buttons = useMemo((): ButtonGroupType => {
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
    methods.reset({
      details_brand: detailsBrand
    })
  }, [detailsBrand.length])

  return {
    methods,
    fields,
    buttons,
    handleAdd,
    handleRemove,
    onSubmit
  }
}
