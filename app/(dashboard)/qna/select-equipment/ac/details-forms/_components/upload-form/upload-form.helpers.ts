import { QnaAirconDetailsModel } from '@/services/swr/models/qna.types'
import { dataUrlsToFiles } from '@/utils/files'

export const getSavedAcUnit = (aircons: QnaAirconDetailsModel['data']) => {
  const acUnit = aircons?.map((item) => item?.aircon_image?.image?.path) || []

  const files = dataUrlsToFiles(acUnit)
  return files
}
