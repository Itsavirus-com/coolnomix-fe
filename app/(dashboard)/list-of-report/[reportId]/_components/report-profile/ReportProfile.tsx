'use client'

import { useTranslations } from 'next-intl'
import React from 'react'

import { defaultImage } from '@/assets/images'
import ProfileInfoCard from '@/components/profile-info-card/ProfileInfoCard'
import { getDateTime } from '@/utils/date'

import { useReportProfile } from './report-profile.hook'

const ReportProfile = () => {
  const t = useTranslations('report')

  const { reportProfile } = useReportProfile()

  return (
    <ProfileInfoCard
      name={reportProfile?.name}
      moreInfo={
        <div>
          <span>{t('date_of_report')}</span>
          <span className='mx-2'>:</span>
          <span>{getDateTime(reportProfile?.created_at)}</span>
        </div>
      }
      avatar={defaultImage.src}
      size='lg'
    />
  )
}

export default ReportProfile
