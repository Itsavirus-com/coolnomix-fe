import { TFunction } from 'next-intl'
import { z } from 'zod'

import { requiredFilesSchema } from '@/utils/schema'

export const formSchema = (t: TFunction) =>
  z.object({
    assetList: requiredFilesSchema(t)
  })
