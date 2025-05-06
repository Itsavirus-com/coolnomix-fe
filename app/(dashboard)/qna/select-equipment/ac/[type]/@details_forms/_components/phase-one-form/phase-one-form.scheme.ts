import { z } from 'zod'

import { detailsBrandSchema } from '../step-one-form/step-one-form.scheme'
import { detailsAcSchema, peakLoadTarifSchema } from '../step-two-form/step-two-form.scheme'

export const formSchema = z.object({
  detailsForm: z.array(
    z.object({
      ...detailsBrandSchema.shape,
      ...detailsAcSchema.shape
    })
  ),
  peakLoadTarif: peakLoadTarifSchema
})
