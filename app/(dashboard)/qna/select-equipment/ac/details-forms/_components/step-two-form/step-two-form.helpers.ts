import { QnaAirconDetailsModel } from '@/services/swr/models/qna.types'

const defaultPeakLoadTarifLength = 1

export const getSavedDetailsAc = (aircons: QnaAirconDetailsModel['data']) => {
  const hasDetailsAc = aircons[0]?.aircon_operating_details

  if (hasDetailsAc) return aircons.map((item) => item?.aircon_operating_details)
  // Create an array with the length of the stepsForm (local storage)
  return Array(aircons.length).fill({})
}

export const getSavedPeakLoadTarif = (aircons: QnaAirconDetailsModel['data']) => {
  const hasPeakLoadData = aircons[0]?.tariff_low || aircons[0]?.tariff_high

  if (hasPeakLoadData) {
    return [
      {
        tariff_low: aircons[0]?.tariff_low,
        tariff_high: aircons[0]?.tariff_high
      }
    ]
  }
  // Create an array with the length of the peak load tarif
  return Array(defaultPeakLoadTarifLength).fill({})
}
