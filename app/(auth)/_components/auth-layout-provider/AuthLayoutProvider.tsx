'use client'

import { useTranslations } from 'next-intl'

import { coolnomixLogo, sentianLogo } from '@/assets/images'
import Image from '@/components/image/Image'

import { useAuthLayoutProvider } from './auth-layout-provider.hook'
import AuthImage from '../auth-image/AuthImage'

const AuthLayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const t = useTranslations('auth')

  const { isSuccessPage } = useAuthLayoutProvider()

  if (isSuccessPage) {
    return (
      <main className='flex h-full w-full flex-col'>
        <div className='flex items-center justify-between px-[25%] py-[54px]'>
          <Image src={sentianLogo} alt={t('an_awesome_sentian_logo')} height={60} />
          <Image src={coolnomixLogo} alt={t('an_awesome_coolnomix_logo')} height={24} />
        </div>
        <section className='flex h-full min-h-[600px] items-center justify-center'>
          {children}
        </section>
      </main>
    )
  }

  return (
    <>
      <AuthImage />
      <main className='flex h-full flex-1 flex-col overflow-auto px-[50px] py-[54px]'>
        <div className='flex items-center justify-between'>
          <Image src={sentianLogo} alt={t('an_awesome_sentian_logo')} height={60} />
          <Image src={coolnomixLogo} alt={t('an_awesome_coolnomix_logo')} height={24} />
        </div>
        <section className='flex h-full min-h-[600px] items-center justify-center'>
          <div className='w-[350px]'>{children}</div>
        </section>
      </main>
    </>
  )
}

export default AuthLayoutProvider
