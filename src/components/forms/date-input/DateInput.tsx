'use client'

import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import Text from '@/components/text/Text'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/libs/utils'

import { DateInputProps } from './date-input.types'

const DateInput: FC<DateInputProps> = (props) => {
  const t = useTranslations('common')

  const { name, label, required, inputLabel = t('pick_a_date'), disabled, ...rest } = props

  const { control } = useFormContext()

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
        render={({ field }) => (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                disabled={disabled}
                id='date'
                variant='outline'
                className={cn(
                  'justify-start px-4 py-2 text-left font-medium text-black',
                  !field.value && 'text-muted-foreground',
                  disabled && 'bg-grey-lightest cursor-not-allowed !opacity-100'
                )}
              >
                <CalendarIcon className='mr-1 h-4 w-4' />
                {field.value ? (
                  format(field.value, 'PPP')
                ) : (
                  <Text variant='body2' tag='span' className='text-grey'>
                    {inputLabel}
                  </Text>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0'>
              <Calendar
                mode='single'
                selected={field.value}
                onSelect={field.onChange}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        )}
      />
      <FormMessage name={name} />
    </FormItem>
  )
}

export default DateInput
