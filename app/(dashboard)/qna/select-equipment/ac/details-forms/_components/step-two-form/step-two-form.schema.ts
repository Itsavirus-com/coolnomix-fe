import { TFunction } from 'next-intl'
import { z } from 'zod'

import { requiredString } from '@/utils/required-string'

export const detailsAcSchema = (t: TFunction) =>
  z.object({
    daily_operating_hours: z
      .number({
        required_error: requiredString(t)
      })
      .refine((val) => Number(val) >= 1 && Number(val) <= 24, {
        message: t('max_operating_hours_per_day')
      }),
    days_operating_per_week: z
      .number({
        required_error: requiredString(t)
      })
      .refine((val) => Number(val) >= 1 && Number(val) <= 7, {
        message: t('max_running_days_per_week')
      }),
    peak_hours_start: z.string({
      required_error: requiredString(t)
    }),
    peak_hours_end: z.string({
      required_error: requiredString(t)
    }),
    hourly_btu: z
      .number()
      .optional()
      .nullable()
      .transform((val: any) => {
        if (!val) return null
        return val
      }),
    input_power_kw: z
      .number({
        required_error: requiredString(t)
      })
      .refine((val) => Number(val) >= 1, {
        message: t('minimum_input_is_1')
      }),
    ratio: z.string({
      required_error: requiredString(t)
    })
  })

export const peakLoadTarifSchema = (t: TFunction) =>
  z.array(
    z.object({
      tariff_low: z.number({
        required_error: requiredString(t)
      }),
      tariff_high: z.number({
        required_error: requiredString(t)
      })
    })
  )

export const formSchema = (t: TFunction) =>
  z.object({
    details_ac: z.array(detailsAcSchema(t)),
    peak_load_tarif: peakLoadTarifSchema(t)
  })
