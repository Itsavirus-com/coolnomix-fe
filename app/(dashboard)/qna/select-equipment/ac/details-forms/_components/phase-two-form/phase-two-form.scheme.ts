import { z } from 'zod'

import { requiredString } from '@/utils/required-string'

export const formSchema = z.object({
  detailsForm: z.array(
    z.object({
      yearOfInstallation: z.string().min(1, requiredString()),
      serviceFrequency: z.string().min(1, requiredString()),
      lastServiceDate: z.string().min(1, requiredString()),
      roomTemperature: z.string().min(1, requiredString()),
      onCoilAirTemprature: z.string().min(1, requiredString()),
      offCoilAirTemprature: z.string().min(1, requiredString()),
      wifiAvailable: z.string().min(1, requiredString()),
      filterCondition: z.array(z.instanceof(File)).min(1, requiredString())
    })
  )
})
