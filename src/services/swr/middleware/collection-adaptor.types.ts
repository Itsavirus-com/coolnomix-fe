import { Middleware } from 'swr'

import type { AnyObject } from './model-adaptor.types'

export type Collection<K extends string, T extends AnyObject> = {
  [key in K]: T[]
} & {
  currentPage: number
  totalPages: number
  totalData: number
}

type CollectionAdaptorParams<Model> = {
  computeFn?: (state: Model) => Model & any
  collectionName?: string
  keyMapping?: Record<string, any>
}

export type CollectionAdaptor = <Model extends AnyObject>(
  params: CollectionAdaptorParams<Model>
) => Middleware
