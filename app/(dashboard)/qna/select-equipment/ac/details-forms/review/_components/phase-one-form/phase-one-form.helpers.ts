import { snapshot } from 'valtio'
import { z } from 'zod'

import { QnaAirconDetailsModel } from '@/services/swr/models/qna.types'
import { authStore } from '@/stores/auth-store'
import { getTime } from '@/utils/date'

import { formSchema } from './phase-one-form.schema'

export const getSavedPhaseOne = (aircons: QnaAirconDetailsModel['data']) => {
  return aircons?.map(
    ({
      aircon_image,
      brand,
      model,
      serial_number,
      type,
      number_of_same_type,
      aircon_operating_details
    }) => ({
      ac_unit: aircon_image.image.path,
      brand,
      model,
      serial_number,
      type,
      number_of_same_type,
      ...aircon_operating_details
    })
  )
}

export const getSavedPeakLoadTarif = (aircons: QnaAirconDetailsModel['data']) => {
  return [
    {
      tariff_low: aircons[0]?.tariff_low,
      tariff_high: aircons[0]?.tariff_high
    }
  ]
}

export const getPayload = (values: z.infer<ReturnType<typeof formSchema>>) => {
  const { user } = snapshot(authStore).state

  return {
    aircons: values.phaseOne?.map((item, index) => {
      const { ac_unit, peak_hours_start, peak_hours_end, ...rest } = item

      return {
        client_branch_id: user.id,
        ...(ac_unit && {
          image: {
            base64: ac_unit,
            filename: `File ${index + 1}`,
            content_type: 'image/jpeg'
          }
        }),
        peak_hours_start: getTime(peak_hours_start),
        peak_hours_end: getTime(peak_hours_end),
        ...rest,
        ...values.peakLoadTarif[0]
      }
    })
  }
}
