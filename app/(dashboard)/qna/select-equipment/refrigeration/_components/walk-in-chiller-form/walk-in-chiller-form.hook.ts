import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { ControlledButtonProps } from '@/components/button/button.types'

import { formSchema } from '../../regrigeration.schema'

export const useWalkInChillerForm = () => {
  const t = useTranslations('qna')
  const tVal = useTranslations('validation')

  const router = useRouter()

  // Should be data from backend
  const isSubmitted = false

  const schema = formSchema(tVal)
  const methods = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
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

  const onSubmit = useCallback((values: z.infer<typeof schema>) => {
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
