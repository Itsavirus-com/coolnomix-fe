import React, { FC } from 'react'

import Badge from '@/components/badge'
import Button from '@/components/button/Button'
import ProfileInfoCard from '@/components/profile-info-card/ProfileInfoCard'

import { useQnaSubmissionLists } from './qna-submission-lists.hook'
import { QnaSubmissionListProps } from './qna-submission-lists.types'

const QnaSubmissionList: FC<QnaSubmissionListProps> = (props) => {
  const { name, type, date, status, equipmentType, ...rest } = props

  const { icon, typeAlias, buttonLabel, phaseLabel, viewLink } = useQnaSubmissionLists(
    status,
    type,
    equipmentType
  )

  return (
    <div
      className='group hover:bg-grey-lightest flex cursor-default items-center justify-between rounded-lg px-2.5 py-2 transition-colors'
      {...rest}
    >
      <ProfileInfoCard
        name={name}
        icon={icon.icon}
        iconBgColor={icon.iconBgColor}
        size='md'
        moreInfo={
          <div>
            <span>{typeAlias}</span>
            <span className='mx-2'>•</span>
            <span>{date}</span>
          </div>
        }
      />
      <div className='flex items-center gap-1.5'>
        <div className='opacity-0 transition-opacity group-hover:opacity-100'>
          <Button size='xs' className='w-fit' label={buttonLabel} link={viewLink} />
        </div>
        {type === 'details-forms' && (
          <Badge className='cursor-pointer' size='md'>
            {phaseLabel}
          </Badge>
        )}
      </div>
    </div>
  )
}

export default QnaSubmissionList
