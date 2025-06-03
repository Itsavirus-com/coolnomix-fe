import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useCallback, useEffect, useMemo } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { useSnapshot } from 'valtio'
import { z } from 'zod'

import { QNA_FORM_STORAGE_KEY } from '@/config/constant'
import { qnaAcPath } from '@/config/paths'
import { reportDetailPath } from '@/config/paths/list-of-report-path'
import { qnaApi } from '@/services/api/qna-api'
import { useQnaGetAircons } from '@/services/swr/hooks/use-qna-get-aircons'
import { hideModal, showModal } from '@/stores/modal-store.actions'
import { qnaDetailsFormsStateStore } from '@/stores/qna-details-forms'
import { resetQnaDetailsForms, setPhaseTwo } from '@/stores/qna-details-forms.actions'
import { QnaDetailsFormsStateStore } from '@/stores/qna-details-forms.types'
import { ButtonGroupType } from '@/types/general'
import { handleGenericError } from '@/utils/error-handler'
import { remove } from '@/utils/storage'

import { getPayload, getSavedPhaseTwo } from './phase-two-form.helpers'
import { formSchema } from './phase-two-form.schema'

export const usePhaseTwoForm = (inPreview: boolean) => {
  const t = useTranslations('qna')
  const tVal = useTranslations('validation')

  const router = useRouter()

  const { aircons, mutate } = useQnaGetAircons()
  const { acPhaseTwo } = useSnapshot(qnaDetailsFormsStateStore).state as QnaDetailsFormsStateStore
  const savedPhaseTwo = getSavedPhaseTwo(acPhaseTwo, inPreview, aircons.length)

  // Should be data from backend
  const isSubmitted = false

  const schema = formSchema(tVal)
  const methods = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema)
  })

  const { fields: phaseTwoFormFields } = useFieldArray({
    control: methods.control,
    name: 'phaseTwo'
  })

  const handleBack = () => {
    if (inPreview) router.back()
    else router.push(qnaAcPath())
  }

  const onSubmit = useCallback(
    async (values: z.infer<typeof schema>) => {
      setPhaseTwo(values.phaseTwo)

      if (inPreview) {
        try {
          const payload = getPayload(values, aircons)
          await qnaApi.updateAcPhaseTwo(payload)
          remove(QNA_FORM_STORAGE_KEY)
          resetQnaDetailsForms()
          mutate()
          showModal({
            title: t('generating_report'),
            message: t('this_may_take_a_few_minutes'),
            align: 'center',
            type: 'loading'
          })
          // Remove this setTimout and use the api response to show the modal,
          // because for now is to show the modal for client
          setTimeout(() => {
            hideModal()
            methods.reset()
            router.push(reportDetailPath('1'))
          }, 1000)
        } catch (error: any) {
          handleGenericError(error)
        }
      }
    },
    [inPreview, aircons.length]
  )

  const buttons = useMemo((): ButtonGroupType => {
    return [
      {
        size: 'lg',
        variant: 'cancel',
        label: inPreview ? t('edit') : t('back'),
        onClick: handleBack
      },
      {
        type: 'submit',
        size: 'lg',
        label: inPreview ? t('submit') : t('preview'),
        disabled: isSubmitted,
        onSubmit
      }
    ]
  }, [inPreview, isSubmitted])

  useEffect(() => {
    if (savedPhaseTwo.length) {
      methods.reset({
        phaseTwo: savedPhaseTwo
      })
    }
  }, [savedPhaseTwo.length, methods])

  return {
    methods,
    phaseTwoFormFields,
    buttons,
    isSubmitted,
    onSubmit
  }
}
