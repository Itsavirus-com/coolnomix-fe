import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { ControlledButtonProps } from '@/components/button/button.types'
import { qnaSuccessPath } from '@/config/paths'
import { qnaApi } from '@/services/api/qna-api'
import { modalStore } from '@/stores/modal-store'
import { showModal } from '@/stores/modal-store.actions'
import { getDate, getTime } from '@/utils/date'
import { handleGenericError } from '@/utils/error-handler'

import { formSchema } from './tech-visit.schema'

export const useTechVisitForm = (inPreview: boolean) => {
  const t = useTranslations('qna')
  const tVal = useTranslations('validation')

  const router = useRouter()

  const schema = formSchema(tVal)
  const methods = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema)
  })

  const handleBack = () => {
    router.back()
  }
  const onSubmit = useCallback(async (values: z.infer<typeof schema>) => {
    try {
      modalStore.isLoading = true
      await qnaApi.requestTechVisit({
        ...values,
        appointment_date: getDate(values.appointment_date),
        appointment_time: getTime(values.appointment_time)
      })
      router.push(`${qnaSuccessPath()}?type=tech-visit`)
    } catch (error: any) {
      handleGenericError(error)
    } finally {
      modalStore.isLoading = false
    }
  }, [])

  const handleShowModal = (values: z.infer<typeof schema>) => {
    showModal({
      title: t('are_you_sure_you_want_to_book_a_technician'),
      message: t('please_confirm_that_the_appointment_details_youve_entered_are_correct'),
      confirmLabel: t('yes_book_now'),
      align: 'center',
      onConfirm: () => onSubmit(values)
    })
  }

  const buttons: [ControlledButtonProps, ControlledButtonProps] = useMemo(
    () => [
      {
        size: 'lg',
        variant: 'secondary',
        label: t('cancel'),
        onClick: handleBack
      },
      {
        type: 'submit',
        size: 'lg',
        label: t('book_technician'),
        disabled: inPreview
      }
    ],
    [inPreview]
  )

  return { methods, buttons, handleShowModal }
}
