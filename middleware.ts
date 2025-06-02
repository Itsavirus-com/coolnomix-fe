import { NextRequest, NextResponse } from 'next/server'

import { isAuthRoute, isDashboardRoute, isPublicRoute } from '@/config/constants/routes'
import { registerPath } from '@/config/paths/auth-path'
import { getSession } from '@/lib/session'

// Helper function to check if user is authenticated based on cookies
async function isAuthenticated(): Promise<boolean> {
  const sessionCookie = await getSession()
  return sessionCookie
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Allow public routes to pass through
  if (isPublicRoute(pathname)) return NextResponse.next()

  const userIsAuthenticated = await isAuthenticated()

  // Handle authentication routes
  if (isAuthRoute(pathname)) {
    if (!userIsAuthenticated) return NextResponse.next()

    // If user is already authenticated, redirect to dashboard
    return NextResponse.redirect(new URL('/', request.url))
  }

  // Handle dashboard routes (protected routes)
  if (isDashboardRoute(pathname)) {
    // If user is not authenticated, redirect to register page
    if (!userIsAuthenticated) {
      return NextResponse.redirect(new URL(registerPath(), request.url))
    }
    // Allow access to dashboard routes for authenticated users
    return NextResponse.next()
  }

  // For any other routes, allow them to pass through
  return NextResponse.next()
}
