import { TFunction } from 'next-intl'
import { z } from 'zod'

import { optionalFilesSchema, requiredNumberSchema, requiredStringSchema } from '@/utils/schema'

export const acPhaseTwoSchema = (t: TFunction) =>
  z.array(
    z.object({
      year_of_installation: requiredNumberSchema(t),
      service_frequency: requiredStringSchema(t),
      last_service_date: requiredStringSchema(t),
      existing_room_temp: z
        .number()
        .optional()
        .nullable()
        .transform((val: any) => {
          if (!val) return null
          return val
        }),
      return_air_temp: requiredNumberSchema(t),
      cold_air_temp: requiredNumberSchema(t),
      wifi_availability: requiredStringSchema(t),
      filter_condition: z.union([optionalFilesSchema(), z.string()]).optional().nullable()
    })
  )

export const formSchema = (t: TFunction) =>
  z.object({
    phaseTwo: acPhaseTwoSchema(t)
  })
