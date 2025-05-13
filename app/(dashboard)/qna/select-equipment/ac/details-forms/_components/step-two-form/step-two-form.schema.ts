import { TFunction } from 'next-intl'
import { z } from 'zod'

import { requiredString } from '@/utils/required-string'

export const detailsAcSchema = (t: TFunction) =>
  z.object({
    operatingHoursPerDay: z.string().min(1, requiredString(t)),
    runningDaysPerWeek: z.string().min(1, requiredString(t)),
    peekLoadHoursStartTime: z.string().min(1, requiredString(t)),
    peekLoadHoursEndTime: z.string().min(1, requiredString(t)),
    btuPerHour: z.string().optional(),
    inputPower: z.string().min(1, requiredString(t)),
    ratioOutsideToInside: z.string().min(1, requiredString(t))
  })

export const peakLoadTarifSchema = (t: TFunction) =>
  z.array(
    z.object({
      peakLoadTarif: z.string().min(1, requiredString(t)),
      noPeakLoadTarif: z.string().min(1, requiredString(t))
    })
  )

export const formSchema = (t: TFunction) =>
  z.object({
    detailsAc: z.array(detailsAcSchema(t)),
    peakLoadTarif: peakLoadTarifSchema(t)
  })
