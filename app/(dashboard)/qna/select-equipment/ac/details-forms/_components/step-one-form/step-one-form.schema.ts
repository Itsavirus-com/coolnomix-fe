import { TFunction } from 'next-intl'
import { z } from 'zod'

import { requiredString } from '@/utils/required-string'
import { fileSchema } from '@/utils/schema'

export const detailsBrandSchema = (t: TFunction) =>
  z.object({
    ac_unit: z.union([fileSchema(), z.string()]).optional().nullable(),
    brand: z
      .string({
        required_error: requiredString(t)
      })
      .min(1, requiredString(t)),
    model: z
      .string({
        required_error: requiredString(t)
      })
      .min(1, requiredString(t)),
    serial_number: z
      .string({
        required_error: requiredString(t)
      })
      .min(1, requiredString(t)),
    type: z
      .string({
        required_error: requiredString(t)
      })
      .min(1, requiredString(t)),
    number_of_same_type: z
      .number({
        required_error: requiredString(t)
      })
      .refine((val) => Number(val) >= 1, {
        message: t('minimum_input_is_1')
      })
  })

export const formSchema = (t: TFunction) =>
  z.object({
    details_brand: z.array(detailsBrandSchema(t))
  })
