import { TFunction } from 'next-intl'
import { z } from 'zod'

import { requiredString } from '@/utils/required-string'

export const detailsBrandSchema = (t: TFunction) =>
  z.object({
    brandEquipment: z.string().min(1, requiredString(t)),
    modelEquipment: z.string().min(1, requiredString(t)),
    serialNumber: z.string().min(1, requiredString(t)),
    acType: z.string().min(1, requiredString(t))
  })

export const formSchema = (t: TFunction) =>
  z.object({
    detailsBrand: z.array(detailsBrandSchema(t))
  })
