import { z } from 'zod'

import { requiredString } from '@/utils/required-string'

export const detailsBrandSchema = z.object({
  brandEquipment: z.string().min(1, requiredString()),
  modelEquipment: z.string().min(1, requiredString()),
  serialNumber: z.string().min(1, requiredString()),
  acType: z.string().min(1, requiredString())
})

export const formSchema = z.object({
  detailsBrand: z.array(detailsBrandSchema)
})
