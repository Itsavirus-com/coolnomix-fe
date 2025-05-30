'use client'

import { useTranslations } from 'next-intl'
import React from 'react'

import { defaultImage } from '@/assets/images'
import ProfileInfoCard from '@/components/profile-info-card/ProfileInfoCard'

const ReportProfile = () => {
  const t = useTranslations('report')

  return (
    <ProfileInfoCard
      name='Pepito Canggu Branch'
      moreInfo={
        <div>
          <span>{t('date_of_report')}</span>
          <span className='mx-2'>:</span>
          <span>April 29, 2025</span>
        </div>
      }
      avatar={defaultImage.src}
      size='lg'
    />
  )
}

export default ReportProfile
