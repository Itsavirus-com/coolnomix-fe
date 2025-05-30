import withBundleAnalyzer from '@next/bundle-analyzer'
import { withSentryConfig } from '@sentry/nextjs'
import createNextIntlPlugin from 'next-intl/plugin'

import { ENV } from '@/libs/env'

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
})

const withNextIntl = createNextIntlPlugin('./src/locales/request.ts')

/** @type {import('next').NextConfig} */
export default withNextIntl(
  withSentryConfig(
    bundleAnalyzer({
      experimental: {
        optimizePackageImports: []
      },
      env: {
        NEXT_PUBLIC_API_BASE_URL: ENV.NEXT_PUBLIC_API_BASE_URL,
        SENTRY_DSN: ENV.NEXT_PUBLIC_SENTRY_DSN
      }
    }),
    {
      org: 'nextjs-boilerplate-org',
      project: 'nextjs-boilerplate',
      silent: !process.env.CI,
      widenClientFileUpload: true,
      reactComponentAnnotation: {
        enabled: true
      },
      tunnelRoute: '/monitoring',
      hideSourceMaps: true,
      disableLogger: true,
      automaticVercelMonitors: true,
      telemetry: false
    }
  )
)
