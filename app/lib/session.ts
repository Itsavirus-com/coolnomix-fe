'use server'

import { cookies } from 'next/headers'

import { SESSION_COOKIE } from '@/config/constant'

export async function createSession(id: number): Promise<void> {
  const cookieStore = await cookies()
  const value = id ? SESSION_COOKIE.value : SESSION_COOKIE.unauthenticatedValue

  cookieStore.set(SESSION_COOKIE.name, value, {
    path: '/',
    maxAge: SESSION_COOKIE.maxAge,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    httpOnly: false // Allow client-side access for sync
  })
}

export async function deleteSession(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.delete(SESSION_COOKIE.name)
}

export async function getSession(): Promise<boolean> {
  try {
    const cookieStore = await cookies()
    const authCookie = cookieStore.get(SESSION_COOKIE.name)
    return authCookie?.value === SESSION_COOKIE.value
  } catch {
    return false
  }
}
