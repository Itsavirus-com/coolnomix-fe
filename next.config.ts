import withBundleAnalyzer from '@next/bundle-analyzer'
import { withSentryConfig } from '@sentry/nextjs'

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
})

/** @type {import('next').NextConfig} */
export default withSentryConfig(
  bundleAnalyzer({
    eslint: {
      dirs: ['.']
    },
    poweredByHeader: false,
    reactStrictMode: true,
    experimental: {
      cssChunking: true,
      optimizePackageImports: []
    },
    env: {
      API_BASE_URL: '',
      SENTRY_DSN: '',
      ENVIRONMENT: ''
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
