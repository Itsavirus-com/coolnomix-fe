import type { FC } from 'react'

import Link from 'next/link'
import React from 'react'

import { buttonVariants } from '../ui/button'

import type { ButtonLinkProps } from './types'

const ButtonLink: FC<ButtonLinkProps> = (props) => {
  const { href, children } = props

  return (
    <Link href={href} className={buttonVariants({ variant: 'outline' })}>
      {children}
    </Link>
  )
}

export default ButtonLink
