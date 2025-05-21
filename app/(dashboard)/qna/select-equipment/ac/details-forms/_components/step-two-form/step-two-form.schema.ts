import { TFunction } from 'next-intl'
import { z } from 'zod'

import { requiredString } from '@/utils/required-string'

export const detailsAcSchema = (t: TFunction) =>
  z.object({
    operatingHoursPerDay: z
      .string({
        required_error: requiredString(t)
      })
      .refine((val) => Number(val) <= 24, {
        message: t('max_operating_hours_per_day')
      }),
    runningDaysPerWeek: z
      .string({
        required_error: requiredString(t)
      })
      .refine((val) => Number(val) <= 7, {
        message: t('max_running_days_per_week')
      }),
    peekLoadHoursStartTime: z.string({
      required_error: requiredString(t)
    }),
    peekLoadHoursEndTime: z.string({
      required_error: requiredString(t)
    }),
    btuPerHour: z.string().optional(),
    inputPower: z.string({
      required_error: requiredString(t)
    }),
    ratioOutsideToInside: z.string({
      required_error: requiredString(t)
    })
  })

export const peakLoadTarifSchema = (t: TFunction) =>
  z.array(
    z.object({
      peakLoadTarif: z.string({
        required_error: requiredString(t)
      }),
      noPeakLoadTarif: z.string({
        required_error: requiredString(t)
      })
    })
  )

export const formSchema = (t: TFunction) =>
  z.object({
    detailsAc: z.array(detailsAcSchema(t)),
    peakLoadTarif: peakLoadTarifSchema(t)
  })
