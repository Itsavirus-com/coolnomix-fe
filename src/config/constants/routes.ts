import { forgotPasswordPath, loginPath, registerPath } from '@/config/paths/auth-path'

import { dataLogMonitoringPath, listOfBranchPath, qnaPath, reportListPath } from '../paths'

export const PUBLIC_ROUTES = ['/api', '/_next', '/favicon.ico', '/robots.txt', '/sitemap.xml']
export const AUTH_ROUTES = [loginPath(), registerPath(), forgotPasswordPath()]
export const DASHBOARD_ROUTES = [
  dataLogMonitoringPath(),
  listOfBranchPath(),
  reportListPath(),
  qnaPath()
]

export function matchesRoutePattern(pathname: string, patterns: readonly string[]): boolean {
  return patterns.some((pattern) => pathname.startsWith(pattern))
}

export function isAuthRoute(pathname: string): boolean {
  return matchesRoutePattern(pathname, AUTH_ROUTES)
}

export function isDashboardRoute(pathname: string): boolean {
  if (pathname === '/') return true

  return matchesRoutePattern(pathname, DASHBOARD_ROUTES)
}

export function isPublicRoute(pathname: string): boolean {
  return matchesRoutePattern(pathname, PUBLIC_ROUTES)
}
