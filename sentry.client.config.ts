// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.

import { ENV } from '@/libs/env'
import * as Sentry from '@sentry/nextjs'
import * as Spotlight from '@spotlightjs/spotlight'

if (ENV.NEXT_PUBLIC_IS_PROD && ENV.NEXT_PUBLIC_SENTRY_DSN) {
  Sentry.init({
    dsn: ENV.NEXT_PUBLIC_SENTRY_DSN,
    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration(),
    ],
    tracesSampleRate: 1,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
    debug: true,
  })
}

if (ENV.NEXT_PUBLIC_IS_DEV) {
  Spotlight.init()
}
