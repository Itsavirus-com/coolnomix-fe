import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const ENV = createEnv({
  client: {
    NEXT_PUBLIC_IS_PROD: z.boolean().optional(),
    NEXT_PUBLIC_IS_DEV: z.boolean().optional(),
    NEXT_PUBLIC_SENTRY_DSN: z.string().optional(),
    NEXT_PUBLIC_API_BASE_URL: z.string().optional(),
    NEXT_PUBLIC_ACCESS_TOKEN_STORAGE_KEY: z.string().optional(),
    NEXT_PUBLIC_PROJECT_NAME: z.string().optional()
  },
  shared: {
    NODE_ENV: z.enum(['test', 'development', 'production']).optional()
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_IS_PROD: process.env.NODE_ENV === 'production',
    NEXT_PUBLIC_IS_DEV: process.env.NODE_ENV === 'development',
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    NEXT_PUBLIC_ACCESS_TOKEN_STORAGE_KEY: 'ACCESS_TOKEN',
    NEXT_PUBLIC_PROJECT_NAME: process.env.NEXT_PUBLIC_PROJECT_NAME
  }
})
