'use client'

import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { Controller, useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import Text from '@/components/text'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/libs/utils'

import type { DateRangeInputProps } from './types'

export function DatePickerWithRange(props: DateRangeInputProps) {
  const { name, label, className, required } = props

  const { t } = useTranslation()

  const { control } = useFormContext()

  return (
    <FormItem>
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
          <div className={cn('grid gap-2', className)}>
            <Popover>
              <PopoverTrigger asChild className='px-3 py-2.5'>
                <Button
                  id='date'
                  variant='outline'
                  className={cn(
                    'justify-start text-left font-medium text-black',
                    !field.value && 'text-muted-foreground'
                  )}
                >
                  <CalendarIcon className='mr-2 h-4 w-4' />
                  {field.value?.from ? (
                    field.value.to ? (
                      <>
                        {format(field.value.from, 'LLL dd, y')} -
                        {format(field.value.to, 'LLL dd, y')}
                      </>
                    ) : (
                      format(field.value.from, 'LLL dd, y')
                    )
                  ) : (
                    <Text variant='body2' tag='span'>
                      {t('pick_a_date_range')}
                    </Text>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-auto p-0' align='start'>
                <Calendar
                  initialFocus
                  mode='range'
                  defaultMonth={field.value?.from}
                  selected={field.value}
                  onSelect={field.onChange}
                  numberOfMonths={2}
                  className='text-black'
                />
              </PopoverContent>
            </Popover>
          </div>
        )}
      />
      <FormMessage name={name} />
    </FormItem>
  )
}
