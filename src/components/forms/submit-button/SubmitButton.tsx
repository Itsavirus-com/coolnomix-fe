import type { FC } from 'react'

import { useTranslations } from 'next-intl'
import React from 'react'

import ControlledButton from '../../button/ButtonControlled'

import type { ControlledButtonProps } from '../../button/button.types'

const SubmitButton: FC<ControlledButtonProps> = (props) => {
  const { name, isLoading, label, ...rest } = props

  const t = useTranslations('common')

  return (
    <ControlledButton
      type='submit'
      testID={`${name}-submit-button`}
      label={isLoading ? t('loading') : label}
      {...rest}
    />
  )
}

export default SubmitButton
