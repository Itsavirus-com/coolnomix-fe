import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { ControlledButtonProps } from '@/components/button/button.types'
import { qnaTypeAcPath, qnaTypeRefrigerationPath } from '@/config/paths'
import { load, updateStoredObject } from '@/utils/storage'

import { formSchema } from './select-equipment-form.scheme'
import { EquipmentType, EquipmentTypeItem } from './select-equipment-form.types'

export const useSelectEquipmentForm = () => {
  const t = useTranslations('qna')

  const router = useRouter()

  const currentEquipmentType = (load('QNA_FORM')?.equipmentType as EquipmentType) || ''

  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      selectEquipmentType: currentEquipmentType
    }
  })

  const equipmentTypes: EquipmentTypeItem[] = useMemo(
    () => [
      { label: t('air_conditioning'), value: 'air-conditioning' },
      { label: t('refrigeration'), value: 'refrigeration' }
    ],
    []
  )

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

  return { equipmentTypes, buttons, methods, onSubmit }
}
