import type { HTMLAttributes, ReactNode } from 'react'

export type TagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'small' | 'span'

export type FontWeightType = 'normal' | 'medium' | 'semibold' | 'bold'

export type TextSizeType = '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'smAlt' | 'xs' | 'xsAlt'

export type VariantType =
  | 'title1'
  | 'title2'
  | 'title3'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'caption'

export type TextProps = HTMLAttributes<HTMLElement> & {
  tag?: TagType
  variant?: VariantType
  weight?: FontWeightType
  children: ReactNode
}
