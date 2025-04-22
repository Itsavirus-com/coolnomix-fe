import omit from 'lodash/omit'
import { proxy, snapshot } from 'valtio'

import type { Middleware, SWRHook } from 'swr'

export const collectionAdaptor = (
  computeFn?: (state: any) => any,
  collectionProp = 'data'
): Middleware => {
  return (useSWRNext: SWRHook) => {
    return (key, fetcher, config) => {
      const swr = useSWRNext<any>(key, fetcher, config)

      if (computeFn && swr.data?.[collectionProp]) {
        const collection = swr.data[collectionProp].map((item: any) => {
          const state = proxy<any>(item)
          const computed = computeFn(state)

          return { ...snapshot(state), ...snapshot(computed) }
        })

        return Object.assign({}, swr, {
          data: {
            ...omit(swr.data, collectionProp),
            [collectionProp]: collection
          }
        })
      }

      return swr
    }
  }
}
