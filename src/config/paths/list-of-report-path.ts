import { createPath } from './path-utils'

import type { PathGenerator, PathGeneratorWithId } from './path.types'

const LIST_OF_REPORT_PATH = '/list-of-report'

export const reportListPath: PathGenerator = () => {
  return createPath(LIST_OF_REPORT_PATH)
}

export const reportDetailPath: PathGeneratorWithId = (id) => {
  return createPath(LIST_OF_REPORT_PATH, id)
}
