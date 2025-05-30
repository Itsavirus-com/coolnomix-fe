import { TFunction } from 'next-intl'
import { z } from 'zod'

import { requiredStringSchema } from '@/utils/schema'

export const formSchema = (t: TFunction) =>
  z.object({
    appointment_date: requiredStringSchema(t),
    appointment_time: requiredStringSchema(t),
    location: requiredStringSchema(t),
    additional_notes: z.string().optional()
  })
