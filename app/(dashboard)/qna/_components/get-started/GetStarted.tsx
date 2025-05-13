'use client'

import { useTranslations } from 'next-intl'
import React from 'react'

import { snowman } from '@/assets/images'
import Button from '@/components/button/Button'
import Description from '@/components/description/Description'
import Image from '@/components/image/Image'
import { qnaSelectLanguagePath } from '@/config/paths'

const GetStarted = () => {
  const t = useTranslations('qna')

  return (
    <div className='flex flex-col items-center text-center'>
      <div className='flex w-[438px] flex-col items-center'>
        <Image
          src={snowman}
          alt={t('an_awesome_snowman_illustration')}
          height={170}
          width={170}
          priority
        />
        <Description label={t('get_started')} className='mt-5 text-center' titleTag='h1'>
          {t('get_started_description')}
        </Description>
      </div>
      <Button className='mt-5' label={t('start_qna')} link={qnaSelectLanguagePath()} />
    </div>
  )
}

export default GetStarted
