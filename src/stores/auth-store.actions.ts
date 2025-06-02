import { createSession, deleteSession } from '@/lib/session'
import { authApi } from '@/services/api/auth-api'

import { authStore, defaultAuthStore } from './auth-store'
import { RegisterPayload } from './auth-store.types'
import reset from './helpers/reset'

import type { ApiOkResponse } from 'apisauce'

export const setAuthenticatedUser = async (result: ApiOkResponse<any>) => {
  const { data } = result

  authStore.state.user = data.data
  await createSession(authStore.state.user?.id)

  // For now, our backend not support token refresh token, this code bellow will use later.
  // authStore.state.token = headers.authorization
  // authStore.state.tokenExpiry = headers['expired-at']
  // authStore.state.refreshToken = headers['refresh-token']
  // authStore.state.refreshTokenExpiry = headers['refresh-token-expired']
}

export const login = async (email: string, password: string) => {
  const result = await authApi.login({ email, password })

  if (result.ok) {
    await setAuthenticatedUser(result)
  }

  return result.ok
}

export const register = async (registerPayload: RegisterPayload) => {
  const result = await authApi.register(registerPayload)

  if (result.ok) {
    await setAuthenticatedUser(result)
  }

  return result.ok
}

export const logout = async () => {
  const result = await authApi.logout()

  if (result.ok) {
    reset(authStore.state, defaultAuthStore)
    await deleteSession()
  }

  return result.ok
}

export const syncUserProfile = async () => {
  const result = await authApi.getUserProfile()

  if (result.ok) {
    Object.keys(result.data.data).forEach((key) => {
      // @ts-expect-error - This is a workaround to avoid type errors
      authStore.state.user[key] = result.data.data[key]
    })
  }

  return result
}

export const resetAuthState = async () => {
  reset(authStore.state, defaultAuthStore)
  await deleteSession()
}

export const setRefreshingToken = (state: boolean) => {
  authStore.state.refreshingToken = state
}
