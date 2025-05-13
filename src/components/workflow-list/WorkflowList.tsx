'use client'

import React from 'react'

import Accordion from '@/components/accordion/Accordion'

import { useWorkflowList } from './workflow-list.hook'
import QnaSubmissionLists from '../qna-submission-lists/QnaSubmissionLists'

const WorkflowList = () => {
  const { workflowLists } = useWorkflowList()

  return (
    <div className='mt-4'>
      <Accordion
        type='multiple'
        defaultValue={['0', '1']}
        accordionTriggerClassName='text-sm font-normal text-grey-darkest'
        items={workflowLists?.map((item, index) => ({
          key: index.toString(),
          title: `${item.name}:`,
          content: <QnaSubmissionLists status={item.status} lists={item.qnaLists} />
        }))}
      />
    </div>
  )
}

export default WorkflowList
