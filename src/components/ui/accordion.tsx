import type { ComponentProps } from 'react'

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDownIcon } from 'lucide-react'

import { cn } from '@/libs/utils'

import Icon from '../icon/Icon'

function Accordion({ ...props }: ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot='accordion' {...props} />
}

function AccordionItem({ className, ...props }: ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot='accordion-item'
      className={cn('border-b border-b-[#d9d9d933] last:border-b-0', className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  handleRemove,
  canRemove,
  ...props
}: ComponentProps<typeof AccordionPrimitive.Trigger> & {
  canRemove?: boolean
  handleRemove?: () => void
}) {
  return (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        data-slot='accordion-trigger'
        className={cn(
          'focus-visible:border-ring focus-visible:ring-ring/50 text-md flex flex-1 items-center justify-between gap-4 rounded-md py-1 text-left font-semibold text-black transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180',
          className
        )}
        {...props}
      >
        {children}
        <div className='flex items-center gap-3'>
          {canRemove && (
            <div
              role='button'
              onClick={handleRemove}
              className='bg-red-light flex h-[20px] w-[20px] cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-[#f8cbc0]'
            >
              <div className='pb-[4px]'>
                <Icon icon='icon-close' size={8} className='text-grey-darkest' />
              </div>
            </div>
          )}
          <div role='button' className='cursor-pointer'>
            <ChevronDownIcon className='text-grey-darkest pointer-events-none size-4 shrink-0' />
          </div>
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot='accordion-content'
      className='data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-sm data-[state=closed]:overflow-hidden data-[state=open]:overflow-visible'
      {...props}
    >
      <div className={cn('pt-3.5 pb-4', className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
