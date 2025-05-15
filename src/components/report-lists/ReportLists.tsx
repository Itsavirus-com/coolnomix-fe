'use client'

import { useTranslations } from 'next-intl'
import React, { FC } from 'react'

import Text from '@/components/text/Text'

import { createEmptyListMessage } from './report-lists.helpers'
import { ReportListsProps } from './report-lists.types'
import ReportList from './ReportList'

const ReportLists: FC<ReportListsProps> = (props) => {
  const { lists, status, ...rest } = props

  const t = useTranslations('listBranch')

  const emptyListMessage = createEmptyListMessage(t, status)

  if (!lists?.length) {
    return (
      <div className='flex items-center justify-center'>
        <Text tag='span' variant='caption' className='text-grey-darkest'>
          {emptyListMessage}
        </Text>
      </div>
    )
  }

  return (
    <div className='flex flex-col gap-2' {...rest}>
      {lists?.map((list, index) => <ReportList key={index} status={status} {...list} />)}
    </div>
  )
}

export default ReportLists
