import { StaticImageData } from 'next/image'
import { ComponentProps } from 'react'

import { ButtonWithLinkProps } from '../button/button.types'

export type SuccessMessageCardProps = ComponentProps<'div'> & {
  title: string
  description: string
  buttons: ButtonWithLinkProps[]
  image?: StaticImageData
  imageAlt: string
}
