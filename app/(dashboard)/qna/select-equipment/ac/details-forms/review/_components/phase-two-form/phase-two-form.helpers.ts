import { z } from 'zod'

import { QnaAirconDetailsModel } from '@/services/swr/models/qna.types'
import { AcPhaseTwoType } from '@/types/general'
import { getDate } from '@/utils/date'
import { dataUrlsToFiles } from '@/utils/files'

import { formSchema } from './phase-two-form.schema'

export const getSavedPhaseTwo = (
  phaseTwo: AcPhaseTwoType,
  inPreview: boolean,
  airconsLength: number
) => {
  if (!phaseTwo.length) return Array(airconsLength).fill({})

  if (inPreview) return phaseTwo

  return phaseTwo.map((item) => {
    if (item.filter_condition) {
      const filterConditionFiles = dataUrlsToFiles([item.filter_condition as unknown as string])

      return {
        ...item,
        filter_condition: filterConditionFiles
      }
    }

    return item
  })
}

export const getPayload = (
  values: z.infer<ReturnType<typeof formSchema>>,
  aircons: QnaAirconDetailsModel['data']
) => {
  return {
    aircons: values.phaseTwo?.map((item, index) => {
      const {
        year_of_installation,
        filter_condition,
        last_service_date,
        wifi_availability,
        ...rest
      } = item

      return {
        aircon_id: aircons[index].id,
        installation_details: {
          ...(filter_condition && {
            image: {
              base64: filter_condition,
              filename: `File ${index + 1}`,
              content_type: 'image/jpeg'
            }
          }),
          last_service_date: getDate(last_service_date),
          wifi_availability: wifi_availability === 'yes',
          year_of_installation: Number(year_of_installation),
          ...rest
        }
      }
    })
  }
}
