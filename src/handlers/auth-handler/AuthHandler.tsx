'use client'

import { useEffect } from 'react'
import { useSnapshot } from 'valtio'

import { useAuthCookies } from '@/hooks/useAuthCookies'
import { authStore } from '@/stores/auth-store'

const AuthHandler = (): null => {
  const { computed, state } = useSnapshot(authStore)
  const { setAuth, removeAuth } = useAuthCookies()

  useEffect(() => {
    const isAuthenticated = computed.isAuthenticated
    const hasUser = state.user?.id !== null && state.user?.id !== undefined
    const userIsAuthenticated = isAuthenticated || hasUser

    if (userIsAuthenticated) {
      setAuth(state.user?.id)
    } else {
      removeAuth()
    }
  }, [computed.isAuthenticated, state.user?.id])

  return null
}

export default AuthHandler
