import React, { FC } from 'react'

import Text from '@/components/text/Text'

import { useQnaSubmissionLists } from './qna-submission-lists.hook'
import { QnaSubmissionListsProps } from './qna-submission-lists.types'
import QnaSubmissionList from './QnaSubmissionList'

const QnaSubmissionLists: FC<QnaSubmissionListsProps> = (props) => {
  const { lists, status, ...rest } = props

  const { emptyListMessage } = useQnaSubmissionLists(status)

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
      {lists?.map((list, index) => <QnaSubmissionList key={index} status={status} {...list} />)}
    </div>
  )
}

export default QnaSubmissionLists
