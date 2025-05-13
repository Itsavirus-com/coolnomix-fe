'use client'

import { Loader2 } from 'lucide-react'
import Link from 'next/link'

import { Button as CButton } from '@/components/ui/button'

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
    ...rest
  } = props

  return (
    <CButton
      data-test-id={testID}
      variant={variant}
      size={size}
      asChild={!!link}
      type={type}
      {...rest}
    >
      {link ? (
        <Link href={link} aria-label={ariaLabel}>
          {label}
        </Link>
      ) : (
        <>
          {isLoading && <Loader2 size={14} className='animate-spin' />}
          {label}
        </>
      )}
    </CButton>
  )
}

export default Button
