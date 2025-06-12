import { createPath } from './path-utils'

import type { PathGenerator, PathGeneratorWithId } from './path.types'

const USER_MANAGEMENT_PATH = '/user-management'

export const userManagementPath: PathGenerator = () => {
  return createPath(USER_MANAGEMENT_PATH)
}

export const userManagementAddPath: PathGenerator = () => {
  return createPath(USER_MANAGEMENT_PATH, {
    suffix: 'add'
  })
}

export const userManagementEditPath: PathGeneratorWithId = (id) => {
  return createPath(`${USER_MANAGEMENT_PATH}/edit`, id)
}

export const userManagementSuccessPath: PathGenerator = () => {
  return createPath(USER_MANAGEMENT_PATH, {
    suffix: 'success'
  })
}
