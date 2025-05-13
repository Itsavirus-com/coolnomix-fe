import { TFunction } from 'next-intl'
import { z } from 'node_modules/zod/lib'

import { requiredFileSchema } from '@/utils/schema'

export const formSchema = (t: TFunction) =>
  z.object({
    acUnit: requiredFileSchema(t)
  })
