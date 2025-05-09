import withBundleAnalyzer from '@next/bundle-analyzer'
import { withSentryConfig } from '@sentry/nextjs'
import createNextIntlPlugin from 'next-intl/plugin'

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
})

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
export default withNextIntl(
  withSentryConfig(
    bundleAnalyzer({
      experimental: {
        optimizePackageImports: []
      },
      env: {
        API_BASE_URL: '',
        SENTRY_DSN: ''
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
