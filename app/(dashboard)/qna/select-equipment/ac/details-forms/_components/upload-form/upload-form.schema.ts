import { z } from 'node_modules/zod/lib'

import { optionalFilesSchema } from '@/utils/schema'

export const formSchema = () =>
  z.object({
    ac_unit: optionalFilesSchema()
  })
