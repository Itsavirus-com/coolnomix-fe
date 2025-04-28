import type { FC } from 'react'

import React, { memo } from 'react'
import { v4 as uuidv4 } from 'uuid'

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Accordion as SAccordion
} from '@/components/ui/accordion'

import type { AccordionProps } from './types'

const Accordion: FC<AccordionProps> = (props) => {
  const { items, ...rest } = props

  return (
    <SAccordion type='multiple' className='w-full' {...rest}>
      {items.map((item) => (
        <AccordionItem value={item.key} key={uuidv4()}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </SAccordion>
  )
}

export default memo(Accordion)
