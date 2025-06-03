import { useSnapshot } from 'valtio'

import { authStore } from '@/stores/auth-store'
import { qnaDetailsFormsStateStore } from '@/stores/qna-details-forms'
import { QnaDetailsFormsStateStore } from '@/stores/qna-details-forms.types'

import { useCustomSWR } from '../helpers/custom-swr'
import { QnaAirconDetailsModel } from '../models/qna.types'
import { getAirconsLocalData } from './helpers/get-aircons-local-data'
import { oneHour } from '../helpers/millisecond-intervals'

export const useQnaGetAircons = () => {
  const formsState = useSnapshot(qnaDetailsFormsStateStore).state as QnaDetailsFormsStateStore
  const { user } = useSnapshot(authStore).state

  const localData = getAirconsLocalData(formsState)

  const { isLoading, error, data, isValidating, mutate } = useCustomSWR<QnaAirconDetailsModel>(
    {
      path: `aircons/client-branch/${user.id}`
    },
    {
      dedupingInterval: oneHour,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      fallbackData: localData,
      revalidateOnMount: !localData?.data?.length
    }
  )

  const hasApprovedAircons = data?.data?.some((aircon) => aircon.status === 'phase_1') ?? false
  const allAirconsCompleted = data?.data?.every((aircon) => aircon.status === 'phase_2') ?? false

  // Return local data if all aircons are completed, otherwise filter out completed ones
  const getFilteredAircons = () => {
    if (allAirconsCompleted) return localData
    if (!isValidating && !data?.data?.length) return localData

    return {
      data: data?.data?.filter((aircon) => aircon.status !== 'phase_2') ?? []
    }
  }

  return {
    aircons: getFilteredAircons()?.data,
    hasApprovedAircons,
    isLoading,
    isError: !!error,
    mutate
  }
}
