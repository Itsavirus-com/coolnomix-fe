import React, { FC } from 'react'

import { cn } from '@/libs/utils'

import { Skeleton } from '../ui/skeleton'

import type { ProfileInfoCardProps } from './profile-info-card.types'

const ProfileInfoCardSkeleton: FC<Pick<ProfileInfoCardProps, 'size'>> = (props) => {
  const { size = 'md' } = props

  return (
    <div className='flex items-center gap-3.5'>
      <Skeleton
        className={cn(
          'flex items-center justify-center rounded-md',
          size === 'md' ? 'h-8 w-8' : 'h-[46px] w-[46px]'
        )}
      />
      <div className='flex flex-col gap-2'>
        <Skeleton className={cn('h-4 w-64', size === 'md' ? 'h-4' : 'h-5')} />
        <Skeleton className={cn('h-4 w-46', size === 'md' ? 'h-4' : 'h-5')} />
      </div>
    </div>
  )
}

export default ProfileInfoCardSkeleton
