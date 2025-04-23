import camelCase from 'lodash/camelCase'
import mapKeys from 'lodash/mapKeys'
import snakeCase from 'lodash/snakeCase'

import type { KeyValueObj } from './object.types'

export const convertKeyToSnakeCase = (data: any) => mapKeys(data, (__, key) => snakeCase(key))

export const convertKeyToCamelCase = (data: any) => mapKeys(data, (__, key) => camelCase(key))

export const convertToPlainJSObject = (observableObject: any) =>
  JSON.parse(JSON.stringify(observableObject))

export const removeEmptyProperties = (source: KeyValueObj): KeyValueObj => {
  return Object.entries(source).reduce((result, item) => {
    if (item[1]) {
      result[item[0]] = item[1]
    }

    return result
  }, Object.create({}))
}

export const parseStringToOptions = (data: string) => {
  try {
    const parsedOptions = data ? JSON.parse(data) : {}

    return Object.entries(parsedOptions).map(([value, label]) => ({
      label,
      value
    }))
  } catch {
    return []
  }
}

export const isEmpty = (source: KeyValueObj): boolean => !Object.keys(source).length
