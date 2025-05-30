import { StaticImageData } from 'next/image'

import { ButtonWithLinkProps } from '@/components/button/button.types'

export interface SuccessMessageType {
  title: string
  description: string
  image: StaticImageData
  imageAlt: string
  buttons: ButtonWithLinkProps[]
}
