import { createPath } from './path-utils'

import type { PathGenerator } from './path.types'

const LOGIN_PATH = '/login'
const REGISTER_PATH = '/register'
const RESET_PASSWORD_PATH = '/reset-password'

export const loginPath: PathGenerator = () => {
  return createPath(LOGIN_PATH)
}

export const registerPath: PathGenerator = () => {
  return createPath(REGISTER_PATH)
}

export const registerGroupNamePath: PathGenerator = () => {
  return createPath(REGISTER_PATH, { suffix: 'group-name' })
}

export const registerCreateProfilePath: PathGenerator = () => {
  return createPath(REGISTER_PATH, { suffix: 'create-profile' })
}

export const registerCreatePasswordPath: PathGenerator = () => {
  return createPath(REGISTER_PATH, { suffix: 'create-password' })
}

export const resetPasswordPath: PathGenerator = () => {
  return createPath(RESET_PASSWORD_PATH)
}
