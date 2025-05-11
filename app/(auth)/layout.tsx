import { getTranslations } from 'next-intl/server'
import React from 'react'

import { coolnomixLogo, loginImage, sentianLogo } from '@/assets/images'
import Image from '@/components/image/Image'

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const t = await getTranslations('auth')

  return (
    <div className='flex h-dvh'>
      <div className='relative h-full w-[45%]'>
        <Image src={loginImage} alt={t('an_awesome_login_image')} fill priority />
      </div>
      <main className='relative h-full flex-1 overflow-auto px-[50px] py-[54px]'>
        <div className='absolute top-0 left-0 flex w-full items-center justify-between px-[50px] pt-[54px]'>
          <div className='relative w-[111px]'>
            <Image src={sentianLogo} alt={t('an_awesome_sentian_logo')} />
          </div>
          <div className='relative w-[192px]'>
            <Image src={coolnomixLogo} alt={t('an_awesome_coolnomix_logo')} />
          </div>
        </div>
        <section className='flex h-full min-h-[600px] items-center justify-center'>
          <div className='w-[350px]'>{children}</div>
        </section>
      </main>
    </div>
  )
}

export default Layout
