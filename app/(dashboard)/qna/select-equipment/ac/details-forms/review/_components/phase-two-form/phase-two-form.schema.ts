import { TFunction } from 'next-intl'
import { z } from 'zod'

import { optionalFilesSchema, requiredStringSchema } from '@/utils/schema'

export const formSchema = (t: TFunction) =>
  z.object({
    phaseTwo: z.array(
      z.object({
        yearOfInstallation: requiredStringSchema(t),
        serviceFrequency: requiredStringSchema(t),
        lastServiceDate: requiredStringSchema(t),
        roomTemperature: requiredStringSchema(t),
        onCoilAirTemprature: requiredStringSchema(t),
        offCoilAirTemprature: requiredStringSchema(t),
        wifiAvailable: requiredStringSchema(t),
        filterCondition: optionalFilesSchema()
      })
    )
  })
