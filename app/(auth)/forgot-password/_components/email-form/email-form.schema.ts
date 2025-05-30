import { TFunction } from 'next-intl'
import { z } from 'zod'

import { requiredEmailSchema } from '@/utils/schema'

export const formSchema = (t: TFunction) =>
  z.object({
    email: requiredEmailSchema(t)
  })
