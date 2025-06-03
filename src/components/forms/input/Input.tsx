import type { FC } from 'react'

import React from 'react'
import { useController, useFormContext } from 'react-hook-form'

import Icon from '@/components/icon/Icon'
import Text from '@/components/text/Text'
import { FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

import type { ControlledInputProps } from './input.types'

const ControlledInput: FC<ControlledInputProps> = (props) => {
  const {
    name,
    label,
    placeholder,
    labelClassname,
    required,
    testID,
    hint,
    index,
    disabled,
    type = 'text',
    min = 0,
    max,
    inputMode,
    pattern,
    ...rest
  } = props

  const { control } = useFormContext()
  const { field } = useController({
    name,
    control
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === 'number') {
      const value = e.target.value ? Number(e.target.value) : ''
      field.onChange(value)
    } else {
      field.onChange(e.target.value)
    }
  }

  return (
    <FormItem {...rest}>
      <FormLabel name={name} id={name} className={labelClassname}>
        {label}
        {hint && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Icon icon='icon-info-circle' size={14} className='text-brand-muted' />
            </TooltipTrigger>
            <TooltipContent>
              <Text tag='span' className='text-grey-darkest'>
                {hint}
              </Text>
            </TooltipContent>
          </Tooltip>
        )}
        {required && <span className='text-destructive'>*</span>}
      </FormLabel>
      <Input
        placeholder={placeholder}
        data-test-id={testID}
        disabled={disabled}
        type={type}
        inputMode={inputMode}
        pattern={pattern}
        {...field}
        value={field.value || ''}
        onChange={handleChange}
        min={min}
        max={max}
      />
      <FormMessage index={index} name={name} />
    </FormItem>
  )
}

export default ControlledInput
