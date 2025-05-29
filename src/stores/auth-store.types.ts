export type User = {
  id: number
  name: string
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

export type RegisterPayload = {
  name: string
  email: string
  password: string
  confirm_password: string
}
