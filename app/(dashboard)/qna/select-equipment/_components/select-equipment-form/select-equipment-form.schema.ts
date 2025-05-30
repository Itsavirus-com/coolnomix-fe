import { TFunction } from 'next-intl'
import { z } from 'zod'

import { requiredString } from '@/utils/required-string'

export const formSchema = (t: TFunction) =>
  z.object({
    equipmentType: z.string().min(1, requiredString(t))
  })
