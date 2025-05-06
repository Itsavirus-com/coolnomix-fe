import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { z } from 'zod'

import { ControlledButtonProps } from '@/components/button/button.types'
import { qnaTypeAcPath, qnaTypeRefrigerationPath } from '@/config/paths/qna-path'
import { load, updateStoredObject } from '@/utils/storage'

import { formSchema } from './equipment.scheme'
import { EquipmentType } from './equipment.types'

export const useEquipment = () => {
  const { t } = useTranslation('qna')

  const router = useRouter()

  const currentEquipmentType = (load('QNA_FORM')?.equipmentType as EquipmentType) || ''

  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      selectEquipmentType: currentEquipmentType
    }
  })

  const handleNavigate = (type: EquipmentType) => {
    switch (type) {
      case 'air-conditioning':
        router.push(qnaTypeAcPath())
        break
      case 'refrigeration':
        router.push(qnaTypeRefrigerationPath())
        break
    }
  }

  const onSubmit = useCallback((values: z.infer<typeof formSchema>) => {
    handleNavigate(values.selectEquipmentType as EquipmentType)
    updateStoredObject('QNA_FORM', { equipmentType: values.selectEquipmentType })
  }, [])

  const handleBack = () => {
    router.back()
    methods.reset()
  }

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

  return { methods, buttons, onSubmit }
}
