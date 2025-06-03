'use client'

import { useCallback } from 'react'

import { createSession, deleteSession } from '@/lib/session'

export function useAuthCookies() {
  const setAuth = useCallback((id: number) => {
    createSession(id)
  }, [])

  const removeAuth = useCallback(() => {
    deleteSession()
  }, [])

  return {
    setAuth,
    removeAuth
  }
}
