import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useCallback, useEffect, useMemo } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { useSnapshot } from 'valtio'
import { z } from 'zod'

import { DUMMY_REPORT_DETAIL_ID, QNA_FORM_STORAGE_KEY } from '@/config/constant'
import { qnaAcPath } from '@/config/paths'
import { reportDetailPath } from '@/config/paths/list-of-report-path'
import { qnaApi } from '@/services/api/qna-api'
import { useMutator } from '@/services/swr/hooks/use-mutator'
import { useQnaGetAircons } from '@/services/swr/hooks/use-qna-get-aircons'
import { hideModal, showModal } from '@/stores/modal-store.actions'
import { qnaDetailsFormsStateStore } from '@/stores/qna-details-forms'
import { resetQnaDetailsForms, setPhaseTwo } from '@/stores/qna-details-forms.actions'
import { QnaDetailsFormsStateStore } from '@/stores/qna-details-forms.types'
import { ButtonGroupType } from '@/types/general'
import { delay } from '@/utils/delay'
import { handleGenericError } from '@/utils/error-handler'
import { remove } from '@/utils/storage'

import { getPayload, getSavedPhaseTwo } from './phase-two-form.helpers'
import { formSchema } from './phase-two-form.schema'

export const usePhaseTwoForm = (inPreview: boolean) => {
  const t = useTranslations('qna')
  const tVal = useTranslations('validation')

  const router = useRouter()

  const { aircons, allAirconsCompleted, mutate: mutateAircons } = useQnaGetAircons()
  const { mutateReportDetail } = useMutator()

  const { acPhaseTwo } = useSnapshot(qnaDetailsFormsStateStore).state as QnaDetailsFormsStateStore
  const savedPhaseTwo = getSavedPhaseTwo(acPhaseTwo, inPreview, aircons.length)

  const schema = formSchema(tVal)
  const methods = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema)
  })

  const { fields: phaseTwoFormFields } = useFieldArray({
    control: methods.control,
    name: 'phaseTwo'
  })

  const handleSubmitPhaseTwo = async (values: z.infer<typeof schema>) => {
    const payload = getPayload(values, aircons)
    await qnaApi.updateAcPhaseTwo(payload)
    remove(QNA_FORM_STORAGE_KEY)
    resetQnaDetailsForms()
    mutateAircons()
  }

  const handleProcessReport = async () => {
    showModal({
      title: t('generating_report'),
      message: t('this_may_take_a_few_minutes'),
      align: 'center',
      type: 'loading'
    })
    await mutateReportDetail(DUMMY_REPORT_DETAIL_ID)
    // For testing purpose
    await delay(2000)
    hideModal()
    router.push(reportDetailPath(DUMMY_REPORT_DETAIL_ID))
  }

  const onSubmit = useCallback(
    async (values: z.infer<typeof schema>) => {
      setPhaseTwo(values.phaseTwo)

      if (inPreview) {
        try {
          await handleSubmitPhaseTwo(values)
          await handleProcessReport()
          methods.reset()
        } catch (error: any) {
          handleGenericError(error)
        }
      }
    },
    [inPreview, aircons.length]
  )

  const handleBack = () => {
    if (inPreview) router.back()
    else router.push(qnaAcPath())
  }

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
        disabled: allAirconsCompleted,
        onSubmit
      }
    ]
  }, [inPreview, allAirconsCompleted])

  useEffect(() => {
    if (savedPhaseTwo.length) {
      methods.reset({
        phaseTwo: savedPhaseTwo
      })
    }
  }, [savedPhaseTwo.length])

  return {
    methods,
    phaseTwoFormFields,
    buttons,
    onSubmit
  }
}
