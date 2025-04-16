'use client'

import { captureSentryException } from '@/utils/sentry'
import NextError from 'next/error'
import { useEffect } from 'react'

export default function GlobalError(props: {
  error: Error & { digest?: string }
}) {
  useEffect(() => {
    captureSentryException(props.error)
  }, [props.error])

  return (
    <html lang="en">
      <body>
        <NextError statusCode={0} />
      </body>
    </html>
  )
}
