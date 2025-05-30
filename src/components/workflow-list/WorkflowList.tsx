'use client'

import React, { FC } from 'react'

import Accordion from '@/components/accordion/Accordion'

import ReportLists from '../report-lists/ReportLists'

import type { WorkflowListProps } from './workflow-list.types'

const WorkflowList: FC<WorkflowListProps> = (props) => {
  const { isLoading, workflowData } = props

  return (
    <div className='mt-4'>
      <Accordion
        type='multiple'
        defaultValue={['0', '1']}
        accordionTriggerClassName='text-sm font-normal text-grey-darkest'
        items={workflowData?.map((item, index) => ({
          key: index.toString(),
          title: `${item.name}:`,
          content: <ReportLists isLoading={isLoading} status={item.status} lists={item.lists} />
        }))}
      />
    </div>
  )
}

export default WorkflowList
