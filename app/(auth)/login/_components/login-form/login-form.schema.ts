import { TFunction } from 'next-intl'
import { z } from 'zod'

import { requiredString } from '@/utils/required-string'
import { requiredEmailSchema } from '@/utils/schema'

export const formSchema = (t: TFunction) =>
  z.object({
    email: requiredEmailSchema(t),
    password: z
      .string({
        required_error: requiredString(t)
      })
      .min(8)
  })
