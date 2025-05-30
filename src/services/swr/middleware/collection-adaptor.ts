import omit from 'lodash/omit'
import { SWRHook } from 'swr'
import { proxy, snapshot } from 'valtio'

import { mapData } from './collection-mapper'

import type { CollectionAdaptor } from './collection-adaptor.types'

export const collectionAdaptor: CollectionAdaptor = ({
  computeFn,
  collectionName = 'data',
  keyMapping
}) => {
  return (useSWRNext: SWRHook) => {
    return (key, fetcher, config) => {
      const swr = useSWRNext<any>(key, fetcher, config)

      if (swr.data) {
        const mappedData = mapData(swr.data?.data, collectionName, keyMapping)

        const collection = mappedData[collectionName]?.map((item: any) => {
          const state = proxy<any>(item)
          const stateSnapshot = snapshot(state)

          const computed = computeFn && computeFn(state)
          const computedSnapshot = computed ? snapshot(computed) : {}

          return { ...stateSnapshot, ...computedSnapshot }
        })

        return Object.assign({}, swr, {
          data: {
            ...omit(mappedData, collectionName),
            [collectionName]: collection
          }
        })
      }

      return swr
    }
  }
}
