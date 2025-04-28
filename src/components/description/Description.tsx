import type { FC } from 'react'

import React from 'react'

import Text from '../text/Text'

import type { DescriptionProps } from './description.types'

const Description: FC<DescriptionProps> = (props) => {
  const { label, children, titleTag = 'p', ...rest } = props

  return (
    <div {...rest}>
      <Text tag={titleTag} variant='title3' weight='bold'>
        {label}
      </Text>
      <Text className='text-grey-darkest mt-2'>{children}</Text>
    </div>
  )
}

export default Description
