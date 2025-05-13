import { useTranslations } from 'next-intl'
import React, { FC } from 'react'

import Button from '@/components/button/Button'
import Icon from '@/components/icon/Icon'
import ProfileInfoCard from '@/components/profile-info-card/ProfileInfoCard'
import Text from '@/components/text/Text'
import { listOfBranchPath } from '@/config/paths'

import { BranchListProps } from './branch-lists.types'

const BranchList: FC<BranchListProps> = (props) => {
  const { id, name, email, date, avatar, approvedCount, pendingCount } = props

  const t = useTranslations('common')

  return (
    <div className='group hover:bg-grey-lightest flex cursor-default items-center justify-between rounded-lg px-2.5 py-3 transition-colors'>
      <ProfileInfoCard
        name={name}
        avatar={avatar}
        moreInfo={
          <div>
            <span>{email}</span>
            <span className='mx-2'>•</span>
            <span>{date}</span>
          </div>
        }
      />
      <div className='relative'>
        <div className='border-color-50 flex h-6 w-6 items-center justify-center rounded-sm border'>
          <Text
            tag='span'
            variant='caption'
            weight='medium'
            className='text-grey-darkest leading-[100%]'
          >
            {approvedCount + pendingCount}
          </Text>
        </div>
        <div className='bg-grey-lightest absolute top-1/2 right-0 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100'>
          <div className='flex items-center gap-1.5'>
            <Button size='xs' label={t('open')} link={`${listOfBranchPath()}/${id}`} />
            <div className='border-color-50 flex h-7 items-center rounded-sm border px-1.5'>
              <div className='flex items-center gap-1'>
                <Icon icon='icon-pending' size={10} />
                <Text
                  tag='span'
                  variant='caption'
                  weight='medium'
                  className='text-grey-darkest leading-[100%]'
                >
                  {pendingCount}
                </Text>
              </div>
              <div className='flex items-center gap-1'>
                <Icon icon='icon-pending' size={10} />
                <Text
                  tag='span'
                  variant='caption'
                  weight='medium'
                  className='text-grey-darkest leading-[100%]'
                >
                  {pendingCount}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BranchList
