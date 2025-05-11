import { createPath } from './path-utils'

import type { PathGenerator } from './path.types'

const RESET_PASSWORD_PATH = '/reset-password'

export const resetPasswordPath: PathGenerator = () => {
  return createPath(RESET_PASSWORD_PATH)
}
