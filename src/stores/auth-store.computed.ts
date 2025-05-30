import dayjs from 'dayjs'
import { derive } from 'derive-valtio'

import type { AuthStore } from './auth-store.types'

export const computeAuthStore = (state: AuthStore) =>
  derive({
    authorization: (get) => get(state).token,
    isAuthenticated: (get) => {
      const hasToken = !!get(state).token
      const hasRefreshToken = !!get(state).refreshToken
      const tokenExpiredAt = dayjs(get(state).tokenExpiry)
      const refreshTokenExpiredAt = dayjs(get(state).refreshTokenExpiry)
      const tokenHasExpired = tokenExpiredAt.isBefore(dayjs())
      const refreshTokenHasExpired = refreshTokenExpiredAt.isBefore(dayjs())

      return (hasToken && !tokenHasExpired) || (hasRefreshToken && !refreshTokenHasExpired)
    },
    refreshTokenActive: (get) => {
      const hasRefreshToken = !!get(state).refreshToken
      const refreshTokenExpiredAt = dayjs(get(state).refreshTokenExpiry)
      const refreshTokenHasExpired = refreshTokenExpiredAt.isBefore(dayjs())

      return hasRefreshToken && !refreshTokenHasExpired
    }
  })
