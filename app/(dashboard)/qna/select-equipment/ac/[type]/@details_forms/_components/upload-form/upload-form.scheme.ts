import { z } from 'zod'

import { requiredString } from '@/utils/required-string'

export const formSchema = z.object({
  acUnit: z.array(z.instanceof(File)).min(1, requiredString())
})
