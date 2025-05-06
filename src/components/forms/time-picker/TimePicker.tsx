'use client'

import { format } from 'date-fns'
import { FC, useMemo, useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import Text from '@/components/text/Text'
import { Button } from '@/components/ui/button'
import { FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { cn } from '@/libs/utils'

import { calculateNewTime } from './helpers'
import { TimePickerProps } from './time-picker.types'

const TimePicker: FC<TimePickerProps> = (props) => {
  const { t } = useTranslation('qna')

  const {
    name,
    label,
    inputLabel = t('pick_a_time'),
    minuteStep = 1,
    required,
    index,
    disabled,
    ...rest
  } = props

  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  const { control } = useFormContext()

  const hourOptions = useMemo(() => {
    return Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'))
  }, [])

  const minuteOptions = useMemo(() => {
    const options = []
    for (let i = 0; i < 60; i += minuteStep) {
      options.push(i.toString().padStart(2, '0'))
    }
    return options
  }, [])

  return (
    <FormItem {...rest}>
      {label && (
        <FormLabel name={name} id={name}>
          {label}
          {required && <span className='text-destructive'>*</span>}
        </FormLabel>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          const { value, onChange, ref } = field

          const currentHours = value ? value?.getHours() : 0
          const currentMinutes = value ? value?.getMinutes() : 0

          return (
            <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
              <PopoverTrigger asChild disabled={disabled}>
                <Button
                  ref={ref}
                  variant='outline'
                  role='combobox'
                  aria-expanded={isPopoverOpen}
                  className={cn(
                    'justify-start px-4 py-2 text-left font-normal',
                    !value && 'text-muted-foreground',
                    disabled && 'bg-grey-lightest cursor-not-allowed !opacity-100'
                  )}
                >
                  {value ? (
                    format(value, 'HH:mm')
                  ) : (
                    <Text variant='body2' tag='span' className='text-grey'>
                      {inputLabel}
                    </Text>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-auto p-0'>
                <div className='border-border flex items-center justify-center gap-1 p-2'>
                  <Select
                    value={currentHours.toString().padStart(2, '0')}
                    onValueChange={(val) => {
                      const newTime = calculateNewTime(value, val, 'hours')
                      onChange(newTime)
                    }}
                  >
                    <SelectTrigger id='hours-select' className='w-20'>
                      <SelectValue placeholder='HH' />
                    </SelectTrigger>
                    <SelectContent>
                      {hourOptions.map((hour) => (
                        <SelectItem key={hour} value={hour}>
                          {hour}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <span>:</span>
                  <Select
                    value={currentMinutes.toString().padStart(2, '0')}
                    onValueChange={(val) => {
                      const newTime = calculateNewTime(value, val, 'minutes')
                      onChange(newTime)
                    }}
                  >
                    <SelectTrigger id='minutes-select' className='w-20'>
                      <SelectValue placeholder='MM' />
                    </SelectTrigger>
                    <SelectContent>
                      {minuteOptions.map((minute) => (
                        <SelectItem key={minute} value={minute}>
                          {minute}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </PopoverContent>
            </Popover>
          )
        }}
      />
      <FormMessage name={name} index={index} />
    </FormItem>
  )
}

export default TimePicker
