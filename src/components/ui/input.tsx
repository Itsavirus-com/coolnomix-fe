import type { ComponentProps } from 'react'

import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/libs/utils'

const inputVariants = cva(
  ' text-primary file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input text-smAlt disabled:bg-grey-lightest flex w-full min-w-0 rounded-md border bg-transparent px-4 py-2 transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
  {
    variants: {
      size: {
        md: 'h-8',
        lg: 'h-10,'
      }
    },
    defaultVariants: {
      size: 'lg'
    }
  }
)

function Input({
  className,
  type,
  name,
  size,
  ...props
}: Omit<ComponentProps<'input'>, 'size'> & VariantProps<typeof inputVariants>) {
  return (
    <div className='relative'>
      <input
        type={type}
        data-slot='input'
        data-test-id={`${name}-input`}
        className={cn(inputVariants({ size }), className)}
        id={name}
        autoComplete={name}
        {...props}
      />
    </div>
  )
}

export { Input, inputVariants }
