import { TFunction } from 'next-intl'
import { z } from 'zod'

import { requiredString } from '@/utils/required-string'

export const formSchema = (t: TFunction) =>
  z.object({
    evaporatorMake: z.string().min(1, requiredString(t)),
    evaporatorModel: z.string().min(1, requiredString(t)),
    evaporatorSerialNumber: z.string().min(1, requiredString(t)),
    condenserMake: z.string().min(1, requiredString(t)),
    condenserModel: z.string().min(1, requiredString(t)),
    condenserSerialNumber: z.string().min(1, requiredString(t)),
    compressorMake: z.string().min(1, requiredString(t)),
    compressorModel: z.string().min(1, requiredString(t)),
    tempSetPointCutIn: z.string().min(1, requiredString(t)),
    tempSetPointCutOut: z.string().min(1, requiredString(t)),
    differentialTempSetPoint: z.string().min(1, requiredString(t)),
    systemAbilityToCycleOnOffBasedOnTempSetPoints: z.string().min(1, requiredString(t)),
    isTheDefrostSystemFunctioning: z.string().min(1, requiredString(t)),
    areTheTempMetersFunctioning: z.string().min(1, requiredString(t)),
    serviceFrequency: z.string().min(1, requiredString(t))
  })
