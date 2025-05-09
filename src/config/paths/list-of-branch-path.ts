import { createPath } from './path-utils'

import type { PathGeneratorWithId, PathGeneratorWithParams } from './path.types'

const LIST_OF_BRANCH_PATH = '/list-of-branch'

export const listOfBranchPath: PathGeneratorWithParams = (params) => {
  return createPath(LIST_OF_BRANCH_PATH, params)
}

export const branchDetailedPath: PathGeneratorWithId = (id) => {
  return createPath(LIST_OF_BRANCH_PATH, id)
}
