import { Loader2, MailOpen } from 'lucide-react'

import { Button as CButton } from '@/components/ui/button'

import ButtonLink from '../button-link'

import type { ButtonWithLinkProps } from './types'

const Button = (props: ButtonWithLinkProps) => {
  const {
    name,
    label,
    variant = 'default',
    size = 'default',
    link,
    isLoading,
    testID = `${name}-button`,
    ...rest
  } = props

  return (
    <CButton data-test-id={testID} variant={variant} size={size} asChild={!!link} {...rest}>
      {isLoading && <Loader2 size={14} className='animate-spin' />}
      <MailOpen size={14} />
      {link ? <ButtonLink href={link}>{label}</ButtonLink> : label}
    </CButton>
  )
}

export default Button
