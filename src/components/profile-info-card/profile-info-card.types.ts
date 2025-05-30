import { ComponentProps, ReactNode } from 'react'

export type ProfileInfoCardProps = ComponentProps<'div'> & {
  name: string | ReactNode
  moreInfo: string | ReactNode
  avatar?: string
  icon?: string
  iconBgColor?: string
  size?: 'md' | 'lg'
}
