import { z } from 'zod'

import { requiredString } from '@/utils/required-string'

export const formSchema = z.object({
  selectEquipmentType: z.string().min(1, requiredString())
})
