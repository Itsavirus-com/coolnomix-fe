import { z } from 'zod'

import { requiredString } from '@/utils/required-string'

export const formSchema = z.object({
  evaporatorMake: z.string().min(1, requiredString()),
  evaporatorModel: z.string().min(1, requiredString()),
  evaporatorSerialNumber: z.string().min(1, requiredString()),
  condenserMake: z.string().min(1, requiredString()),
  condenserModel: z.string().min(1, requiredString()),
  condenserSerialNumber: z.string().min(1, requiredString()),
  compressorMake: z.string().min(1, requiredString()),
  compressorModel: z.string().min(1, requiredString()),
  tempSetPointCutIn: z.string().min(1, requiredString()),
  tempSetPointCutOut: z.string().min(1, requiredString()),
  differentialTempSetPoint: z.string().min(1, requiredString()),
  systemAbilityToCycleOnOffBasedOnTempSetPoints: z.string().min(1, requiredString()),
  isTheDefrostSystemFunctioning: z.string().min(1, requiredString()),
  areTheTempMetersFunctioning: z.string().min(1, requiredString()),
  serviceFrequency: z.string().min(1, requiredString())
})
