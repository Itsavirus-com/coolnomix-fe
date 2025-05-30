import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'

import { ControlledButtonProps } from '@/components/button/button.types'
import { QNA_FORM_STORAGE_KEY } from '@/config/constant'
import { load, updateStoredObject } from '@/utils/storage'

import { formSchema } from './step-two-form.schema'

export const useStepTwoForm = () => {
  const t = useTranslations('qna')
  const tVal = useTranslations('validation')

  const router = useRouter()

  const isFirstRender = useRef(true)
  const saved = load(QNA_FORM_STORAGE_KEY)

  const schema = formSchema(tVal)
  const methods = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema)
  })

  const { fields: detailsAcFields, append: appendDetailsAc } = useFieldArray({
    control: methods.control,
    name: 'detailsAc'
  })

  const { fields: peakLoadTarifFields, append: appendPeakLoadTarif } = useFieldArray({
    control: methods.control,
    name: 'peakLoadTarif'
  })

  const handleBack = () => router.back()
  const onSubmit = useCallback((values: z.infer<typeof schema>) => {
    updateStoredObject(QNA_FORM_STORAGE_KEY, {
      stepsForm: values.detailsAc.map((item, index: number) => ({
        ...saved?.stepsForm[index],
        detailsAc: item
      })),
      peakLoadTarif: [...values.peakLoadTarif]
    })
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
        label: t('continue')
      }
    ],
    []
  )

  useEffect(() => {
    if (isFirstRender.current && !saved?.stepsForm) {
      isFirstRender.current = false
      saved?.stepsForm?.map(() => appendDetailsAc({}))
    }

    if (isFirstRender.current && !saved?.peakLoadTarif) {
      isFirstRender.current = false
      appendPeakLoadTarif({})
    }

    const timeout = setTimeout(() => {
      if (saved?.stepsForm) {
        methods.reset({
          detailsAc: saved.stepsForm?.map(({ detailsAc }: any) => ({
            ...detailsAc
          })),
          peakLoadTarif: saved?.peakLoadTarif
        })
      }
    }, 300)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return { methods, detailsAcFields, peakLoadTarifFields, buttons, onSubmit }
}
