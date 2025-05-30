import { StaticImageData } from 'next/image'

import { forgotPasswordImage, loginImage, registerImage } from '@/assets/images'
import { forgotPasswordPath, loginPath, registerPath } from '@/config/paths/auth-path'

type AuthImageConfig = {
  path: string
  image: StaticImageData
}

export const AUTH_IMAGE_CONFIGS: AuthImageConfig[] = [
  { path: loginPath(), image: loginImage },
  { path: registerPath(), image: registerImage },
  { path: forgotPasswordPath(), image: forgotPasswordImage }
]

export const getAuthImageForPath = (path: string): StaticImageData => {
  const config = AUTH_IMAGE_CONFIGS.find((config) => config.path === path)

  return config?.image ?? loginImage
}
