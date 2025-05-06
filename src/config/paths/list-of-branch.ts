import { createPath } from './path-utils'

import type { PathGeneratorWithParams } from './path.types'

const LIST_OF_BRANCH_PATH = '/list-of-branch'

export const listOfBranchPath: PathGeneratorWithParams = (params) => {
  return createPath(LIST_OF_BRANCH_PATH, params)
}
