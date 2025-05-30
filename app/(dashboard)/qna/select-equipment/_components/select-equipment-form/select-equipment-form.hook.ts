import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import type { ControlledButtonProps } from '@/components/button/button.types'
import { QNA_FORM_STORAGE_KEY } from '@/config/constant'
import { qnaAcPath, qnaRefrigerationPath } from '@/config/paths'
import { AcEquipmentType } from '@/types/general'
import { load, updateStoredObject } from '@/utils/storage'

import { formSchema } from './select-equipment-form.schema'

import type { EquipmentTypeItem } from './select-equipment-form.types'

export const useSelectEquipmentForm = () => {
  const t = useTranslations('qna')
  const tVal = useTranslations('validation')

  const router = useRouter()

  const currentEquipmentType = load(QNA_FORM_STORAGE_KEY)?.equipmentType || ''

  const schema = formSchema(tVal)
  const methods = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      equipmentType: currentEquipmentType
    }
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

  const onSubmit = useCallback((values: z.infer<typeof schema>) => {
    handleNavigate(values.equipmentType as AcEquipmentType)
    updateStoredObject(QNA_FORM_STORAGE_KEY, { equipmentType: values.equipmentType })
  }, [])

  const handleBack = () => {
    router.back()
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
