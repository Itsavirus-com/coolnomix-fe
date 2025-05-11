import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { ControlledButtonProps } from '@/components/button/button.types'
import { qnaSuccessSubmittedPath } from '@/config/paths'
import { showModal } from '@/stores/modal-store.actions'
import { remove } from '@/utils/storage'

import { formSchema } from './tech-visit.schema'

export const useTechVisitForm = (inPreview: boolean) => {
  const t = useTranslations('qna')
  const tVal = useTranslations('validation')

  const router = useRouter()

  const schema = formSchema(tVal)
  const methods = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      appointmentDate: null,
      appointmentTime: null,
      location: '',
      additionalNotes: ''
    }
  })

  const onSubmit = useCallback((values: z.infer<typeof schema>) => {
    console.log(values)
    router.push(`${qnaSuccessSubmittedPath()}?type=tech-visit`)
    remove('QNA_FORM')
  }, [])

  const handleBack = () => {
    router.back()
  }

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
