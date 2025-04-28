import React from 'react'

import { cn } from '@/libs/utils'

import Button from '../button'
import ControlledButton from '../button/controlled'

import type { ButtonGroupProps } from './types'

const ButtonGroup = (props: ButtonGroupProps) => {
  const { buttons, className, ...rest } = props

  const [leftButton, rightButton] = buttons

  const LeftButton = leftButton?.onSubmit ? ControlledButton : Button
  const RightButton = rightButton?.onSubmit ? ControlledButton : Button

  return (
    <div className={cn('flex items-center gap-3', className)} {...rest}>
      <LeftButton {...leftButton} />
      <RightButton {...rightButton} />
    </div>
  )
}

export default ButtonGroup
