import type { ComponentProps, ReactNode } from 'react'

import * as AccordionPrimitive from '@radix-ui/react-accordion'

export type AccordionItemType = {
  key: string
  title: string
  content: ReactNode
}

export type AccordionProps = ComponentProps<typeof AccordionPrimitive.Root> & {
  items: AccordionItemType[]
}
