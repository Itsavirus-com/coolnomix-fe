import { z } from 'zod'

import { requiredString } from '@/utils/required-string'

export const detailsAcSchema = z.object({
  operatingHoursPerDay: z.string().min(1, requiredString()),
  runningDaysPerWeek: z.string().min(1, requiredString()),
  peekLoadHoursStartTime: z
    .date()
    .nullable()
    .refine((val) => !isNaN(val?.getTime()), {
      message: requiredString()
    }),
  peekLoadHoursEndTime: z
    .date()
    .nullable()
    .refine((val) => !isNaN(val?.getTime()), {
      message: requiredString()
    }),
  btuPerHour: z.string().optional(),
  inputPower: z.string().min(1, requiredString()),
  ratioOutsideToInside: z.string().min(1, requiredString())
})

export const peakLoadTarifSchema = z.array(
  z.object({
    peakLoadTarif: z.string().min(1, requiredString()),
    noPeakLoadTarif: z.string().min(1, requiredString())
  })
)

export const formSchema = z.object({
  detailsAc: z.array(detailsAcSchema),
  peakLoadTarif: peakLoadTarifSchema
})
