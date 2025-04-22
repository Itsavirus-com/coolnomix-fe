// Example for creating path

import { createPath } from './path-utils'

import type { PathGenerator, PathGeneratorWithId, PathGeneratorWithParams } from './path.types'

const USER_PATH = '/users'

export const userPath: PathGeneratorWithParams = (params) => {
  return createPath(USER_PATH, params)
}

export const userNewPath: PathGenerator = () => {
  return createPath(USER_PATH, { suffix: 'new' })
}

export const userEditPath: PathGeneratorWithId = (id) => {
  return createPath(`${USER_PATH}/edit`, id)
}
