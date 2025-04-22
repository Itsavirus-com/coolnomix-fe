export type User = {
  id: number
  firstName: string
  lastName: string
  email: string
  isSuperAdmin: boolean
}

export type AuthStore = {
  user: User
  token: string
  tokenExpiry: string
  refreshToken: string
  refreshTokenExpiry: string
  refreshingToken: boolean
}
