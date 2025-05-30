import { TFunction } from 'next-intl'
import { z } from 'zod'

import { requiredStringSchema } from '@/utils/schema'

export const formSchema = (t: TFunction) =>
  z.object({
    groupName: requiredStringSchema(t)
  })
