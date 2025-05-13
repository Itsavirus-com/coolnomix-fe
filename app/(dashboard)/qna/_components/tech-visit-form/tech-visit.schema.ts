import { TFunction } from 'next-intl'
import { z } from 'zod'

import { requiredString } from '@/utils/required-string'

export const formSchema = (t: TFunction) =>
  z.object({
    appointmentDate: z
      .date()
      .nullable()
      .refine((val) => !isNaN(val?.getTime()), {
        message: requiredString(t)
      }),
    appointmentTime: z
      .date()
      .nullable()
      .refine((val) => !isNaN(val?.getTime()), {
        message: requiredString(t)
      }),
    location: z.string().min(1, {
      message: requiredString(t)
    }),
    additionalNotes: z.string().optional()
  })
