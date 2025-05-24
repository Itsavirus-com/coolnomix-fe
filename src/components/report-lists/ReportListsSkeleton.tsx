import React from 'react'

import ProfileInfoCardSkeleton from '../profile-info-card/ProfileInfoCardSkeleton'

const ReportListsSkeleton = () => {
  return (
    <div className='flex flex-col gap-2'>
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className='flex cursor-default items-center justify-between rounded-lg px-2.5 py-2'
        >
          <ProfileInfoCardSkeleton />
        </div>
      ))}
    </div>
  )
}

export default ReportListsSkeleton
