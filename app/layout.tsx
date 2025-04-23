import type { ReactNode } from 'react'

import clsx from 'clsx'

import { hanken_font } from '@/assets/fonts'

import App from './app'
import '@/assets/styles/main.css'
import '../src/locales/i18n'

export default async function RootLayout({ children }: { children: ReactNode }) {
  // The `suppressHydrationWarning` attribute in <body> is us ed to prevent hydration errors caused by Sentry Overlay,
  // which dynamically adds a `style` attribute to the body tag.

  return (
    <html lang='en'>
      <body suppressHydrationWarning className={clsx(hanken_font.className, 'antialiased')}>
        <App>{children}</App>
      </body>
    </html>
  )
}
