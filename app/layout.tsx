import type { ReactNode } from 'react'

import clsx from 'clsx'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale } from 'next-intl/server'

import { hanken_font } from '@/assets/fonts'
import Providers from '@/components/providers/Providers'
import ModalHandler from '@/handlers/modal-handler/ModalHandler'
import ToastHandler from '@/handlers/toast-handler/ToastHandler'

import '@/assets/styles/main.css'

export default async function RootLayout({ children }: { children: ReactNode }) {
  // The `suppressHydrationWarning` attribute in <body> is us ed to prevent hydration errors caused by Sentry Overlay,
  // which dynamically adds a `style` attribute to the body tag.

  const locale = await getLocale()

  return (
    <html lang={locale}>
      <body suppressHydrationWarning className={clsx(hanken_font.className, 'antialiased')}>
        <NextIntlClientProvider>
          <Providers>
            {children}
            <ModalHandler />
            <ToastHandler />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
