import type { FontWeightType, TextSizeType, VariantType } from './types'

const textSizeClasses: Record<TextSizeType, string> = {
  '3xl': 'text-3xl leading-9 text-black',
  '2xl': 'text-2xl text-black',
  xl: 'text-xl text-black',
  lg: 'text-lg text-black',
  md: 'text-md leading-6 text-black',
  sm: 'text-sm leading-6 text-black',
  smAlt: 'text-smAlt leading-6 text-black',
  xs: 'text-xs leading-6 text-black',
  xsAlt: 'text-xsAlt leading-6 text-black'
}

const fontWeightClasses: Record<FontWeightType, string> = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold'
}

const baseVariants: Record<VariantType, TextSizeType> = {
  title1: '3xl',
  title2: '2xl',
  title3: 'xl',
  subtitle1: 'lg',
  subtitle2: 'md',
  body1: 'sm',
  body2: 'smAlt',
  body3: 'xs',
  caption: 'xsAlt'
}

const getVariantClass = (size: TextSizeType, weight: FontWeightType) => {
  return `${textSizeClasses[size]} ${fontWeightClasses[weight]}`
}

export const createVariantClass = (variant: VariantType, weight: FontWeightType) => {
  const size = baseVariants[variant]

  return getVariantClass(size, weight)
}
