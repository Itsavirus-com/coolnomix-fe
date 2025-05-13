import useSWR from 'swr'
import { SWRConfiguration } from 'swr/_internal'

import { FetcherParams } from './swr.types'

export const useCustomSWR = <T>(params: FetcherParams | null, options?: SWRConfiguration<T>) => {
  return useSWR<T>(params ? { path: params.path, ...params } : null, options)
}
