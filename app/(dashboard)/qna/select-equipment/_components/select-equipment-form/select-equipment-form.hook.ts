import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useCallback, useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { QNA_FORM_STORAGE_KEY } from '@/config/constant'
import { qnaAcPath, qnaRefrigerationPath } from '@/config/paths'
import { AcEquipmentType, ButtonGroupType } from '@/types/general'
import { load, updateStoredObject } from '@/utils/storage'

import { formSchema } from './select-equipment-form.schema'

import type { EquipmentTypeItem } from './select-equipment-form.types'

export const useSelectEquipmentForm = () => {
  const t = useTranslations('qna')
  const tVal = useTranslations('validation')

  const router = useRouter()

  const schema = formSchema(tVal)
  const methods = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema)
  })

  const equipmentTypes: EquipmentTypeItem[] = useMemo(
    () => [
      { label: t('air_conditioning'), value: 'air-conditioning' },
      { label: t('refrigeration'), value: 'refrigeration' }
    ],
    []
  )

  const handleNavigate = (type: AcEquipmentType) => {
    switch (type) {
      case 'air-conditioning':
        router.push(qnaAcPath())
        break
      case 'refrigeration':
        router.push(qnaRefrigerationPath())
        break
    }
  }

  const handleBack = () => router.back()
  const onSubmit = useCallback((values: z.infer<typeof schema>) => {
    handleNavigate(values.equipmentType as AcEquipmentType)
    updateStoredObject(QNA_FORM_STORAGE_KEY, { equipmentType: values.equipmentType })
  }, [])

  const buttons = useMemo((): ButtonGroupType => {
    return [
      {
        size: 'lg',
        variant: 'cancel',
        label: t('back'),
        onClick: handleBack
      },
      {
        type: 'submit',
        size: 'lg',
        label: t('continue')
      }
    ]
  }, [])

  useEffect(() => {
    const equipmentType = load(QNA_FORM_STORAGE_KEY)?.equipmentType || ''
    methods.reset({
      equipmentType: equipmentType
    })
  }, [])

  return { equipmentTypes, buttons, methods, onSubmit }
}
