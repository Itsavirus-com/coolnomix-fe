import { swrApi } from '@/services/api/swr-api'

import type { FetcherParams } from './helpers/swr.types'

export const fetcher = async (args: FetcherParams) => {
  const path = [args.path, args.id].filter(Boolean).join('/')

  try {
    const { ok, data } = await swrApi.fetch(path, args.params)

    if (ok) {
      return data
    }
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error}`)
  }
}
