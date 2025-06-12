'use client'

import { Loader2 } from 'lucide-react'
import Link from 'next/link'

import { Button as CButton } from '@/components/ui/button'
import { cn } from '@/libs/utils'

import type { ButtonWithLinkProps } from './button.types'

const Button = (props: ButtonWithLinkProps) => {
  const {
    name,
    label,
    variant = 'default',
    size = 'default',
    link,
    isLoading,
    type = 'button',
    testID = `${name}-button`,
    ariaLabel,
    disabled,
    startContent,
    endContent,
    ...rest
  } = props

  return (
    <CButton
      data-test-id={testID}
      variant={variant}
      size={size}
      asChild={!!link}
      type={type}
      disabled={disabled || isLoading}
      {...rest}
    >
      {link ? (
        <Link
          href={link}
          aria-label={ariaLabel}
          className={cn(
            'flex items-center gap-2',
            (disabled || isLoading) && 'pointer-events-none opacity-50'
          )}
        >
          {isLoading && <Loader2 size={14} className='animate-spin' />}
          <div className='flex items-center gap-2'>
            {startContent}
            {label}
            {endContent}
          </div>
        </Link>
      ) : (
        <div className='flex items-center gap-1'>
          {isLoading && <Loader2 size={14} className='animate-spin' />}
          <div className='flex items-center gap-2'>
            {startContent}
            {label}
            {endContent}
          </div>
        </div>
      )}
    </CButton>
  )
}

export default Button
