'use client'

import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import React from 'react'

import LoadingWrapper from '@/components/loading-wrapper/LoadingWrapper'
import SuccessMessageCard from '@/components/success-message-card/SuccessMessageCard'
import { reportListPath } from '@/config/paths'
import { useReportDetail } from '@/services/swr/hooks/use-report-detail'

import ReportAnalysis from '../report-analysis/ReportAnalysis'
import ReportProfile from '../report-profile/ReportProfile'
import SolutionDesign from '../solution-design/SolutionDesign'

const ReportDetail = () => {
  const t = useTranslations('report')

  const { reportId } = useParams()
  const { isLoading, isError } = useReportDetail(reportId as string)

  if (isError) {
    return (
      <div className='content-placement-center content-placement-center--with-breadcrumbs'>
        <SuccessMessageCard
          title={t('report_not_found')}
          description={t('the_report_you_are_looking_for_does_not_exist')}
          buttons={[
            null,
            {
              label: t('back_to_report_list'),
              link: reportListPath()
            }
          ]}
          imageAlt=''
          className='min-h-auto'
        />
      </div>
    )
  }

  return (
    <LoadingWrapper isLoading={isLoading}>
      <div className='flex flex-col gap-8 px-[44px] pt-[54px]'>
        <ReportProfile />
        <ReportAnalysis />
        <SolutionDesign />
      </div>
    </LoadingWrapper>
  )
}

export default ReportDetail
