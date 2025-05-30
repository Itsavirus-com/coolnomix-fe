import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useCallback, useEffect, useMemo } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'

import { ControlledButtonProps } from '@/components/button/button.types'
import { qnaAcDetailsPath } from '@/config/paths'
import { useQnaGetAircons } from '@/services/swr/hooks/use-qna-get-aircons'
import { setDetailsAc } from '@/stores/qna-details-forms.actions'

import { getSavedDetailsAc, getSavedPeakLoadTarif } from './step-two-form.helpers'
import { formSchema } from './step-two-form.schema'

export const useStepTwoForm = () => {
  const t = useTranslations('qna')
  const tVal = useTranslations('validation')

  const router = useRouter()

  const { aircons } = useQnaGetAircons()
  const savedDetailsAc = getSavedDetailsAc(aircons)
  const savedPeakLoadTarif = getSavedPeakLoadTarif(aircons)

  const schema = formSchema(tVal)
  const methods = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema)
  })

  const { fields: detailsAcFields } = useFieldArray({
    control: methods.control,
    name: 'details_ac'
  })

  const { fields: peakLoadTarifFields } = useFieldArray({
    control: methods.control,
    name: 'peak_load_tarif'
  })

  const handleBack = () => {
    router.push(`${qnaAcDetailsPath({ type: 'details-forms' })}?step=details-form`)
  }

  const onSubmit = useCallback((values: z.infer<typeof schema>) => {
    setDetailsAc(values.details_ac, values.peak_load_tarif)
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
    methods.reset({
      details_ac: savedDetailsAc,
      peak_load_tarif: savedPeakLoadTarif
    })
  }, [savedDetailsAc.length, savedPeakLoadTarif.length])

  return { methods, detailsAcFields, peakLoadTarifFields, buttons, onSubmit }
}
