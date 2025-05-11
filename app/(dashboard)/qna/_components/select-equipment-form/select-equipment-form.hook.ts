import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { ControlledButtonProps } from '@/components/button/button.types'
import { qnaAcPath, qnaRefrigerationPath } from '@/config/paths'
import { updateStoredObject } from '@/utils/storage'

import { formSchema } from './select-equipment-form.schema'
import { EquipmentType, EquipmentTypeItem } from './select-equipment-form.types'

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

  const handleNavigate = (type: EquipmentType) => {
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
    handleNavigate(values.equipmentType as EquipmentType)
    updateStoredObject('QNA_FORM', { equipmentType: values.equipmentType })
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
