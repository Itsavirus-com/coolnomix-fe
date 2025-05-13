import type { FC } from 'react'

import React, { memo } from 'react'

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Accordion as SAccordion
} from '@/components/ui/accordion'

import type { AccordionProps } from './accordion.types'

const Accordion: FC<AccordionProps> = (props) => {
  const { items, accordionTriggerClassName, ...rest } = props

  return (
    <SAccordion type='multiple' className='w-full' {...rest}>
      {items.map((item) => (
        <AccordionItem value={item.key} key={item.key}>
          <AccordionTrigger className={accordionTriggerClassName}>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </SAccordion>
  )
}

export default memo(Accordion)
