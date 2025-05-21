'use client'

import { useTranslations } from 'next-intl'
import React from 'react'

import Image from '@/components/image/Image'

import { useAuthImage } from './auth-image.hook'

const AuthImage = () => {
  const t = useTranslations('auth')

  const { loginImageSrc } = useAuthImage()

  return (
    <div className='relative h-full w-[45%]'>
      <Image src={loginImageSrc} alt={t('an_awesome_login_image')} fill priority />
    </div>
  )
}

export default AuthImage
