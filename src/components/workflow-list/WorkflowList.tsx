'use client'

import React, { FC } from 'react'

import Accordion from '@/components/accordion/Accordion'

import { WorkflowListProps } from './workflow-list.types'
import ReportLists from '../report-lists/ReportLists'

const WorkflowList: FC<WorkflowListProps> = (props) => {
  const { workflowData } = props

  return (
    <div className='mt-4'>
      <Accordion
        type='multiple'
        defaultValue={['0', '1']}
        accordionTriggerClassName='text-sm font-normal text-grey-darkest'
        items={workflowData?.map((item, index) => ({
          key: index.toString(),
          title: `${item.name}:`,
          content: <ReportLists status={item.status} lists={item.lists} />
        }))}
      />
    </div>
  )
}

export default WorkflowList
