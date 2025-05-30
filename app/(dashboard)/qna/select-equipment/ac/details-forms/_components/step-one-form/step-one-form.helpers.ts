import { QnaAirconDetailsModel } from '@/services/swr/models/qna.types'

export const getSavedDetailsBrand = (aircons: QnaAirconDetailsModel['data']) => {
  const hasDetailsBrand = !!aircons?.length

  if (hasDetailsBrand) {
    return aircons.map(({ brand, model, serial_number, type, number_of_same_type }) => ({
      brand,
      model,
      serial_number,
      type,
      number_of_same_type
    }))
  }

  // Create an array with the length of the stepsForm (local storage)
  return Array(aircons.length).fill({})
}
