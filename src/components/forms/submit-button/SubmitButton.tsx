import type { FC } from 'react'

import React from 'react'
import { useTranslation } from 'react-i18next'

import ControlledButton from '../../button/ButtonControlled'

import type { ControlledButtonProps } from '../../button/button.types'

const SubmitButton: FC<ControlledButtonProps> = (props) => {
  const { name, isLoading, label, ...rest } = props

  const { t } = useTranslation('common')

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
