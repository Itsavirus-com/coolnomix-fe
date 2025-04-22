import { useParams } from 'next/navigation'

import { useCustomSWR } from '../helpers/custom-swr'
import { oneHour } from '../helpers/millisecond-intervals'
import { modelAdaptor } from '../middleware/model-adaptor'
import { computeUser } from '../models/user.computed'

import type { UserModel } from '../models/user.types'

export const useUser = () => {
  const { id } = useParams<{ id: string }>()

  const { isLoading, error, mutate, data } = useCustomSWR<UserModel>(id && { path: 'users', id }, {
    suspense: true,
    use: [modelAdaptor(computeUser)],
    dedupingInterval: oneHour
  })

  return { user: data, isLoading, isError: !!error, mutate }
}
