import { StaticImageData } from 'next/image'

import { ButtonWithLinkProps } from '@/components/button/button.types'

export type SuccessMessageLayoutType = {
  title: string
  description: string
  image: StaticImageData
  imageAlt: string
  buttons: ButtonWithLinkProps[]
  loading?: boolean
}
