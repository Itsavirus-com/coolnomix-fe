import { z } from 'zod'

import { requiredString } from '@/utils/required-string'

export const formSchema = z.object({
  appointmentDate: z
    .date()
    .nullable()
    .refine((val) => !isNaN(val?.getTime()), {
      message: requiredString()
    }),
  appointmentTime: z
    .date()
    .nullable()
    .refine((val) => !isNaN(val?.getTime()), {
      message: requiredString()
    }),
  location: z.string().min(1, {
    message: requiredString()
  }),
  additionalNotes: z.string().optional()
})
