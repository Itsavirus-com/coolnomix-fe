import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { z } from 'zod'

import { ControlledButtonProps } from '@/components/button/button.types'

import { formSchema } from '../../regrigeration.scheme'

export const useWalkInChillerForm = () => {
  const { t } = useTranslation('qna')

  const router = useRouter()

  // Should be data from backend
  const isSubmitted = false

  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      evaporatorMake: '',
      evaporatorModel: '',
      evaporatorSerialNumber: '',
      condenserMake: '',
      condenserModel: '',
      condenserSerialNumber: '',
      compressorMake: '',
      compressorModel: '',
      tempSetPointCutIn: '',
      tempSetPointCutOut: '',
      differentialTempSetPoint: '',
      systemAbilityToCycleOnOffBasedOnTempSetPoints: '',
      isTheDefrostSystemFunctioning: '',
      areTheTempMetersFunctioning: '',
      serviceFrequency: ''
    }
  })

  const onSubmit = useCallback((values: z.infer<typeof formSchema>) => {
    // Save to local storage
    console.log(values)
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

  return {
    methods,
    buttons,
    isSubmitted,
    onSubmit
  }
}
