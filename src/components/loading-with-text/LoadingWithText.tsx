import { Loader2 } from 'lucide-react'
import { useTranslations } from 'next-intl'
import React, { FC } from 'react'

import { cn } from '@/libs/utils'

import { LoadingWithTextProps } from './loading-with-text.types'
import Text from '../text/Text'

const LoadingWithText: FC<LoadingWithTextProps> = (props) => {
  const t = useTranslations('common')

  const { text = t('just_a_moment'), className, ...rest } = props

  return (
    <div className={cn('flex w-full items-center justify-center gap-2', className)} {...rest}>
      <Loader2 size={14} className='animate-spin' />
      <Text tag='p' variant='body1' weight='medium'>
        {text}
      </Text>
    </div>
  )
}

export default LoadingWithText
