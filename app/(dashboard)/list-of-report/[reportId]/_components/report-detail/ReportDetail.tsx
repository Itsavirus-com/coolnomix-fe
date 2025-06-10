'use client'

import React from 'react'

import LoadingWrapper from '@/components/loading-wrapper/LoadingWrapper'
import { DUMMY_REPORT_DETAIL_ID } from '@/config/constant'
import { useReportDetail } from '@/services/swr/hooks/use-report-detail'

import ReportAnalysis from '../report-analysis/ReportAnalysis'
import ReportProfile from '../report-profile/ReportProfile'
import SolutionDesign from '../solution-design/SolutionDesign'

const ReportDetail = () => {
  const { isLoading } = useReportDetail(DUMMY_REPORT_DETAIL_ID)

  return (
    <LoadingWrapper isLoading={isLoading}>
      <ReportProfile />
      <ReportAnalysis />
      <SolutionDesign />
    </LoadingWrapper>
  )
}

export default ReportDetail
