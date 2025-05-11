import { TFunction } from 'next-intl'
import { z } from 'zod'

import { detailsBrandSchema } from '../step-one-form/step-one-form.schema'
import { detailsAcSchema, peakLoadTarifSchema } from '../step-two-form/step-two-form.schema'

export const formSchema = (t: TFunction) =>
  z.object({
    phaseOne: z.array(
      z.object({
        ...detailsBrandSchema(t).shape,
        ...detailsAcSchema(t).shape
      })
    ),
    peakLoadTarif: peakLoadTarifSchema(t)
  })
