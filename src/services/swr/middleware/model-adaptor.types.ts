import { Middleware } from 'swr'

export type AnyObject = Record<string, any>

export type Model<T extends AnyObject> = {
  data: T[]
}

export type ModelDetail<T extends AnyObject> = {
  data: T
}

export type ModelAdaptor = <Model extends AnyObject>(
  computeFn?: (state: Model) => Model & any,
  dataPrefix?: string
) => Middleware
