import type { FC } from 'react'

import React from 'react'

import Text from '../text'

import type { DescriptionProps } from './index.types'

const Description: FC<DescriptionProps> = (props) => {
  const { label, children } = props

  return (
    <>
      <Text variant='title3' weight='bold'>
        {label}
      </Text>
      <Text className='text-grey-darkest mt-2'>{children}</Text>
    </>
  )
}

export default Description
