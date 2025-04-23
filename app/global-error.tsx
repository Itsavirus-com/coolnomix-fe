'use client'

import NextError from 'next/error'
import { useEffect } from 'react'

import { captureSentryException } from '@/utils/sentry'

export default function GlobalError(props: { error: Error & { digest?: string } }) {
  useEffect(() => {
    captureSentryException(props.error)
  }, [props.error])

  return (
    <html lang='en'>
      <body>
        <NextError statusCode={0} />
      </body>
    </html>
  )
}
