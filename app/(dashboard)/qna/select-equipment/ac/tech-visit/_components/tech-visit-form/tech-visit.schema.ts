import { TFunction } from 'next-intl'
import { z } from 'zod'

import { requiredStringSchema } from '@/utils/schema'

export const formSchema = (t: TFunction) =>
  z.object({
    appointmentDate: requiredStringSchema(t),
    appointmentTime: requiredStringSchema(t),
    location: requiredStringSchema(t),
    additionalNotes: z.string().optional()
  })
