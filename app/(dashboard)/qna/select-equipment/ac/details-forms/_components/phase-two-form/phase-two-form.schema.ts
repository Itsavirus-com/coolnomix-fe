import { TFunction } from 'next-intl'
import { z } from 'zod'

import { requiredString } from '@/utils/required-string'
import { requiredFileSchema } from '@/utils/schema'

export const formSchema = (t: TFunction) =>
  z.object({
    phaseTwo: z.array(
      z.object({
        yearOfInstallation: z.string().min(1, requiredString(t)),
        serviceFrequency: z.string().min(1, requiredString(t)),
        lastServiceDate: z.string().min(1, requiredString(t)),
        roomTemperature: z.string().min(1, requiredString(t)),
        onCoilAirTemprature: z.string().min(1, requiredString(t)),
        offCoilAirTemprature: z.string().min(1, requiredString(t)),
        wifiAvailable: z.string().min(1, requiredString(t)),
        filterCondition: requiredFileSchema(t)
      })
    )
  })
