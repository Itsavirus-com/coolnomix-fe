import { proxy, snapshot } from 'valtio'

import type { Middleware, SWRHook } from 'swr'

export const modelAdaptor = (computeFn?: (state: any) => any): Middleware => {
  return (useSWRNext: SWRHook) => {
    return (key, fetcher, config) => {
      const swr = useSWRNext(key, fetcher, config)

      if (computeFn && swr.data) {
        const state = proxy<any>(swr.data)
        const computed = computeFn(state)
        const data = { ...snapshot(state), ...snapshot(computed) }

        return Object.assign({}, swr, { data })
      }

      return swr
    }
  }
}
