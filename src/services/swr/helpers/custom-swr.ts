import useSWR from 'swr'

import { useTableSearchParams } from '@/components/table/use-table-params'

import type { FetcherParams } from './swr.types'
import type { SWRConfiguration } from 'swr/_internal'

export const useCustomSWR = <T>(params: FetcherParams, options?: SWRConfiguration<T>) => {
  const searchParams = useTableSearchParams()

  if (searchParams) {
    params.path += `?${searchParams}`
  }

  return useSWR<T>(params ? { path: params.path, ...params } : null, options)
}
