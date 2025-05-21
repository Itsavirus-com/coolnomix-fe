import { TFunction } from 'next-intl'
import { z } from 'zod'

import { requiredString } from '@/utils/required-string'
import { fileSchema } from '@/utils/schema'

export const detailsBrandSchema = (t: TFunction) =>
  z.object({
    acUnit: fileSchema.optional(),
    brandEquipment: z
      .string({
        required_error: requiredString(t)
      })
      .min(1, requiredString(t)),
    modelEquipment: z
      .string({
        required_error: requiredString(t)
      })
      .min(1, requiredString(t)),
    serialNumber: z
      .string({
        required_error: requiredString(t)
      })
      .min(1, requiredString(t)),
    acType: z
      .string({
        required_error: requiredString(t)
      })
      .min(1, requiredString(t)),
    numberOfSameType: z
      .string({
        required_error: requiredString(t)
      })
      .min(1, requiredString(t))
  })

export const formSchema = (t: TFunction) =>
  z.object({
    detailsBrand: z.array(detailsBrandSchema(t))
  })
