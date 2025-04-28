import type { ReactNode } from 'react'

export type AccordionItemType = {
  key: string
  title: string
  content: ReactNode
}

export type AccordionProps = {
  items: AccordionItemType[]
}
