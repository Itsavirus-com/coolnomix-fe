import type { Messages, createTranslator } from 'next-intl'

declare module 'next-intl' {
  export type TFunction = ReturnType<typeof createTranslator<Messages>>
}
