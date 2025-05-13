'use client'

import { useTranslations } from 'next-intl'
import React, { FC } from 'react'

import { cn } from '@/libs/utils'

import { ProfileInfoCardProps } from './profile-info-card.types'
import Icon from '../icon/Icon'
import Image from '../image/Image'
import Text from '../text/Text'

const ProfileInfoCard: FC<ProfileInfoCardProps> = (props) => {
  const { name, moreInfo, avatar, icon, iconBgColor, className, size = 'md', ...rest } = props

  const t = useTranslations('common')

  return (
    <div className={cn('flex items-center gap-3.5', className)} {...rest}>
      {avatar && (
        <div
          className={cn(
            'relative overflow-hidden',
            size === 'md' ? 'h-8 w-8 rounded-md' : 'h-[46px] w-[46px] rounded-lg'
          )}
        >
          <Image src={avatar} alt={t('an_awesome_profile_image')} fill />
        </div>
      )}
      {icon && (
        <div
          className={cn(
            'flex items-center justify-center rounded-md',
            size === 'md' ? 'h-8 w-8' : 'h-[46px] w-[46px]',
            iconBgColor && iconBgColor
          )}
        >
          <Icon icon={icon} className='h-full w-full' />
        </div>
      )}
      <div className='flex flex-col'>
        <Text
          tag='span'
          weight='medium'
          variant={size === 'md' ? 'body2' : 'subtitle1'}
          className='leading-[110%]'
        >
          {name}
        </Text>
        <Text
          tag='span'
          variant={size === 'md' ? 'body2' : 'body1'}
          className='text-grey-darkest mt-1 leading-[100%]'
        >
          {moreInfo}
        </Text>
      </div>
    </div>
  )
}

export default ProfileInfoCard
