import { TFunction } from 'next-intl'
import { z } from 'zod'

import { requiredEmailSchema, requiredStringSchema } from '@/utils/schema'

export const formSchema = (t: TFunction) =>
  z.object({
    name: requiredStringSchema(t),
    email: requiredEmailSchema(t)
  })
