import { TFunction } from 'next-intl'
import { z } from 'zod'

import { requiredString } from '@/utils/required-string'
import { requiredStringSchema } from '@/utils/schema'

export const formSchema = (t: TFunction) =>
  z.object({
    email: requiredStringSchema(t),
    password: z
      .string({
        required_error: requiredString(t)
      })
      .min(8)
  })
