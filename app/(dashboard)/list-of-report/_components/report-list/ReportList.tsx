'use client'

import React from 'react'

import WorkflowList from '@/components/workflow-list/WorkflowList'

import { useReportList } from './report-list.hook'

const ReportList = () => {
  const { isLoading, reportList } = useReportList()

  return <WorkflowList isLoading={isLoading} workflowData={reportList} />
}

export default ReportList
